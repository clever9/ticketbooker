import List from "./List";

function Events() {
  return (
    <>
      <div
        className="bg-gradient-to-tl from-purple-400 to-purple-600"
        style={{ padding: "9% 25px" }}
      >
        <h1 className="text-center xl:text-4xl text-2xl font-bold text-white">
          Browse Latest Events
        </h1>
        <div className="flex flex-wrap gap-y-4 gap-x-4 py-10">
          <div
            className="rounded-md xl:w-2/12  lg:w-3/12 md:w-3/12 w-full  bg-white shadow-sm shadow-gray-300 p-3"
            style={{ maxHeight: "280px", overflow: "hidden" }}
          >
            <List />
          </div>
          <div className="flex-grow rounded-md w-3/12 bg-white shadow-sm shadow-zinc-500">
            dsafadfsa
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
