import { useState } from 'react';

const initialState = {
  email: '',
  phone: '',
};

export const OrderHistoryForm = ({ getOrderHistory }) => {
  const [userData, setUserData] = useState(initialState);

  const handleInputChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    getOrderHistory(userData);
  };

  const { email, phone } = userData;

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="email" name="email" value={email} onChange={handleInputChange} />
      <input type="number" name="phone" value={phone} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
};
