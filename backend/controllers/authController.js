const {oauth2Client} = require('../utils/googleConfig');
const UserModel = require("../models/userModel") 
const axios = require('axios');  
const jwt = require('jsonwebtoken');


const googleLogin = async (req,res) => {
    try{ 
      const { code } = req.query; 
      const googleRes = await oauth2Client.getToken(code);
      oauth2Client.setCredentials(googleRes.tokens);

      const userRes = await axios.get(
        `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${googleRes.tokens.access_token}`
      ) 

      const {email, name, picture} = userRes.data; 

      let user = await UserModel.findOne({email}); 
      
      if(!user){
        user = await UserModel.create({
          email,
          name,
          picture
        });
      }

      const { _id } = user; 
      const token = jwt.sign({_id,email}, process.env.JWT_SECRET, {expiresIn: '7d'}); 

      return res.status(200).json({
        success: true,
        message: 'Google login successful',
        token,
        user
      });
       
    }catch(err){
      console.error(err);
      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
} 

module.exports = {
    googleLogin
}