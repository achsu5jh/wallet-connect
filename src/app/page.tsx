import Top from "./components/top";
import Nav from "./components/nav";
import Divider from "./components/UI/divider";
import Wallets from "./components/wallets";
import Collections from "./components/collection";
import Status from "./components/status";
import Workflow from "./components/workflow";
import NFTDrop from "./components/drop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-[90%] lg:max-w-[70%] mx-auto">
      <Nav />
      <Top />
      <Wallets />
      <Divider />
      <Collections />
      <Divider />
      <Status />
      <Divider />
      <Workflow />
      <Divider />
      <NFTDrop />
    </main>
  );
}
