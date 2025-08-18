import jwt from 'jsonwebtoken';

const auth= (req, res, next) => {
  const token = req.headers.authorization;

  try {
    jwt.verify(token, process.env.JWT_SECRET)
      next(); // Proceed to the next middleware or route handler
    
  } catch (error) {
    res.json({ success: false, message: "Unauthorized access" });
  }
    
};

export default auth;