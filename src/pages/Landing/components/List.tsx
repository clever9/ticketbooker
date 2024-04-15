import { FilterCategory } from "@/types/FilterCategory";
import { useState } from "react";

export default function List() {
  const [categories, setCategories] = useState<FilterCategory[]>([
    {
      id: "0",
      name: "All",
      selected: false,
    },
    {
      id: "1",
      name: "Roshn League",
      selected: false,
    },
    {
      id: "2",
      name: "Horse Racing",
      selected: false,
    },
    {
      id: "3",
      name: "Conferences",
      selected: false,
    },
    {
      id: "4",
      name: "Formula 1",
      selected: false,
    },
    {
      id: "5",
      name: "Stage Plays",
      selected: false,
    },
    {
      id: "6",
      name: "Cinemas",
      selected: false,
    },
    {
      id: "7",
      name: "Miscellaneous",
      selected: false,
    },
  ]);

  const toggleSelect = (id: string, indx: number) => {
    if (indx === 0 && categories[0].selected === false) {
      categories.map((category) => (category.selected = true));
      setCategories([...categories]);
      return;
    }

    const category = categories.filter((category) => category.id === id)[0];
    categories[indx].selected = !category.selected;
    setCategories([...categories]);
  };

  return (
    <>
      <h3 className="text-gray-600">Search by category:</h3>
      <hr className="my-3" />
      <ul>
        {categories.map((category, indx) => {
          return (
            <li
              className="flex flex-row justify-between items-center"
              key={category.id}
              onClick={() => toggleSelect(category.id, indx)}
            >
              <span className="text-gray-600">{category.name}</span>
              <div
                className={`w-4 h-4 rounded-md border-2 ${
                  category.selected
                    ? "bg-purple-600 border-gray-200"
                    : "bg-gray-200 border-gray-300"
                }`}
                onClick={() => toggleSelect(category.id, indx)}
              ></div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
