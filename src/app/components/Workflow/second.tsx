import Image from "next/image";
import workflow2Svg from "@/app/assets/image/workflow2.svg";
import ArrowUpRightSvg from "@/app/assets/image/arrow-up-right.svg";
import Link from "next/link";

export default function SecondWorkFlow() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between gap-4 my-8">
      <div className="flex lg:hidden w-full lg:w-[615px]">
        <Image src={workflow2Svg} alt="Collection Img" className="w-[575px]" />
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-[615px] ">
        <p className="font-bold bg-nft-gradient">02.</p>
        <p className="text-white font-bold text-3xl lg:text-7xl linear">
          Create your own digital artwork.
        </p>
        <p className="text-[#B7B4BB] font-normal text-sm lg:text-2xl">
          Quality comes first. we took our time to plan out everything and build
          our production pipeline for a good quality artwork&apos;s & digital
          artwork.
        </p>
        <p className="text-[#B7B4BB] font-normal text-sm lg:text-2xl">
          Starting the production on the procedurally generated planets and the
          smart contract for minting.
        </p>
        <Link href="#" className="flex gap-1 text-white">
          Learn more
          <Image src={ArrowUpRightSvg} alt="arrow Img" className="w-[20px]" />
        </Link>
      </div>
      <div className="hidden lg:flex w-full lg:w-[615px]">
        <Image src={workflow2Svg} alt="Collection Img" className="w-[575px]" />
      </div>
    </div>
  );
}
