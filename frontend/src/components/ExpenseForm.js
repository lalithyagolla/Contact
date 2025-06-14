import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    date: '', description: '', amount: '', type: 'TA'
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/expenses', form);
    onAdd(res.data);
    setForm({ date: '', description: '', amount: '', type: 'TA' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="date" value={form.date} onChange={handleChange} placeholder="Date" />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <input name="amount" value={form.amount} onChange={handleChange} placeholder="Amount" type="number" />
      <select name="type" value={form.type} onChange={handleChange}>
        <option value="TA">TA</option>
        <option value="DA">DA</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default ExpenseForm;
