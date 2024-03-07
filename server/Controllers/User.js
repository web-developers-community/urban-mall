const CatchAsyncErr = require("../Middlewares/catch_async_errs");
const User = require("../Models/User");

exports.create_account = CatchAsyncErr(async (req, res) => {
  const find_account = await User.find({ email: req.body.email });
  if (find_account) {
    return res.status(400).json({
      status: 400,
      message: "Account already exists!",
    });
  } else {
    await User.create(req.body).then(
      res.json({
        message: "Account created successfully!",
      })
    );
  }
});
