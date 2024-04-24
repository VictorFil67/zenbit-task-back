import { Schema, model } from "mongoose";
// import { handleSaveError, setUpdateSetting } from "./hooks.js";

const pictureSchema = new Schema(
  {
    src: {
      type: String,
      required: [true, "Set name for contact"],
    },
  },
  { versionKey: false }
);

// contactSchema.post("save", handleSaveError);
// contactSchema.pre("findOneAndUpdate", setUpdateSetting);
// contactSchema.post("findOneAndUpdate", handleSaveError);

const Picture = model("picture", pictureSchema);

export default Picture;
