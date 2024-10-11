import React from 'react';
import { Box, Typography } from '@mui/material';
import { ScatterChart } from '@mui/x-charts/ScatterChart';

interface ScatterDataPoint {
  x: number;
  y: number;
  id: string;
}

const scatterData1: ScatterDataPoint[] = [
  { id: 'data-0', x: 329.39, y: 443.28 },
  { id: 'data-1', x: 96.94, y: 110.5 },
  { id: 'data-2', x: 336.35, y: 175.23 },
  { id: 'data-3', x: 159.44, y: 195.97 },
  { id: 'data-4', x: 188.86, y: 351.77 },
];

const scatterData2: ScatterDataPoint[] = [
  { id: 'data-0', x: 100.39, y: 200.28 },
  { id: 'data-1', x: 150.94, y: 150.5 },
  { id: 'data-2', x: 250.35, y: 300.23 },
  { id: 'data-3', x: 400.44, y: 300.97 },
  { id: 'data-4', x: 300.86, y: 450.77 },
];

const DemographicsScatterChart: React.FC = () => {
  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Demographics Scatter Chart 1
      </Typography>
      <ScatterChart
        width={600}
        height={300}
        series={[
          {
            data: scatterData1,
            color: '#3f51b5',
          },
        ]}
        xAxis={[
          {
            label: 'Age',
            min: 0,
            max: 500,
          },
        ]}
        yAxis={[
          {
            label: 'Income',
            min: 0,
            max: 500,
          },
        ]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
      <Typography variant="body2" sx={{ mt: 2 }}>
        This scatter chart illustrates the relationship between age and income for a particular dataset.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Demographics Scatter Chart 2
      </Typography>
      <ScatterChart
        width={600}
        height={300}
        series={[
          {
            data: scatterData2,
            color: '#f50057',
          },
        ]}
        xAxis={[
          {
            label: 'Age',
            min: 0,
            max: 500,
          },
        ]}
        yAxis={[
          {
            label: 'Education Level',
            min: 0,
            max: 500,
          },
        ]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
      <Typography variant="body2" sx={{ mt: 2 }}>
        This scatter chart illustrates the relationship between age and education level for another dataset.
      </Typography>
    </Box>
  );
};

export default DemographicsScatterChart;
