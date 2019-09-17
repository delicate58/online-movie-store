const router = require("express").Router();
const bcrypt = require("bcryptjs");

//models
const User = require("../model/User");

const { registerValidation,loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
  //validate data
  const { error } = registerValidation(req.body);
  const { name, email, password } = req.body;
  if (error) return res.status(400).send(error.details);

  //check if the user is already in our Db
  const emailExist = await User.findOne({ email });
  console.log(email);
  if (emailExist) return res.status(400).send("Email Already Exist");

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    password: hashPassword
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login",async (req,res)=>{
    const{email,password} =req.body;
    const {error}= loginValidation(req.body);
     if(error) return res.status(400).send(error);
    //check if the user exist by the email
    const user= await User.findOne({email})
    if(!user)  return res.status(400).send("Email or password is wrong");

    //if pasword is correct 
    const validdPass=await bcrypt.compare(password,user.password);
    if(!validdPass) return res.status(400).send("invalid password");

    res.send("logged in")
    
})

module.exports = router;
