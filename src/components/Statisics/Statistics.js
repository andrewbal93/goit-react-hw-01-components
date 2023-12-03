import Statisic from './Statistic';

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <Statisic key={stat.id} {...stat} />
        ))}
      </ul>
    </section>
  );
}
