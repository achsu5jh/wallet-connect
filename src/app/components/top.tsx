import Image from "next/image";
import collectionSvg from "@/app/assets/image/collection.svg";
import ArrowUpRightSvg from "@/app/assets/image/arrow-up-right.svg";
import Link from "next/link";

export default function Top() {
  return (
    <section className="flex lg:flex-row flex-col items-center justify-between gap-4 lg:min-h-screen mt-24 lg:mt-0">
      <div className="flex flex-col gap-6 w-full lg:w-[615px] ">
        <p className="text-white font-bold text-4xl lg:text-7xl linear">
          High Quality <br className="hidden lg:flex" /> NFT Collection
        </p>
        <p className="text-[#B7B4BB] font-normal text-sm lg:text-2xl">
          A 890 piece custom Nerko&apos;s collection is{" "}
          <br className="hidden lg:flex" />
          joining the NFT space on Opensea.
        </p>
        <Link
          href="/mint"
          className="bg-button-gradient px-3 lg:px-5 py-2 lg:py-3 rounded-full w-32 lg:w-40 h-12 lg:h-16 flex items-center gap-1 justify-center text-white text-lg font-bold"
        >
          MINT
          <Image src={ArrowUpRightSvg} alt="Arrow" className="w-4" />
        </Link>
        <p className="flex flex-col mt-6">
          <span className="text-white font-bold text-2xl lg:text-4xl">
            47k+
          </span>
          <span className="text-[#B7B4BB] text-xs lg:text-sm">
            Community members
          </span>
        </p>
      </div>
      <div className=" hidden lg:flex w-full lg:w-[615px]">
        <Image src={collectionSvg} alt="Collection Img" className="w-[565px]" />
      </div>
    </section>
  );
}
