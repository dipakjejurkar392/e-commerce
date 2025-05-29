let User = require('../model/user')
let bcrypt = require('bcrypt')
let registration =  async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.json({ success: false, message: "mising details" })
    }
    try {
        let existUser = await User.findOne({ email })
        if (existUser) {
            return res.json({ success: false, message: "User already existed" })

        }
        let hashedPassword = await bcrypt.hash(password, 10)
        let user = new User({ name, email, password: hashedPassword })
        await user.save()
       res.json({ success:true ,message:"registration sucessfully"})

    } catch (error) {
        res.json({ success: false, message: error.message })

    }

}
let allUser =  async(req,res)=>{
    // let {email}=req.body

    let allusers =await User.find()
    return res.json({success:true,message:allusers})
    
}
let UserById = async(req,res)=>{
    // // let {email}=req.body
    // let email = "dipakjejurkar@gmail.com"
    // let allusers =await User.findOne({email})
    let id = req.params.id
    let user = await User.findOne({id})
    return res.json({success:true,message:user})
    
}
 let login = async(req,res)=>{
    let {email,password}=req.body
    if (!email || !password) {
        return({success:false,message:"mising details"})
    }
    try {
         let existUser = await User.findOne({ email })
        if (!existUser) {
            return res.json({ success: false, message: "invalid email id" })

        }
        let isMatch = await bcrypt.compare(password,existUser.password)
        if (!isMatch) {
            return res.json({success:false,message:"invalid password"})
            
        }
       return res.json({success:true,message:"login sucessfully"})
        
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
    
}
module.exports = {
    registration,
    allUser,
    UserById,
    login
}