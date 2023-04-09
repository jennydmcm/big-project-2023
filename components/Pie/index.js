import styles from './BarChartOne.module.css'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export function PieChart() {
    return <Pie data={data} />;
}

export const data = {
    labels: ['Drug overdoses', 'Opioid-involved overdose', 'Amphetamine-involved overdose', 'Opioid and Amphetamine-involved overdose', 'Other drug overdoses'],
    datasets: [
        {
            label: 'Change in life expectancy',
            data: [-0.040, -0.025, -0.002, -0.017, 0.004],
            backgroundColor: [
                'rgba(87, 98, 184, 1)',
                'rgba(210, 215, 255, 1)',
                'rgba(131, 142, 226, 1)',
                'rgba(36, 43, 94, 1)',
                'rgba(54, 65, 139, 1)'

            ],
            borderColor: [
                'rgba(87, 98, 184, 1)',
                'rgba(210, 215, 255, 1)',
                'rgba(131, 142, 226, 1)',
                'rgba(36, 43, 94, 1)',
                'rgba(54, 65, 139, 1)'
            ],
            borderWidth: 1,
        },
    ],
};
