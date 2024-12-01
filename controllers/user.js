
const {
    User,
    registerValidate,
    loginValidate,
  } = require("../models/user");
  const bcrypt = require("bcrypt");
  
  exports.authUser = async (req, res) => {
    const { error } = loginValidate(req.body);
  
    if (error) {
      return res.status(400).send(error.message);
    }
  
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send("Email or password is wrong!");
    } else {
      const isSuccess = await bcrypt.compare(req.body.password, user.password);
  
      if (!isSuccess) {
        return res.status(400).send("Email or password is wrong!");
      } else {
        const token = user.createAuthToken();
        res.header("x-auth-token", token).send(token);
      }
    }
  };
  
  exports.userList = async (req, res) => {
    const user = await User.find();
    res.status(200).send(user);
  };
  
  exports.singleUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  };
  
  exports.userAdd = async (req, res) => {
    const { error } = registerValidate(req.body);
  
    if (error) {
      res.status(400).send(error.message);
    } else {
      let user = await User.findOne({ email: req.body.email });
  
      if (user) {
        return res.status(401).send("this user already exists");
      } else {
        if (req.body.role == "admin") {
          return res
            .status(403)
            .send(
              "ERROR! You're doing something you don't have the authority to do!",
            );
        } else {
          const hashPassword = await bcrypt.hash(req.body.password, 10);
          const user = new User(req.body);
          user.password = hashPassword;
          
          const token = user.createAuthToken();
          const result = await user.save();
          res.status(201).header("x-auth-token", token).json(result);
        }
      }
    }
  };
  
