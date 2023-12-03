import getRandomHex from './RandomHex';

export default function Statisic({ label, percentage }) {
  return (
    <li className="item" style={{ backgroundColor: getRandomHex() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}
