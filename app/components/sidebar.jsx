import { Link, useLoaderData } from "remix";
import "../styles/global.css";
import plus from "~/assets/ant-design_plus-outlined.svg";
import { useState } from "react";
import { formatDate } from "~/utils/helpers";
import Favorite from "./favorite";

const SideBar = ({ data }) => {
  // let data = useLoaderData();
  const [selectedSort, setSelectedSort] = useState("sortBy");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [snippets, setSnippets] = useState(data);

  const handleSearch = (e) => {
    let input = e.target.value.toLowerCase();
    let filtered = snippets.filter((snippet) =>
      snippet.title.toLowerCase().includes(input)
    );
    if (input == "") {
      setSnippets(data);
    } else {
      setSnippets(filtered);
    }
  };

  const sortBy = (e) => {
    setSelectedSort(e.target.value);
    let sortedSnippets = [];

    if (e.target.value == "title") {
      sortedSnippets = snippets.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (e.target.value == "dateUpdated") {
      sortedSnippets = snippets.sort(
        (a, b) => new Date(b.date_updated) - new Date(a.date_updated)
      );
    }

    setSnippets(sortedSnippets);
  };

  const filter = (e) => {
    setSelectedFilter(e.target.value);
    let filteredSnippets = [];

    if (e.target.value == "favorites") {
      filteredSnippets = snippets.filter(
        (snippet) => snippet.favorite === true
      );
    }

    if (e.target.value == "all") {
      filteredSnippets = data;
    }

    setSnippets(filteredSnippets);
  };

  return (
    <div className="bg-white h-screen w-80 fixed p-5 shadow-md">
      <Link to="/snippets">
        <h2 className="font-bold text-xl mb-6">SnippetBook</h2>
      </Link>
      <div className="flex justify-between items-center">
        <h3 className="font-bold">Your snippets</h3>
        <Link to="/snippets/new">
          <div className="bg-slate-800 w-5 h-5 rounded-full flex items-center justify-center">
            <img src={plus} alt="Plus" className="h-3 w-3" />
          </div>
        </Link>
      </div>
      <div className="mt-6 mb-6">
        <input
          type="text"
          placeholder="Search"
          className="grey-border px-2 py-1 text-slate-400 w-full mb-2"
          onChange={handleSearch}
        />
        <div className="flex gap-2">
          <div>
            <label>Sort by</label>
            <select
              className="grey-border px-2 py-1 text-slate-400 w-full"
              onChange={sortBy}
              value={selectedSort}
            >
              <option value="dateUpdated">Last updated</option>
              <option value="title">Title</option>
            </select>
          </div>
          <div>
            <label>Filter</label>
            <select
              className="grey-border px-2 py-1 text-slate-400 w-full"
              onChange={filter}
              value={selectedFilter}
            >
              <option value="all">All</option>
              <option value="favorited">Favorited</option>
            </select>
          </div>
        </div>
      </div>
      <div className="h-[70%] overflow-y-scroll">
        {snippets.map((snippet) => {
          return (
            <div key={snippet?._id} className="relative">
              <Favorite snippet={snippet} inSidebar={true} />
              <Link to={`/snippets/${snippet?._id}`}>
                <div className="grey-border p-3 mt-2 w-full" key={snippet._id}>
                  <div className="flex justify-between">
                    <h3 className="font-bold mb-4">{snippet?.title}</h3>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-slate-500 uppercase text-[12px]">
                      {snippet?.language}
                    </p>
                    <p className="text-slate-500 text-[12px]">
                      {formatDate(snippet?.date_updated)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
