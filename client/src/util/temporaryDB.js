export const data = [
  {
    folderDate: "23.02",
    folderFabric: [
      {
        fabricName: "Backlit320",
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
        fabricName: "Strech",
        waste: "100",
        item: [
          {
            fullUrl: "url",
            fileName: "1 Mapa 180 300x200cm X1",
            height: "500",
            width: "300",
            col: 1,
            print: false,
          },
        ],
      },
    ],
  },
  {
    folderDate: "22.02",
    folderFabric: [
      {
        fabricName: "Flag",
        waste: "100",
        item: [
          {
            fullUrl: "url",
            fileName: "1 Mapa 180 500x300cm X2",
            height: "500",
            width: "300",
            col: 2,
            print: false,
          },
        ],
      },
    ],
  },
];

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

export const newData = [
  {
  fabricName: "Backlit320",
  folderDate: [
    {
      date: "23.02",
      item: [
        {
          fullUrl: "url",
          fileName: "1 Mapa 180 320x335cm X4",
          height: "320",
          width: "335",
          col: 4,
          print: false,
          waste: "100",
        },
        {
          fullUrl: "url",
          fileName: "2 Mapa 180 320x335cm X4",
          height: "320",
          width: "335",
          col: 4,
          print: false,
          waste: "100",
        }
      ],
    },
    {
      date: "22.02",
      item: [
        {
          fullUrl: "url",
          fileName: "1 Mapa 180 320x335cm X4",
          height: "320",
          width: "335",
          col: 4,
          print: false,
          waste: "100",
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
      
      item: [
        {
          fullUrl: "url",
          fileName: "1 Mapa 180 320x335cm X4",
          height: "320",
          width: "335",
          col: 4,
          print: false,
          waste: "100",
        },
      ],
    },
    {
      date: "22.02",
      
      item: [
        {
          fullUrl: "url",
          fileName: "1 Mapa 180 320x335cm X4",
          height: "320",
          width: "335",
          col: 4,
          print: false,
          waste: "100",
        }
      ],
    },
    
  ],
}
];
