'use client';
import { useAccount, useConnect, useDisconnect, useSwitchChain } from 'wagmi';
import { useDict } from './DictionaryProvider';

export default function WalletConnectButton() {
  const { dict } = useDict();
  const { address, chain } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();
  const allowed = 8453;
  if (!address)
    return (
      <button
        onClick={() => connect({ connector: connectors[0] })}
        className="rounded-2xl px-4 py-2 bg-king-navy text-king-ivory text-sm"
      >
        {dict.wallet.connect}
      </button>
    );
  if (chain && chain.id !== allowed)
    return (
      <button
        onClick={() => switchChain({ chainId: allowed })}
        className="rounded-2xl px-4 py-2 bg-king-navy text-king-ivory text-sm"
      >
        {dict.wallet.switch}
      </button>
    );
  return (
    <button
      onClick={() => disconnect()}
      className="rounded-2xl px-4 py-2 bg-king-navy text-king-ivory text-sm"
    >
      {address.slice(0, 6)}…{address.slice(-4)}
    </button>
  );
}
