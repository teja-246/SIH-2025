import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import { Training } from "../models/training.model.js";

const createTraining = asyncHandler(async (req, res) => {
    console.log("Create Training request received");
    const { title, theme, description, duration, hostInstitution, trainer, state, district, venue, resourcesRequired, observationNotes } = req.body;

    if (!title || !theme || !description || !duration || !hostInstitution || !trainer || !state || !district || !venue || !resourcesRequired || !observationNotes) {
        throw new ApiError(400, "All fields are required");
    }

    const training = await Training.create({
        title, theme, description, duration, hostInstitution, trainer, state, district, venue, resourcesRequired, observationNotes
    });
    if (!training) {
        throw new ApiError(500, "Training not created! Try again...");
    }
    return res.status(201).json(
        new ApiResponse(201, training, "Training created successfully")
    );
});

export { createTraining };