import React from 'react';
// Components
import Profile from './Profile/Profile';
import Statistics from './Statisics/Statistics';
import Friends from './Friends/Friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
// Data
import user from '../data/user.json';
import stat from '../data/stat.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
// CSS
import './Profile/Profile.css';
import './Statisics/statistic.css';
import './Friends/friends.css';
import './TransactionHistory/transactions.css';

export default function App() {
  return (
    <React.StrictMode>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={stat} />
      <Statistics stats={stat} />
      <Friends friends={friends} />
      <TransactionHistory transactions={transactions} />
    </React.StrictMode>
  );
}
