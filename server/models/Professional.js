
import mongoose from "mongoose";

const professionalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    serviceCategories: {
      type: [String],
      enum: ["cleaning", "plumbing", "electrical"],
      required: true,
    },

    city: {
      type: String,
      enum: ["Delhi", "Agra", "Lucknow"],
      required: true,
    },

    experience: {
      type: Number,
      default: 0,
      min: 0,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    totalJobs: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Professional = mongoose.model(
  "Professional",
  professionalSchema
);

export default Professional;
