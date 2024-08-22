import Image from "next/image";
import Link from "next/link";
import nft1 from "@/app/assets/image/nft1.svg";
import nft2 from "@/app/assets/image/nft2.svg";
import nft3 from "@/app/assets/image/nft3.svg";
import nft4 from "@/app/assets/image/nft4.svg";
import ArrowUpRightSvg from "@/app/assets/image/arrow-up-right.svg";
import Nft from "@/app/components/UI/nft";
export default function Collections() {
  return (
    <section className="flex flex-col items-center">
      <p className="text-7xl font-bold text-white mb-12">
        Your <span className="bg-nft-gradient">nft&apos;s</span>
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
        <Nft nftUrl={nft1} name="#Metaverse" description="By TheSalvare" />
        <Nft nftUrl={nft2} name="#Polly Doll" description="By TheNative" />
        <Nft nftUrl={nft3} name="#Alec Art" description="By GeargZvic" />
        <Nft nftUrl={nft4} name="#Toxic Poeth" description="By YazoiLup" />
      </div>
      <Link href="/collection" className="bg-button-gradient mt-20 lg:mt-24 px-5 py-3 rounded-full w-60 lg:w-80 h-12 lg:h-16 flex items-center gap-1 justify-center text-white text-lg font-bold">
        View collection
        <Image src={ArrowUpRightSvg} alt="Arrow" className="w-4" />
      </Link>
    </section>
  );
}
