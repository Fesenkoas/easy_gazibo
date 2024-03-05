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
export const sempl={
  day:['02.03','03.03','04.03',],
  height:['320','630','520']
}
export const graph =[
{
  day:'02.03',
  height:'320'
},
{
  day:'03.03',
  height:'630'
},
{
  day:'04.03',
  height:'520'
}



]
export const newData = [
  {
  fabricName: "Backlit320",
  folderDate: [
    {
      date: "01.03",
      waste: "100",
      item: [
        {
          fullUrl: "url",
          fileName: "1 Mapa 180 320x335cm X4",
          height: "310",
          width: "335",
          col: 4,
          print: false,
        },
        {
          fullUrl: "url",
          fileName: "2 Mapa 180 320x335cm X4",
          height: "310",
          width: "335",
          col: 4,
          print: false,
        }
      ],
    },
    {
      date: "02.03",
      waste: "100",
      item: [
        {
          fullUrl: "url",
          fileName: "1 Mapa 180 320x335cm X4",
          height: "320",
          width: "335",
          col: 4,
          print: false,
        }
      ],
    },
    
  ],
},
{
  fabricName: "Flag",
  folderDate: [
    {
      date: "23.02",
      waste: "100",
      item: [
        {
          fullUrl: "url",
          fileName: "1 Mapa 180 320x335cm X4",
          height: "320",
          width: "335",
          col: 4,
          print: false,
        },
      ],
    },
    {
      date: "22.02",
      waste: "100",
      item: [
        {
          fullUrl: "url",
          fileName: "1 Mapa 180 320x335cm X4",
          height: "320",
          width: "335",
          col: 4,
          print: false,
        }
      ],
    },
    
  ],
}
];



export function calculateHeightForFabric(data, fabricName) {
  let totalHeightDay = 0;
  let totalHeightWeek = 0;
  let totalHeightMonth = 0;

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  data.forEach(entry => {
    if (entry.fabricName === fabricName) {
      entry.folderDate.forEach(folder => {
        const [day, month] = folder.date.split('.');

        folder.item.forEach(item => {
          const height = parseInt(item.height);
          const col = parseInt(item.col);

          if (parseInt(day) === currentDate.getDate() && parseInt(month) === (currentDate.getMonth() + 1)) {
            totalHeightDay += height*col;
          }

          if (parseInt(day) >= currentDate.getDate() - currentDate.getDay() + 1 && parseInt(month) === (currentDate.getMonth() + 1)) {
            totalHeightWeek += height*col;
          }

          if (parseInt(month) === currentMonth) {
            totalHeightMonth += height*col;
          }
        });
      });
    }
  });

  return {
    totalHeightDay,
    totalHeightWeek,
    totalHeightMonth
  };
}
