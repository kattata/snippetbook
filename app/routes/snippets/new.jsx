import { redirect } from "remix";
import Input from "~/components/input";
import connectDb from "~/db/connectDb.server";

export async function action({ request }) {
  const form = await request.formData();
  const title = form.get("title");
  const description = form.get("description");
  const language = form.get("language");
  const snippet = form.get("snippet");

  const db = await connectDb();
  const newSnippet = db.models.Snippet.insertOne(
    title,
    description,
    language,
    snippet
  );

  console.log({
    title,
    description,
    language,
    snippet,
  });

  return redirect(`/snippets`);
}

export default function CreateSnippet() {
  return (
    <div className="wrapper">
      <div className="wrapper-inner">
        <h1 className="h1">Add a new code snippet</h1>
        <form method="post" className="flex justify-between gap-5">
          <div className="w-1/2">
            <Input label="Title" name="title" />
            <Input
              label="Description"
              isTextarea="true"
              name="description"
              rows="5"
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
        </form>
        <button
          type="submit"
          className="bg-slate-800 text-white uppercase py-2 px-7 rounded text-sm font-bold ml-auto mr-0 mt-4 block"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
