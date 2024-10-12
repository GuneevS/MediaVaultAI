import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = [
  { country: 'Nigeria', tvPenetration: 65, radioPenetration: 85 },
  { country: 'Kenya', tvPenetration: 55, radioPenetration: 90 },
  { country: 'South Africa', tvPenetration: 75, radioPenetration: 80 },
  { country: 'Ghana', tvPenetration: 60, radioPenetration: 88 },
];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Media Penetration by Country',
    },
  },
};

const Dashboard: React.FC = () => {
  const chartData = {
    labels: data.map(item => item.country),
    datasets: [
      {
        label: 'TV Penetration %',
        data: data.map(item => item.tvPenetration),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Radio Penetration %',
        data: data.map(item => item.radioPenetration),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Media Landscape Overview</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;