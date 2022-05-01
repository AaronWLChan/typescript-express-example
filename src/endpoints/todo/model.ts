import mongoose from "mongoose";
import { Todo } from "./types";

const schema = new mongoose.Schema<Todo>({
    title: { type: "String", required: true },
    description: { type: "String", required: true }
})


export default mongoose.model<Todo>("Todo", schema)