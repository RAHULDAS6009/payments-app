const express = require("express");
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config.js");
const { User, Account } = require("../db.js");
const { authMiddleware } = require("../middleware.js");

const signupSchema = zod.object({
  username: zod.string().email(),
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string(),
});

router.post("/signup", async (req, res) => {
  //we are assuming user inputing the email is valid since we are not sending the otp
  const obj = signupSchema.safeParse(req.body);
  ///we can write this in this way const {success}=.. */
  if (!obj.success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken/Incorrect inputs",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });

  const userId = user._id;

  await Account.create({
    balance: 1 + Math.random() * 10000,
    userId: userId,
  });
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
  });
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});
router.post("/signin", async (req, res) => {
  //user sigin with credentials
  const { success } = signinBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (existingUser) {
    const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET);

    res.status(200).json({
      token: token,
    });
  } else {
    res.status(411).json({
      meassge: "Error while logging in",
    });
  }
});

const updatedBody = zod.object({
  password: zod.string().optional(),
  firstname: zod.string().optional(),
  lastname: zod.string().optional(),
});
router.put("/update", authMiddleware, async (req, res) => {
  const { success } = updatedBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Error While updating information",
    });
  }
  const updateUser = await User.updateOne({ _id: req.userId }, req.body);
  if (updateUser) {
    return res.status(200).json({
      message: "Updated successfully",
    });
  }
  return res.status(411).json({
    message: "Error While updating information",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  //This code simply tells that if write something in filter it will simply filter me something from firstname
  const users = await User.find({
    $or: [
      {
        firstname: {
          $regex: filter,
        },
      },
      {
        lastname: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      _id: user._id,
    })),
  });
});

module.exports = router;
