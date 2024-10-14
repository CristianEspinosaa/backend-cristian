import User from "../../models/User.js";

let allUsers = async (req, res) => {
    try {
        let all = await User.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }



}

export default allUsers