'use client';
import { WagmiConfig, createConfig } from 'wagmi';
import { base } from 'viem/chains';
import { coinbaseWallet } from 'wagmi/connectors';
import { http } from 'viem';

const config = createConfig({
  chains: [base],
  transports: { [base.id]: http() },
  connectors: [coinbaseWallet({ appName: 'KingPL' })],
});

export function Web3Providers({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}
