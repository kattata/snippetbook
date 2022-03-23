import Input from "~/components/input";

export default function CreateSnippet() {
  return (
    <div className="absolute left-80 top-0 w-[calc(100%-320px)] h-full">
      <div className="absolute h-full w-[970px] bg-white top-5 left-1/2 -translate-x-1/2 p-8">
        <h1 className="font-bold text-2xl mb-4">Add a new code snippet</h1>
        <div className="flex justify-between gap-5">
          <div className="w-full">
            <Input label="Title" name="title" />
            <Input
              label="Description"
              isTextarea="true"
              name="description"
              rows="10"
            />
            <Input label="Language" name="language" />
          </div>
          <div className="w-full">
            <Input
              label="Code snippet"
              isTextarea="true"
              name="snippet"
              rows="20"
            />
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
