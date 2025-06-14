import React from 'react';

const ExpenseList = ({ expenses }) => (
  <ul>
    {expenses.map(exp => (
      <li key={exp._id}>
        {exp.date} - {exp.description} - ₹{exp.amount} ({exp.type})
      </li>
    ))}
  </ul>
);

export default ExpenseList;
