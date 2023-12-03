import Transaction from './Transaction';

export default function TransactionHistory({ transactions }) {
  return (
    <div>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(item => (
            <Transaction key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
