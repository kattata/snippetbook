import { useLoaderData } from "remix";
import connectDb from "~/db/connectDb.server";

export async function loader({ params }) {
  const db = await connectDb();
  return db.models.Snippet.findById(params.snippetId);
}

export default function Snippet() {
  const snippet = useLoaderData();
  return (
    <div className="absolute left-80 top-0 w-[calc(100%-320px)] h-full">
      <div className="absolute h-full w-[970px] bg-white top-5 left-1/2 -translate-x-1/2">
        <p>{snippet?.title}</p>
      </div>
    </div>
  );
}
