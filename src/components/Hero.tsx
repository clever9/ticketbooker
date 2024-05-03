import Navbar from "./Navbar";

function Hero() {
  return (
    <>
      <div className="bg-gray-800">
        <Navbar />
        <div className="flex flex-col items-center min-w-screen py-14 px-6 text-white font-bold text-5xl">
          <span className="flex gap-x-4 mb-5 items-center">
            TicketBooker
            <img
              src="/logo.png"
              width={65}
              style={{ maxWidth: "60%" }}
              alt="Your Company"
            />
          </span>
          <h2 className="lg:w-8/12 leading-relaxed text-amber-200 bg-clip-text lg:text-6xl font-bold tracking-tight sm:text-4xl text-4xl text-center">
            One stop shop to buy all events' tickets in Saudi Arabia.
          </h2>
          <p className="lg:w-5/12 font-light mt-6 text-lg leading-relaxed text-gray-100 text-wrap text-center">
            Stop wasting your time and effort in visiting multiple websites for
            booking, ticketbooker is to the rescue!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-lg bg-purple-600 hover:bg-purple-700 px-3.5 py-2.5 text-lg text-white font-semibold text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
            <a href="#" className="font-semibold leading-6 text-white text-lg">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
