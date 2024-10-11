// // src/components/PopulationBarChart.tsx
// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { BarChart } from '@mui/x-charts/BarChart';

// interface PopulationData {
//   year: string;
//   population: number;
// }

// const populationData: PopulationData[] = [
//   { year: '2018', population: 500 },
//   { year: '2019', population: 600 },
//   { year: '2020', population: 700 },
//   { year: '2021', population: 800 },
//   { year: '2022', population: 900 },
// ];

// const PopulationBarChart: React.FC = () => {
//   return (
//     <Box sx={{ width: '100%', padding: 2 }}>
//       <Typography variant="h6" gutterBottom>
//         Population Bar Chart
//       </Typography>
//       <BarChart
//         series={[
//           {
//             data: populationData.map((item) => item.population),
//             name: 'Population',
//             color: '#3f51b5',
//           },
//         ]}
//         height={300}
//         xAxis={[
//           {
//             data: populationData.map((item) => item.year),
//             scaleType: 'band',
//             label: 'Year',
//           },
//         ]}
//         yAxis={[
//           {
//             label: 'Population',
//             min: 0,
//             max: 1000,
//             interval: 100,
//           },
//         ]}
//         margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
//       />
//       <Typography variant="body2" sx={{ mt: 2 }}>
//         This bar chart represents the population growth from 2018 to 2022, illustrating a steady increase over the years.
//       </Typography>
//     </Box>
//   );
// };

// export default PopulationBarChart;
