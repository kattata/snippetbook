import { Link } from "remix";
import "../styles/global.css";

const SideBar = ({ snippets }) => {
  const snippetId = "234567";
  return (
    <div className="bg-white h-screen w-80 fixed p-5 shadow-md">
      <h2 className="font-bold text-xl mb-6">SnippetBook</h2>
      <div className="flex justify-between">
        <h3 className="font-bold">Your snippets</h3>
        <button type="submit">
          <Link to="/snippets/new">+ New</Link>
        </button>
      </div>
      <div className="mt-6 mb-6">
        <input
          type="text"
          placeholder="Search"
          className="border-solid border-slate-400 border rounded-sm px-2 py-1 text-slate-400 w-full"
        />
        <select
          name=""
          id=""
          className="border-solid border-slate-400 border rounded-sm px-2 py-1 text-slate-400 mt-2 w-full"
        >
          <option defaultValue="Filter by">Filter by</option>
          <option value="Date updated">Date updated</option>
          <option value="Title">Title</option>
          <option value="Favorited">Favorited</option>
        </select>
      </div>
      {snippets &&
        snippets.map((snippet) => {
          return (
            <Link to={`/snippets/${snippet._id}`} key={snippet._id}>
              <div className="border-solid border-slate-400 border rounded-sm p-3 mt-2 w-full">
                <h3 className="font-bold mb-4">{snippet.title}</h3>
                <div className="flex justify-between">
                  <p className="text-slate-500 uppercase text-[12px]">
                    JavaScript
                  </p>
                  <p className="text-slate-500 text-[12px]">23 Mar 2023</p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SideBar;
