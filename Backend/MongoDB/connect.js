import mongoose from "mongoose";

export let MongoDBInit = async function () {
  return await mongoose.connect("mongodb://localhost:27017/graph-ql-demo-2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
