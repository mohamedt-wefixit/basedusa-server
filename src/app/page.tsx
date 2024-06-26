"use client"
import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import { createWallet } from "thirdweb/wallets";
import { defineChain } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";

export default function Home() {
  const wallets =[
    createWallet('com.coinbase.wallet')
  ]
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto bg-[#E93734]">
      <div className="py-20">

          <ConnectButton
            client={client}
            wallets={wallets}
            chain={defineChain(baseSepolia)}

          />

      </div>
    </main>
  );
}
