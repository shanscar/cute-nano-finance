// @platform: adaptable
// Note: Pure state hook, works cross-platform
import { useState } from 'react';

export const useBalance = (initialBalance: string = '0.00') => {
  const [balance, setBalance] = useState(initialBalance);

  const updateBalance = (amount: number) => {
    const currentBalance = parseFloat(balance);
    const newBalance = currentBalance + amount;
    setBalance(newBalance.toFixed(2));
  };

  return {
    balance,
    updateBalance,
    setBalance,
  };
};
