"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import NFT1Svg from "@/app/assets/image/nft1.svg";
import logoSvg from "@/app/assets/image/logo.svg";
import Nft from "../components/UI/nft";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useReadContract, useAccount } from "wagmi";
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
type tokenValueState = {
  name: string;
  image: string;
  description: string;
  attributes: {
    [key: string]: any;
  };
};

interface tokenIdInterface {
  tokenId: string;
}
export default function CollectionNFT({ tokenId }: tokenIdInterface) {
  const [tokenImage, setTokenImage] = useState<string>();
  const [tokenName, setTokenName] = useState<string>();
  const { data: tokenURI } = useReadContract({
    abi,
    address: "0x1c1c3500C453C124b30CF4656bF533352D2841Ad",
    functionName: "tokenURI",
    args: [tokenId],
  });
  const fetchData = async (tokenURI: string) => {
    try {
      const response = await fetch(tokenURI);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: tokenValueState = await response.json();
      setTokenImage(data.image);
      setTokenName(data.name);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (tokenURI) {
      fetchData(tokenURI as string);
    }
  }, [tokenURI]);
  return (
    <>
      {tokenName && tokenImage && (
        <Nft nftUrl={tokenImage} name={tokenName} description="" />
      )}
    </>
  );
}
