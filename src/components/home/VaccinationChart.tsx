import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    }
  }
};

// Create an array to hold the months from September 21st to January 20th
const labels = [];
for (let i = 21; i <= 31; i++) {
  labels.push(`9/${i}`);
}
for (let i = 1; i <= 20; i++) {
  labels.push(`10/${i}`);
}

// Generate random data for each month
const data = {
  labels,
  datasets: [
    {
      label: 'Đã tiêm',
      data: labels.map(() => faker.datatype.number({ min: 400000, max: 2000000 })),
      borderColor: '#303F9F',
      backgroundColor: '#303F9F',
      pointBackgroundColor: '#EE0033',
      pointBorderColor: '#EE0033',
      tension: 0.01
    }
  ]
};

export { data };
const VaccinationChart: FC = () => {
  return (
    <Box sx={{ boxShadow: 0, p: '36px' }}>
      <Box
        sx={{
          padding: '24px 16px',
          borderRadius: '8px',
          boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'
        }}
      >
        <Typography sx={{ fontSize: '20px', fontWeight: '500', lineHeight: '160%' }}>
          Dữ liệu tiêm theo ngày
        </Typography>
        <Line style={{ border: '1px solid #EE0033' }} options={options} data={data} />
      </Box>
    </Box>
  );
};

export default VaccinationChart;
