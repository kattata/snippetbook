import { Link } from "remix";
import "../styles/global.css";
import plus from "~/assets/ant-design_plus-outlined.svg";

const SideBar = ({ snippets }) => {
  return (
    <div className="bg-white h-screen w-80 fixed p-5 shadow-md">
      <h2 className="font-bold text-xl mb-6">SnippetBook</h2>
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
        <select
          name=""
          id=""
          className="grey-border px-2 py-1 text-slate-400 mt-2 w-full"
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
              <div className="grey-border p-3 mt-2 w-full">
                <h3 className="font-bold mb-4">{snippet.title}</h3>
                <div className="flex justify-between">
                  <p className="text-slate-500 uppercase text-[12px]">
                    {snippet.language}
                  </p>
                  <p className="text-slate-500 text-[12px]">
                    {snippet?.date_added}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SideBar;
