import { createCookie } from "remix";

// const { COOKIE_SECRET } = process.env;

export const sessionCookie = createCookie("__session", {
  httpOnly: true,
  maxAge: 3569,
  secrets: ["h3h3lol"],
  // secrets: [COOKIE_SECRET],
});
