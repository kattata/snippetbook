import { Form, json, redirect, useActionData, useLoaderData } from "remix";
import { getSession, commitSession } from "~/sessions.js";
import connectDb from "~/db/connectDb.server";
import bcrypt from "bcryptjs";

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("userId")) {
    return session.get("userId");
  } else {
    return null;
  }
}

export async function action({ request }) {
  const db = await connectDb();
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");

  const session = await getSession(request.headers.get("Cookie"));

  const user = await db.models.User.findOne({
    username,
  });

  if (await bcrypt.compare(password, user.password)) {
    session.set("userId", user._id);
    return redirect("/login", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } else {
    return json({
      status: 401,
      error: "User not found or password incorrect",
    });
  }
}

export default function Login() {
  const data = useLoaderData();
  const feedback = useActionData();
  return (
    <div className="wrapper">
      <div className="wrapper-inner">
        {data ? (
          <div className="flex mb-5">
            <p>Logged in as {data}</p>
            <Form
              method="post"
              action="/logout"
              className="ml-3 bg-indigo-700 text-white p-1"
            >
              <button type="submit">Log out</button>
            </Form>
          </div>
        ) : (
          <>
            <h1 className="h1">Login</h1>
            <Form method="post" reloadDocument className="w-1/3">
              <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="border"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  className="border"
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-indigo-700 text-white p-1"
              >
                Submit
              </button>
            </Form>
            <p>{feedback?.error}</p>
          </>
        )}
      </div>
    </div>
  );
}
