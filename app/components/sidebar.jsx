import "../styles/global.css";

const SideBar = () => {
  return (
    <div className="bg-white h-screen w-80 fixed p-5">
      <h2 className="font-bold text-2xl mb-6">SnippetBook</h2>
      <div className="flex justify-between">
        <h3 className="font-bold">Your snippets</h3>
        <button type="submit">New</button>
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
          <option value="Filter by" selected>
            Filter by
          </option>
          <option value="Date updated">Date updated</option>
          <option value="Title">Title</option>
          <option value="Favorited">Favorited</option>
        </select>
      </div>
      <div className="border-solid border-slate-400 border rounded-sm px-2 py-1 mt-2 w-full">
        <h3 className="font-bold mb-4">Remix Loader</h3>
        <div className="flex justify-between">
          <p className="text-slate-500 uppercase text-[12px]">JavaScript</p>
          <p className="text-slate-500 text-[12px]">23 Mar 2023</p>
        </div>
      </div>
      <div className="border-solid border-slate-400 border rounded-sm px-2 py-1 mt-2 w-full">
        <h3 className="font-bold mb-4">Remix Loader</h3>
        <div className="flex justify-between">
          <p className="text-slate-500 uppercase text-[12px]">JavaScript</p>
          <p className="text-slate-500 text-[12px]">23 Mar 2023</p>
        </div>
      </div>
      <div className="border-solid border-slate-400 border rounded-sm px-2 py-1 mt-2 w-full">
        <h3 className="font-bold mb-4">Remix Loader</h3>
        <div className="flex justify-between">
          <p className="text-slate-500 uppercase text-[12px]">JavaScript</p>
          <p className="text-slate-500 text-[12px]">23 Mar 2023</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
