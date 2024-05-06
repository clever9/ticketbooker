import { useState, useEffect } from "react";
import { FiCalendar, FiMap, FiClock } from "react-icons/fi";

function Events() {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const resp = await fetch("http://localhost:3000/event_categories");
      const data = await resp.json();

      setCategories(data);
    };

    const getEvents = async () => {
      const resp = await fetch("http://localhost:3000/events");
      const data = await resp.json();

      setFilteredEvents(data);
      setEvents(data);
    };

    getEvents();
    getCategories();
  }, []);

  const toggleSelect = (title: string) => {
    if ((selectedCategories as string[]).includes(title)) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== title)
      );

      return;
    }

    setSelectedCategories([...selectedCategories, title]);
  };

  return (
    <>
      <div
        className="bg-gradient-to-tl from-purple-400 to-purple-600"
        style={{ padding: "9% 25px" }}
      >
        <h1 className="text-center xl:text-4xl text-2xl text-white">
          Browse Latest Events
        </h1>
        {/* lg:w-5/12 font-light mt-6 text-lg leading-relaxed text-gray-100 text-wrap text-center */}
        <div style={{ width: "100%" }} className="text-center">
          <p className="text-gray-100 text-wrap mt-2 mx-auto sm:w-4/5 lg:w-3/6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit Aperiam,
            repellat illum.
          </p>
        </div>

        <div className="flex md:flex-row flex-col gap-y-4 gap-x-4 py-10">
          <div
            className="rounded-md w-full xl:w-2/12 lg:w-3/12 md:w-3/12 bg-white shadow-sm shadow-gray-300 p-3"
            style={{
              maxHeight: "400px",
              overflow: "hidden",
            }}
          >
            <h3 className="text-gray-600 text-sm">Filter by category:</h3>
            <hr className="my-3" />
            <ul>
              {categories.map((category) => {
                return (
                  <li
                    className="flex flex-row justify-between items-center my-3"
                    key={category["id"]}
                    onClick={() => toggleSelect(category["title"])}
                  >
                    <span
                      className="text-gray-600"
                      style={{ fontSize: "13px" }}
                    >
                      {category["title"]} (
                      {
                        events.filter(
                          (event) => event["category"] === category["title"]
                        ).length
                      }
                      )
                    </span>
                    <div
                      className={`w-4 h-4 rounded-md border-2 ${
                        selectedCategories.includes(category["title"])
                          ? "bg-purple-600 border-gray-200"
                          : "bg-gray-200 border-gray-300"
                      }`}
                      onClick={() => toggleSelect(category["title"])}
                    ></div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="rounded-md bg-white shadow-sm shadow-zinc-500 p-3 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 md:w-4/5">
            {filteredEvents.map((event) => (
              <div
                className="rounded-md shadow-md hover:shadow-lg shadow-purple-100 hover:shadow-purple-100 "
                style={{ minHeight: "266px" }}
                key={event["id"]}
              >
                <div
                  style={{
                    width: "100%",
                    height: "145px",
                    backgroundImage: `url('${event["image"]}')`,
                    backgroundSize: "100% 100%",
                  }}
                  className="rounded-md filter hover:saturate-0"
                ></div>

                <h1 className="text-center text-md px-2 mt-2">
                  {event["title"]}
                </h1>

                <div className="mt-4">
                  <div className="flex flex-row items-center">
                    <FiCalendar className="text-gray-500 mx-3 text-purple-600" />
                    <p className="text-xs text-gray-500">
                      {new Date(event["date_from"]).toLocaleDateString()}
                    </p>
                  </div>
                  {/* FiMapPin */}
                  <div className="flex flex-row items-center mt-1">
                    <FiClock className="text-gray-500 mx-3 text-purple-600" />
                    <p className="text-xs text-gray-500">
                      {new Date(event["date_from"]).toLocaleTimeString()}
                    </p>
                  </div>

                  <div className="flex flex-row items-center mt-1">
                    <FiMap className="text-gray-500 mx-3 text-purple-600" />
                    <p className="text-xs text-gray-500">
                      {event["location"]["hall_name"]}
                    </p>
                  </div>

                  <div className="mt-5 mb-3 px-2">
                    <button className="border-2 border-purple-600 rounded-lg hover:bg-purple-600 px-3.5 py-2.5 hover:text-white text-purple-600 font-semibold shadow-sm text-xs w-full">
                      View Event
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
