import Image from "next/image";
import dividerSvg from "@/app/assets/image/divider.svg";

export default function Divider() {
  return (
    <div className="mx-auto py-12 lg:py-28">
      <Image src={dividerSvg} alt="Collection Img" className="w-[100px]" />
    </div>
  );
}
