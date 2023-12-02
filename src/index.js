import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from 'components/Profile/Profile';
import user from './data/user.json';
import './index.css';
import './components/Profile/Profile.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile {...user} />
  </React.StrictMode>
);
