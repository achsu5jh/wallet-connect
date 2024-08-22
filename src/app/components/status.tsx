import Score from "./UI/score";

export default function Status() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
      <Score score="400k+" description="Wallets Connected" />
      <Score score="20k+" description="Wallets Connected" />
      <Score score="230+" description="Creative artists" />
      <Score score="2.5x" description="Estimated value" />
    </section>
  );
}
