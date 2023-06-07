import jwt from "jsonwebtoken"

const generateToken = (id) => {  
  console.log("hello");
  return jwt.sign({ id },"koko", {
    expiresIn: '30d',
  })
}

export default generateToken
