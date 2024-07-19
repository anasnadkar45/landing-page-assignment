import Blob from "./components/Blob";
import PrimaryButton from "./components/PrimaryButton";

export default function Home() {
  return (
    <main className="max-w-[1000px] mx-auto px-3 md:px-5">
      <div className="mt-32 space-y-5">
        <h1 className="max-w-[778px] text-[56px] leading-[60px]">
          Empowering Lives Through Innovative <span className="highlighted-text">AI</span> Technologies.
        </h1>
        <p className="text-[#C0C2CC]">Finding new horizons for visionaries to accelerate their innovation and progress.</p>
        <div className="flex gap-6">
          <PrimaryButton title={"Explore Our Service"} />
          <button className="button1">Learn More</button>
        </div>
      </div>

      <div className="company-info w-fit mt-[100px]">
          <p className="text-[21px] shadow-text">From Ideas to Software Solutions 💡✨ From Ideas to Software Solutions 🌟✨ From Ideas to</p>
        </div>
    </main>
  );
}
