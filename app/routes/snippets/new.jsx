export default function CreateSnippet() {
  return (
    <div className="absolute left-80 top-0 w-[calc(100%-320px)] h-full">
      <div className="absolute h-full w-[970px] bg-white top-5 left-1/2 -translate-x-1/2 p-8">
        <h1 className="font-bold text-2xl mb-4">Add a new code snippet</h1>
        <div className="flex justify-between gap-5">
          <div className="w-full">
            <div className="flex flex-col">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                className="border-solid border-slate-400 border rounded-sm px-2 py-1 text-slate-400"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                rows="10"
                className="border-solid border-slate-400 border rounded-sm px-2 py-1 text-slate-400"
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="language">Language</label>
              <input
                type="text"
                id="language"
                className="border-solid border-slate-400 border rounded-sm px-2 py-1 text-slate-400"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="snippet">Code snippet</label>
            <textarea
              name="snippet"
              id="snippet"
              rows="20"
              className="border-solid border-slate-400 border rounded-sm px-2 py-1 text-slate-400"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="bg-slate-900 text-white uppercase py-2 px-7 rounded text-sm font-bold ml-auto mr-0 mt-4 block"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
