import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useGetTransactions } from '../../hooks/useGetTransactions';
import { getWeeklyData } from '../../utils/getWeeklyData';

const LineChartView = () => {
  const { transactions, loading } = useGetTransactions();
  const [isLoading, setIsLoading] = useState(true);

  const weeklyData = getWeeklyData(transactions);

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Expenses',
        data: weeklyData.map((dayData) => dayData.expenses),
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        lineTension: 0.4,
      },
      {
        label: 'Income',
        data: weeklyData.map((dayData) => dayData.income),
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        lineTension: 0.4,
      },
    ],
  };

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return <Line data={data} />;
};

export default LineChartView;
