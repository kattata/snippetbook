import { Form, json, redirect, useLoaderData } from "remix";
import Input from "~/components/input";
import connectDb from "~/db/connectDb.server";

export async function action({ request, params }) {
  const db = await connectDb();
  const form = await request.formData();
  const title = form.get("title");
  const description = form.get("description");
  const language = form.get("language");
  const snippet = form.get("snippet");

  try {
    await db.models.Snippet.findByIdAndUpdate(
      { _id: params.snippetId },
      {
        title,
        description,
        language,
        snippet,
        date_updated: Date.now(),
      }
    );
    return redirect(`/snippets/${params.snippetId}`);
  } catch (error) {
    return json(
      { errors: error.errors, values: Object.fromEntries(form) },
      { status: 400 }
    );
  }
}

export async function loader({ params }) {
  const db = await connectDb();
  return db.models.Snippet.findById(params.snippetId);
}

export default function EditSnippet() {
  const snippet = useLoaderData();
  return (
    <div className="wrapper">
      <div className="wrapper-inner">
        <h1 className="h1">Edit a code snippet</h1>
        <Form method="post">
          <div className="flex justify-between gap-5">
            <div className="w-1/2">
              <Input
                label="Title"
                name="title"
                isEdit="true"
                value={snippet?.title}
              />
              <Input
                label="Description"
                isTextarea="true"
                name="description"
                rows="5"
                isEdit="true"
                value={snippet?.description}
              />
              <Input
                label="Language"
                name="language"
                isEdit="true"
                value={snippet?.language}
              />
            </div>
            <div className="w-full">
              <Input
                label="Code snippet"
                isTextarea="true"
                name="snippet"
                rows="20"
                isEdit="true"
                value={snippet?.snippet}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-slate-800 text-white uppercase py-2 px-7 rounded text-sm font-bold ml-auto mr-0 mt-4 block"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}
