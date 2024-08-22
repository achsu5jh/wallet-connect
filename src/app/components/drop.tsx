import Image from "next/image";
import CircleSvg from "@/app/assets/image/circle.svg";
import dCoinSvg from "@/app/assets/image/dcoin.svg";
import xSvg from "@/app/assets/image/x.svg";
import ethereumSvg from "@/app/assets/image/ethereum.svg";

export default function NFTDrop() {
  return (
    <section className="flex justify-center lg:justify-between border-2 rounded-lg p-8 mb-28 lg:mb-44">
      <div className="hidden lg:flex lg:flex-col lg:justify-between lg:w-[200px]">
        <div className="flex justify-start">
          <Image src={CircleSvg} alt="Collection Img" className="w-[30px]" />
        </div>
        <div className="flex justify-end">
          <Image src={dCoinSvg} alt="Collection Img" className="w-[50px]" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <p className="text-white font-bold text-3xl lg:text-6xl">
          Never <span className="bg-nft-gradient">miss a drop</span>
        </p>
        <p className="text-[#B7B4BB] text-sm">
          Subscribe to our super rare and exclusive drops & collections.
        </p>
        <div className="flex flex-col lg:flew-row gap-4 lg:px-8 w-full items-center justify-between">
          <input
            type="text"
            placeholder="Enter your email"
            className="rounded-full p-4 w-full bg-[#B7B4BB]"
          />
          <button className="bg-button-gradient py-4 px-8 rounded-full text-white">
            Subscribe
          </button>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-col lg:justify-between lg:w-[200px]">
        <div className="flex justify-start">
          <Image src={xSvg} alt="Collection Img" className="w-[30px]" />
        </div>
        <div className="flex justify-end">
          <Image src={ethereumSvg} alt="Collection Img" className="w-[50px]" />
        </div>
      </div>
    </section>
  );
}
