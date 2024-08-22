"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import NFT1Svg from "@/app/assets/image/nft1.svg";
import logoSvg from "@/app/assets/image/logo.svg";
import Nft from "../components/UI/nft";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import Modal from "react-modal";
import LoadingSpin from "../components/UI/loading";
import { abi, contractAddress } from "@/app/assets/contract/contract.json";
import Link from "next/link";
const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "50%",
      bottom: "auto",
      width: "50%",
      // height: '80%',
      background: "none",
      padding: "40px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "15px",
      border: "none",
    },
  };

export default function Mint() {
  const [value, setValue] = useState(1);
  const { data: hash, isPending, writeContract } = useWriteContract();

  const minus = () => {
    if (value > 1) {
      setValue((prev) => prev - 1);
    }
  };
  const plus = () => {
    if (Number(value) < 5) {
      setValue((prev) => Number(prev) + 1);
    }
  };
  const mintFn = async () => {
    writeContract({
      address: "0x1c1c3500C453C124b30CF4656bF533352D2841Ad",
      abi,
      functionName: "mint",
      args: [BigInt(value)],
    });
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })
  return (
    <>
      <main className="flex min-h-screen flex-col w-[90%] lg:max-w-[70%] mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link href="/"><Image src={logoSvg} alt="Collection Img" className="w-[150px]" /></Link>
          <ConnectButton />
        </div>
        <div className="flex flex-col justify-center items-center w-fit gap-4 m-auto max-w-[300px]">
          <Nft nftUrl={NFT1Svg} name="" description="" />
          <div className="flex gap-2 items-center text-white">
            <button onClick={minus} className="border p-3 rounded-md ">
              -
            </button>
            <input
              type="text"
              className="bg-transparent w-full focus:outline-none text-center font-bold border rounded-md py-4 h-[50px]"
              name=""
              id=""
              disabled
              value={value}
              onChange={(e: any) => setValue(e.target.value)}
            />
            <button onClick={plus} className="border p-3 rounded-md">
              +
            </button>
          </div>
          <button
            className="border py-4 px-8 rounded-full w-full small text-white"
            onClick={mintFn}
            disabled={isPending}
          >
            Mint
          </button>
        </div>
      </main>
      {isPending && (
        <Modal
          closeTimeoutMS={200}
          isOpen={true}
          preventScroll={true}
          style={customStyles}
          overlayClassName={"screen_store_modal bg-[#141414bf]"}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true}
        >
          <div className="flex justify-center w-full items-center h-[620px]">
            <LoadingSpin description="Processing..." />
          </div>
        </Modal>
      )}
    </>
  );
}
