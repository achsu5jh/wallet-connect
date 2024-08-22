import FirstWorkFlow from "./Workflow/first";
import SecondWorkFlow from "./Workflow/second";
import ThirdWorkFlow from "./Workflow/third";

export default function Workflow() {
  return (
    <section className="flex flex-col items-center justify-between gap-4">
      <p className="text-5xl lg:text-7xl text-white font-bold">
        How it <span className="bg-nft-gradient">works!</span>
      </p>
      <FirstWorkFlow />
      <SecondWorkFlow />
      <ThirdWorkFlow />
    </section>
  );
}
