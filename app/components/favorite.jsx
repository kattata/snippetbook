import { Form } from "remix";
import connectDb from "~/db/connectDb.server";
import greyStar from "~/assets/ant-design_star-outlined.svg";
import yellowStar from "~/assets/ant-design_star-filled.svg";

export const toggleFavorite = async (form, id) => {
  const db = await connectDb();

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

      return true;
    } catch (error) {
      return false;
    }
  }
};

export default function Favorite({ snippet, inSidebar }) {
  return (
    <Form method="post" className={inSidebar && "absolute right-2 top-2"}>
      <input type="hidden" name="_method" value="favorite" />
      <input
        type="hidden"
        name="_toggle"
        value={snippet.favorite ? "remove" : "add"}
      />
      <input type="hidden" name="_id" value={snippet._id} />
      <button className="p-1" type="submit">
        <img
          src={snippet.favorite ? yellowStar : greyStar}
          alt="Add to Favorites"
          className="h-5"
        />
      </button>
    </Form>
  );
}
