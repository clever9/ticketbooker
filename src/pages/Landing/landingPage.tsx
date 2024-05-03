import Hero from "@/components/Hero";
import Events from "./components/Events";

import Features from "./components/Features";

function LandingPage() {
  return (
    <>
      <div>
        <Hero />
        {/* Features */}
        <Features />
        {/* Events */}
        <Events />
      </div>
    </>
  );
}

export default LandingPage;
