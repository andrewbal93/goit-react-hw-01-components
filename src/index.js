import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statisics/Statistics';
import Friends from 'components/Friends/Friends';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import stat from './data/stat.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import './index.css';
import './components/Profile/Profile.css';
import './components/Statisics/statistic.css';
import './components/Friends/friends.css';
import './components/TransactionHistory/transactions.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile {...user} />
    <Statistics title="Upload stats" stats={stat} />
    <Statistics stats={stat} />
    <Friends friends={friends} />
    <TransactionHistory transactions={transactions} />
  </React.StrictMode>
);
