export const line = {
  labels: ["January", "February", "March", "April", "May", "June", "July"], //folderDate
  datasets: [
    {
      label: "Printed",
      data: [65, 59, 80, 81, 56, 55, 40], //height*col
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Waste",
      data: [0, 20, 40, 60, 80, 120, 140], //waste
      fill: false,
      borderColor: "rgb(255, 99, 132)",
      tension: 0.1,
    },
  ],
};
// export const sempl = {
//   day: ["02.03", "03.03", "04.03"],
//   height: ["320", "630", "520"],
// };



export function calculateHeightForFabric(data, fabricName) {
  let totalHeightDay = 0;
  let totalHeightWeek = 0;
  let totalHeightMonth = 0;
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  
  data.forEach((entry) => {
    if (entry.folderFabric === fabricName) {
      entry.folderDate.forEach((folder) => {
        const [day, month] = folder.date.split(".");

        folder.item.forEach((item) => {
          const height = parseInt(item.width);
          const col = parseInt(item.col);
          if (
            parseInt(day) === currentDate.getDate() &&
            parseInt(month) === currentDate.getMonth() + 1
          ) {
            totalHeightDay += height * col;
          }

          if (
            parseInt(day) >= currentDate.getDate() - currentDate.getDay() + 1 &&
            parseInt(month) === currentDate.getMonth() + 1
          ) {
            totalHeightWeek += height * col;
          }

          if (parseInt(month) === currentMonth) {
            totalHeightMonth += height * col;
          }
        });
      });
    }
  });

  return {
    totalHeightDay,
    totalHeightWeek,
    totalHeightMonth,
  };
}
