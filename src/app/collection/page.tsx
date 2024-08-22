"use client";
import Image from "next/image";
import logoSvg from "@/app/assets/image/logo.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import CollectionMain from "./collectionMain";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";

export default function Collection() {
  const account = useAccount();
  if (account.status === "disconnected" || account.status === "connecting") {
    toast(`Please connect to wallet!`, {
      type: "warning",
    });
  }
  return (
    <>
      <main className="flex min-h-screen flex-col w-[90%] lg:max-w-[70%] mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <Image src={logoSvg} alt="Collection Img" className="w-[150px]" />
          </Link>
          <ConnectButton />
        </div>
        {account.address && <CollectionMain />}
      </main>
    </>
  );
}
