import { Link, useLoaderData } from "remix";
import "../styles/global.css";
import plus from "~/assets/ant-design_plus-outlined.svg";
import { useState } from "react";
import connectDb from "~/db/connectDb.server";

export async function loader() {
  const db = await connectDb();
  const snippets = await db.models.Snippet.find();
  return snippets;
}

const SideBar = () => {
  const [selectedOption, setSelectedOption] = useState("sortBy");
  let snippets = useLoaderData();

  const sortBy = (e) => {
    setSelectedOption(e.target.value);
    let sortedSnippets = [];

    if (e.target.value == "title") {
      sortedSnippets = snippets.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (e.target.value == "dateUpdated") {
      sortedSnippets = snippets.sort((a, b) => b.date_updated - a.date_updated);
    }

    snippets = sortedSnippets;
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
          className="grey-border px-2 py-1 text-slate-400 w-full"
        />
        <label className="text-xs mb-0">Sort by</label>
        <select
          name=""
          id=""
          className="grey-border px-2 py-1 text-slate-400 w-full"
          onChange={sortBy}
          value={selectedOption}
        >
          <option value="dateUpdated" defaultValue="dateUpdated">
            Date updated
          </option>
          <option value="title">Title</option>
          <option value="favorited">Favorited</option>
        </select>
      </div>
      <div className="h-3/4 overflow-scroll">
        {snippets.map((snippet) => {
          return (
            <Link to={`/snippets/${snippet?._id}`} key={snippet?._id}>
              <div className="grey-border p-3 mt-2 w-full">
                <h3 className="font-bold mb-4">{snippet?.title}</h3>
                <div className="flex justify-between">
                  <p className="text-slate-500 uppercase text-[12px]">
                    {snippet?.language}
                  </p>
                  <p className="text-slate-500 text-[12px]">
                    {snippet?.date_updated}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
