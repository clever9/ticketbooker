import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

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
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
