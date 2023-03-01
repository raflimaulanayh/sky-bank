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

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: '',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May'];

export const data = {
    labels,
    datasets: [
        {
            label: 'expenditure',
            data: [18127, 22201, 19490, 17938, 24182],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'income',
            data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export function Chart() {
    return <Bar options={options} data={data} />;
}
