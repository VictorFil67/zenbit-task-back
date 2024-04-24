import express from "express";
import picturesControllers from "../controllers/picturesControllers.js";
// import validateBody from "../decorators/validateBody.js";
// import {
//   createContactSchema,
//   updateContactSchema,
// } from "../schemas/contactsSchemas.js";
// import isValidId from "../middlewares/isValidId.js";
// import authtenticate from "../middlewares/authenticate.js";

const picturesRouter = express.Router();

// contactsRouter.use(authtenticate);

const {
  getAllPictures,
  // getOneContact,
  // deleteContact,
  // createContact,
  // updateContact,
  // updateStatusContact,
} = picturesControllers;
picturesRouter.get("/", getAllPictures);

// contactsRouter.get("/:id", isValidId, getOneContact);

// contactsRouter.delete("/:id", isValidId, deleteContact);

// contactsRouter.post("/", validateBody(createContactSchema), createContact);

// contactsRouter.put(
//   "/:id",
//   isValidId,
//   validateBody(updateContactSchema),
//   updateContact
// );

// contactsRouter.patch("/:id/favorite", isValidId, updateStatusContact);

export default picturesRouter;
