import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";
import { User } from "../../models/userSchema.js";
import bcrypt from "bcryptjs"
export const registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password, role, phone, aboutMe } = req.body;



    try {
        // check the user is alrady register
        const existingUser = await User.findOne({ email });

       if(existingUser){
        return res.status(400).json({ message: "User already exists" });
       }

       const hashedPassword = await bcrypt.hash(password, 10);
        // create user
        const user = await User.create({
            name, email, password:hashedPassword, role, phone, aboutMe
        });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
})