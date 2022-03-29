import { useLoaderData } from "remix";
import connectDb from "~/db/connectDb.server";
import trash from "~/assets/ant-design_delete-outlined.svg";
import edit from "~/assets/ant-design_edit-outlined.svg";
import star from "~/assets/ant-design_star-outlined.svg";

export async function loader({ params }) {
  const db = await connectDb();
  return db.models.Snippet.findById(params.snippetId);
}

export default function Snippet() {
  const snippet = useLoaderData();
  return (
    <div className="wrapper">
      <div className="wrapper-inner">
        <div className="flex justify-between items-center text-slate-400 text-xs">
          <p className="uppercase">{snippet?.language}</p>
          <div className="flex gap-2">
            <button className="p-1">
              <img src={star} alt="Add to Favorites" className="h-5" />
            </button>
            <button className="p-1">
              <img src={edit} alt="Edit" className="h-5" />
            </button>
            <button className="p-1">
              <img src={trash} alt="Delete" className="h-5" />
            </button>
          </div>
        </div>
        <span className="bg-slate-300 block h-[1px] w-full mt-2 mb-3"></span>
        <p className="text-slate-400 text-xs absolute right-10">23 Mar 2022</p>
        <h1 className="h1">{snippet?.title}</h1>
        <p className="mb-8">{snippet?.description}</p>
        <div className="grey-border p-6">
          <pre>{snippet?.snippet}</pre>
        </div>
      </div>
    </div>
  );
}
