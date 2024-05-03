import { useState, useEffect } from "react";

function Events() {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const resp = await fetch("http://localhost:3000/event_categories");
      const data = await resp.json();
      console.log(data);

      setCategories(data);
    };

    const getEvents = async () => {
      const resp = await fetch("http://localhost:3000/events");
      const data = await resp.json();
      console.log(data);
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
      console.log(`removed ${title}: `, selectedCategories);
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
        <h1 className="text-center xl:text-4xl text-2xl font-bold text-white">
          Browse Latest Events
        </h1>
        <div className="flex md:flex-row flex-col gap-y-4 gap-x-4 py-10">
          <div
            className="rounded-md w-full xl:w-2/12 lg:w-3/12 md:w-3/12 bg-white shadow-sm shadow-gray-300 p-3"
            style={{
              maxHeight: "400px",
              overflow: "hidden",
            }}
          >
            <h3 className="text-gray-600 text-sm font-bold">
              Filter by category:
            </h3>
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
          <div className="flex-grow rounded-md bg-white shadow-sm shadow-zinc-500 p-3 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {filteredEvents.map((event) => (
              <div
                className="rounded-md shadow-md hover:shadow-lg shadow-purple-100 hover:shadow-purple-100 "
                style={{ height: "240px" }}
                key={event["id"]}
              >
                <h1>{event["title"]}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
