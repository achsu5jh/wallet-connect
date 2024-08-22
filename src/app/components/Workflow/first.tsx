import Image from "next/image";
import workflow1Svg from "@/app/assets/image/workflow1.svg";
import ArrowUpRightSvg from "@/app/assets/image/arrow-up-right.svg";
import Link from "next/link";

export default function FirstWorkFlow() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between gap-4 my-8">
      <div className="w-full lg:w-[615px]">
        <Image src={workflow1Svg} alt="Collection Img" className="w-[575px]" />
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-[615px] ">
        <p className="font-bold bg-nft-gradient">01.</p>
        <p className="text-white font-bold text-3xl lg:text-7xl linear">
          Setup and connect your wallet.
        </p>
        <p className="text-[#B7B4BB] font-normal text-sm lg:text-2xl">
          Use Trust Wallet, Metamask or any wallet to connect to multiple chains
          the app.
        </p>
        <p className="text-[#B7B4BB] font-normal text-sm lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Metamask or
          any wallet ipsam temporibus.
        </p>
        <Link href="#" className="flex gap-1 text-white">
          Learn more
          <Image src={ArrowUpRightSvg} alt="arrow Img" className="w-[20px]" />
        </Link>
      </div>
    </div>
  );
}
