import Image from "next/image";
interface NFTInterface {
  nftUrl: string;
  name: string;
  description: string;
}
export default function Nft({ nftUrl, name, description }: NFTInterface) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={nftUrl}
        alt="NFT Img"
        className="w-[500px] h-[250px]"
        width={500}
        height={300}
      />
      <p className="text-white font-bold text-xl pt-4">{name}</p>
      <p className="text-[#B7B4BB] text-sm">{description}</p>
    </div>
  );
}
