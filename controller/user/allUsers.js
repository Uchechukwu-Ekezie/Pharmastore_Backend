import userModel from "../../models/userModel.js";

export const allUsers = async (req, res) => {
  try {
    console.log("userid all Users", req.userId);

    const allUsers = await userModel.find();

    res.json({
      message: "All User ",
      data: allUsers,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
