export const getWeeklyData = (transactions) => {
  const weeklyTransactions = {
    Mon: { expenses: 0, income: 0 },
    Tue: { expenses: 0, income: 0 },
    Wed: { expenses: 0, income: 0 },
    Thu: { expenses: 0, income: 0 },
    Fri: { expenses: 0, income: 0 },
    Sat: { expenses: 0, income: 0 },
    Sun: { expenses: 0, income: 0 },
  };

  transactions.forEach((transaction) => {
    const dayOfWeek = new Date(
      transaction.createdAt.toDate()
    ).toLocaleDateString('en-US', { weekday: 'short' });
    if (transaction.transactionType === 'expense') {
      weeklyTransactions[dayOfWeek].expenses += Number(
        transaction.transactionAmount
      );
    } else if (transaction.transactionType === 'income') {
      weeklyTransactions[dayOfWeek].income += Number(
        transaction.transactionAmount
      );
    }
  });

  return Object.values(weeklyTransactions).map((dayData) => ({
    expenses: dayData.expenses,
    income: dayData.income,
  }));
};
