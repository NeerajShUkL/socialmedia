import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriends,
} from "../contorllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

// UPDATE
router.patch("/:id/:friends", verifyToken, addRemoveFriends);

export default router;
