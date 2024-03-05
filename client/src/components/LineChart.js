import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { sempl } from "../util/temporaryDB";

export const LineChart = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: sempl.day,
          datasets: [
            {
              label: "Printed",
              data: sempl.height,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
            {
              label: "Waste",
              data: [0, 20, 30, 40, 50],
              fill: false,
              borderColor: "rgb(255, 99, 132)",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                //   text: 'Day'
              },
            },
            y: {
              title: {
                display: true,
                //   text: 'Metr'
              },
            },
          },
        },
      });
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartContainer} />;
};
