interface Holding {
  asset: string;
  amount: number;
  unit?: string;
  valueUsd: number;
  proof: string;
}
export default function TreasuryTable({ data }: { data: Holding[] }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left">
          <th className="p-2">Asset</th>
          <th className="p-2">Amount</th>
          <th className="p-2">Proof</th>
        </tr>
      </thead>
      <tbody>
        {data.map((h) => (
          <tr key={h.asset} className="border-t border-white/10">
            <td className="p-2">{h.asset}</td>
            <td className="p-2">{h.amount} {h.unit}</td>
            <td className="p-2">{h.proof}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
