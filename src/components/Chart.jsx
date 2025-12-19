import { useEffect } from "react";
import { useState } from "react";
import LoadingCard from "./LoadingCard.jsx";
import ErrorCard from "./ErrorCard.jsx";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";

import "chartjs-adapter-date-fns";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
);

const CoinChart = ({ coinid }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [chartData, setChartData] = useState([]);
  const chartUrl = `${
    import.meta.env.VITE_API_COINCHART
  }/${coinid}/market_chart?vs_currency=usd&days=7`;

  useEffect(() => {
    const fetchCoinChart = async () => {
      try {
        const res = await fetch(chartUrl);
        if (!res.ok) throw new Error("Something Wrong");
        const datas = await res.json();

        const priceAndDay = datas.prices.map((data) => ({
          x: data[0],
          y: data[1],
        }));

        setChartData({
          datasets: [
            {
              label: "Price (USD)",
              data: priceAndDay,

              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "#4f46e5",
              backgroundColor: "rgba(79, 70, 229, 0.1)",

              borderWidth: 1.5,
              tension: 0.3,
              pointRadius: 1,
              pointHoverRadius: 5,
            },
          ],
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoinChart();
  }, []);

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 7,
        },
      },
      y: {
        ticks: {
          callback: (value) => value.toLocaleString(),
        },
      },
    },
  };

  return (
    <>
      {loading && <LoadingCard />}

      {error && <ErrorCard error={error} />}

      {!loading && !error && <Line options={options} data={chartData} />}
    </>
  );
};

export default CoinChart;
