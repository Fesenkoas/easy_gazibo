import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

import { useSelector } from "react-redux";


export const LineChart = () => {
   const { line } = useSelector((state) => state.calcFile);

  const chartContainer = useRef(null);
  const chartInstance = useRef(null);
  
console.log(line.day);
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: line.day,
          datasets: [
            {
              label: "Printed",
              data: line.height,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
            // {
            //   label: "Waste",
            //   data: [0, 20, 30, 40, 50],
            //   fill: false,
            //   borderColor: "rgb(255, 99, 132)",
            //   tension: 0.1,
            // },
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
  }, [line]);

  return <canvas ref={chartContainer} />;
};
