"use client";

import ConnectWallet from "./ConnectWallet";
import ContractCallVote from "./ContractCallVote";
import { useStacksAddress } from "../hooks/useStacksAddress";

/**
 * Groups the Stacks.js demo components and shares the connected address.
 */
export default function StacksDemo() {
  const { address, mounted, refresh } = useStacksAddress();

  return (
    <>
      {/* ConnectWallet file: `./app/components/ConnectWallet.tsx` */}
      <ConnectWallet address={address} mounted={mounted} refresh={refresh} />

      {/* ContractCallVote file: `./app/components/ContractCallVote.tsx` */}
      <ContractCallVote address={address} />
    </>
  );
}
