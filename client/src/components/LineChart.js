import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const LineChart = () => {
    const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Уничтожаем предыдущий график перед созданием нового
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Printed',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: 'Waste',
            data: [0, 20, 40, 60, 80, 120, 140],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
          }
        ]
        },
        options: {
          scales: {
            x: {
                title: {
                  display: true,
                //   text: 'Day'
                }
              },
              y: {
                title: {
                  display: true,
                //   text: 'Metr'
                }
              }
          }
        }
      });
    }

    // Возвращаем функцию очистки, которая уничтожает график при размонтировании компонента
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartContainer} />;
}
