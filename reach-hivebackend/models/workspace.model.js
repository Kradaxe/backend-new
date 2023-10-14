import mongoose from "mongoose";
const Schema = mongoose.Schema;

const workspaceSchema = new Schema({
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

const Workspace = mongoose.model("Workspace", workspaceSchema);
export default Workspace;
