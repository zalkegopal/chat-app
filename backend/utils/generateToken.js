import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // to prevent XSS cross-site scripting attacks
    sameSite: "strict", // CSRF attacks cross site request forgery attack prevention
    secure: process.env.NODE_ENV !== "developement",
  });
};

export default generateTokenAndSetCookie;
