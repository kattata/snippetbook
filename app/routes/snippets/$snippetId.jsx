import { Form, json, Link, redirect, useLoaderData, useParams } from "remix";
import connectDb from "~/db/connectDb.server";
import trash from "~/assets/ant-design_delete-outlined.svg";
import edit from "~/assets/ant-design_edit-outlined.svg";
import greyStar from "~/assets/ant-design_star-outlined.svg";
import yellowStar from "~/assets/ant-design_star-filled.svg";
import { formatDate } from "~/utils/helpers";

export async function loader({ params }) {
  const db = await connectDb();
  return db.models.Snippet.findById(params.snippetId);
}

export const action = async function ({ request, params }) {
  const form = await request.formData();
  const db = await connectDb();
  const id = params.snippetId;

  if (form.get("_method") === "delete") {
    try {
      await db.models.Snippet.findByIdAndDelete({
        _id: id,
      });
      return redirect(`/`);
    } catch (error) {
      return json(
        { errors: error.errors, values: Object.fromEntries(form) },
        { status: 400 }
      );
    }
  }

  if (form.get("_method") === "favorite") {
    try {
      if (form.get("_toggle") === "add") {
        await db.models.Snippet.findByIdAndUpdate(
          { _id: id },
          { $set: { favorite: true } }
        );
      }

      if (form.get("_toggle") === "remove") {
        await db.models.Snippet.findByIdAndUpdate(
          { _id: id },
          { $set: { favorite: false } }
        );
      }

      return null;
    } catch (error) {
      return error;
      // return json(
      //   { errors: error.errors, values: Object.fromEntries(form) },
      //   { status: 400 }
      // );
    }
  }
};

export default function Snippet() {
  const snippet = useLoaderData();
  const params = useParams();
  return (
    <div className="wrapper">
      <div className="wrapper-inner">
        <div className="flex justify-between items-center text-slate-400 text-xs">
          <p className="uppercase">{snippet?.language}</p>
          <div className="flex gap-2">
            <Form method="post">
              <input type="hidden" name="_method" value="favorite" />
              <input
                type="hidden"
                name="_toggle"
                value={snippet.favorite ? "remove" : "add"}
              />
              <button className="p-1" type="submit">
                <img
                  src={snippet.favorite ? yellowStar : greyStar}
                  alt="Add to Favorites"
                  className="h-5"
                />
              </button>
            </Form>
            <Link to={`/snippets/${params.snippetId}/edit`}>
              <button className="p-1">
                <img src={edit} alt="Edit" className="h-5" />
              </button>
            </Link>
            <Form method="post">
              <input type="hidden" name="_method" value="delete" />
              <button type="submit" className="p-1">
                <img src={trash} alt="Delete" className="h-5" />
              </button>
            </Form>
          </div>
        </div>
        <span className="bg-slate-300 block h-[1px] w-full mt-2 mb-3"></span>
        <p className="text-slate-400 text-xs absolute right-10">
          {formatDate(snippet?.date_updated)}
        </p>
        <h1 className="h1">{snippet?.title}</h1>
        <p className="mb-8">{snippet?.description}</p>
        <div className="grey-border p-6">
          <pre>{snippet?.snippet}</pre>
        </div>
      </div>
    </div>
  );
}
