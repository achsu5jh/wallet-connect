import Image from "next/image";
import workflow3Svg from "@/app/assets/image/workflow3.svg";
import ArrowUpRightSvg from "@/app/assets/image/arrow-up-right.svg";
import Link from "next/link";

export default function ThirdWorkFlow() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between gap-4 my-8">
      <div className="w-full lg:w-[615px]">
        <Image src={workflow3Svg} alt="Collection Img" className="w-[575px]" />
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-[615px] ">
        <p className="font-bold bg-nft-gradient">03.</p>
        <p className="text-white font-bold text-3xl lg:text-7xl linear">
          Choose a platform to sell your NFT.
        </p>
        <p className="text-[#B7B4BB] font-normal text-sm lg:text-2xl">
          Earn ETH and BIT for all your NFTs that you sell on our marketplace.
        </p>
        <p className="text-[#B7B4BB] font-normal text-sm lg:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          doloremque a officlis quasi autem!.
        </p>
        <Link href="#" className="flex gap-1 text-white">
          Learn more
          <Image src={ArrowUpRightSvg} alt="arrow Img" className="w-[20px]" />
        </Link>
      </div>
    </div>
  );
}
