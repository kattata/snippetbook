import { mongoose } from "mongoose";

const { Schema } = mongoose;

const snippetSchema = new Schema({
  title: String,
  description: String,
  language: String,
  date_updated: Date,
  favorite: Boolean,
  snippet: String,
});

const userSchema = new Schema({
  username: String,
  password: String,
});

export const models = [
  {
    name: "Snippet",
    schema: snippetSchema,
    collection: "snippets",
  },
  {
    name: "User",
    schema: userSchema,
    collection: "users",
  },
];
