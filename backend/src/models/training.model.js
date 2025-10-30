import mongoose, {Schema} from "mongoose";

const trainingSchema = new Schema({
    title: { type: String, required: true },
    theme: { type: String, required: true, enum: [
      "Flood Management",
      "Fire Safety",
      "Earthquake Response",
      "First Aid",
      "Cyclone Preparedness",
      "Landslide Management",
      "Drought Management",
      "Urban Disaster Management"
    ]},
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    hostInstitution: { type: String, required: true },
    trainer: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    venue: { type: String, required: true },
    resourcesRequired: { type: String, required: true },
    observationNotes: { type: String, required: true },
    }, 
    { timestamps: true }
);

export const Training = mongoose.model("Training", trainingSchema);