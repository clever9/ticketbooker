function Features() {
  return (
    <>
      <div className="bg-white" style={{ padding: "9% 15px" }}>
        <h1 className="text-center xl:text-4xl text-2xl text-purple-700">
          What we promise?
        </h1>
        <div style={{ width: "100%" }} className="text-center">
          <p className="text-gray-400 text-wrap mt-2 mx-auto sm:w-4/5 lg:w-3/6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit Aperiam,
            repellat illum.
          </p>
        </div>
        <div className="flex flex-wrap gap-y-5 py-10">
          <div className="w-full lg:w-3/12 md:w-6/12">
            <div className="flex flex-col justify-center items-center bg-purple-50 p-10 rounded-md outline-none outline-offset-0 mx-2">
              <div className="rounded-full p-5 bg-white shadow shadow-zinc-900/5">
                <img src="/fast.gif" width={60} alt="" />
              </div>
              <p className="text-gray-700 mt-4">Fast Process</p>
              <p className="font-light text-gray-500 mt-2 text-center">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-3/12 md:w-6/12">
            <div className="flex flex-col justify-center items-center bg-purple-50 p-10 rounded-md outline-none outline-offset-0 mx-2">
              <div className="rounded-full p-5 bg-white shadow shadow-zinc-900/5">
                <img src="/payment.gif" width={60} alt="" />
              </div>
              <p className="text-gray-700 mt-4">Secure Payment</p>
              <p className="font-light text-gray-500 mt-2 text-center">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-3/12 md:w-6/12">
            <div className="flex flex-col justify-center items-center bg-purple-50 p-10 rounded-md outline-none outline-offset-0 mx-2">
              <div className="rounded-full p-5 bg-white shadow shadow-zinc-900/5">
                <img src="/steps.gif" width={60} alt="" />
              </div>
              <p className="text-gray-700 mt-4">Concise Steps</p>
              <p className="font-light text-gray-500 mt-2 text-center">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-3/12 md:w-6/12">
            <div className="flex flex-col justify-center items-center bg-purple-50 p-10 rounded-md outline-none outline-offset-0 mx-2">
              <div className="rounded-full p-5 bg-white shadow shadow-zinc-900/5">
                <img src="/all.gif" width={60} alt="" />
              </div>
              <p className="text-gray-700 mt-4">All in one</p>
              <p className="font-light text-gray-500 mt-2 text-center">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
