import jwt from"jsonwebtoken";

export const generateToken = async (userID, res)=>{

    const token = jwt.sign({userID}, process.env.JWT_SECRET, {
        expiresIn: "7d",
    })

    res.cookie("jwt", token, {
        maxAge: 7 *24 *60*60*1000, // this is 7days in miliseconds
        httpOnly: true, // this token will not be accesed by js prevent XSS attacks cross-site scripting attacks
        sameSite: "strict", // CRSF attacks cross-site request forgery attacks
        secure:process.env.NODE_ENV !== "development"
    })

    return token;
}

