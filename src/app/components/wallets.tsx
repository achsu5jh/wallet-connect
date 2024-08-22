import Image from "next/image";
import metamaskSvg from "@/app/assets/image/metamask.svg";
import bitgoSvg from "@/app/assets/image/bitgo.svg";
import coinbaseSvg from "@/app/assets/image/coinbase.svg";
import trustwalletSvg from "@/app/assets/image/trustwallet.svg";
import exodusSvg from "@/app/assets/image/exodus.svg";

export default function Wallets() {
  return (
    <section className="flex justify-between my-12 lg:my-0 w-[90%] gap-4 lg:gap-0 mx-auto overflow-auto">
      <Image
        src={metamaskSvg}
        alt="Metamask Img"
        className="w-[250px] lg:w-[180px]"
      />
      <Image src={bitgoSvg} alt="bitgo Img" className="w-[180px]" />
      <Image src={coinbaseSvg} alt="coinbase Img" className="w-[180px]" />
      <Image src={trustwalletSvg} alt="trustwallet Img" className="w-[180px]" />
      <Image src={exodusSvg} alt="exodus Img" className="w-[180px]" />
    </section>
  );
}
