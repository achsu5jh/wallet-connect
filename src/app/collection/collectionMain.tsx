"use client";
import { useReadContract, useAccount } from "wagmi";
import Modal from "react-modal";
import { abi } from "@/app/assets/contract/contract.json";
import CollectionNFT from "./collectionNFT";
import LoadingSpin from "../components/UI/loading";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "auto",
    width: "50%",
    background: "none",
    padding: "40px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
    border: "none",
  },
};

type tokensState = {
  data?: {
    data?: Array<string>;
    [key: string]: any;
  };
  isPending?: boolean;
};
export default function CollectionMain() {
  const account = useAccount();
  const { data, isPending }: tokensState = useReadContract({
    abi,
    address: "0x1c1c3500C453C124b30CF4656bF533352D2841Ad",
    functionName: "tokensOfOwner",
    args: [account.address],
  });
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-2 w-full">
        {data?.map((token: string, index: number) => (
          <CollectionNFT key={index} tokenId={token} />
        ))}
      </div>
      {isPending && (
        <Modal
          closeTimeoutMS={200}
          isOpen={true}
          preventScroll={true}
          style={customStyles}
          overlayClassName={"screen_store_modal bg-[#141414bf]"}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true}
        >
          <div className="flex justify-center w-full items-center h-[620px]">
            <LoadingSpin description="Processing..." />
          </div>
        </Modal>
      )}
    </>
  );
}
