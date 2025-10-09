import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { User } from "../models/user.model.js";

const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }
    }
    catch (error) {
        throw new ApiError(500, "Something went wrong while generating Access and Refresh Token")
    }
};

const registerUser = asyncHandler(async (req, res) => {
    console.log("Register request received");
    const { email, password, role } = req.body

    if (!email || !password || !role) {
        throw new ApiError(400, "Email, Password and Role are required")
    }

    const existedUser = await User.findOne({email})
    if (existedUser) {
        throw new ApiError(409, "User already exists")
    }

    const user = await User.create({
        email,
        password,
        role
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if (!createdUser) {
        throw new ApiError(500, "User not created! Try again...")
    }

    return res.status(201).json(
        new ApiResponse(201, createdUser, "User registered successfully")
    )
});

const loginUser = asyncHandler(async(req, res)=>{
    console.log('Login request received');
    console.log('Request headers:', req.headers);

    const { email, password } = req.body

    if (!email || !password) {
        throw new ApiError(400, "Email and Password are required")
    }
    if (password === "") {
        throw new ApiError(400, "Password is required")
    }

    const user = await User.findOne({email})
    if (!user) {
        throw new ApiError(401, "User doesn't exist")
    }

    const isPasswordvalid = await user.isPasswordCorrect(password)

    if (!isPasswordvalid) {
        throw new ApiError(401, "Pasword is Incorrect")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshtoken")

    console.log('Setting cookies...');

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
    
    console.log('Response headers:', res.getHeaders());

    return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, {
                user: loggedInUser,
                accessToken,
                refreshToken
            }, "User logged in successfully")
        )
});

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(req.user._id,
        {
            $unset: { refreshToken: 1 }
        },
        {
            new: true
        })

    const options = {
        httpOnly: true,
        secure: true
    }
    return res.status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, "Logged Out Successfully"))
});

export { loginUser, registerUser, logoutUser };