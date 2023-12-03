import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statisics/Statistics';
import user from './data/user.json';
import stat from './data/stat.json';
import './index.css';
import './components/Profile/Profile.css';
import './components/Statisics/statistic.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile {...user} />
    <Statistics title="Upload stats" stats={stat} />
    <Statistics stats={stat} />
  </React.StrictMode>
);
