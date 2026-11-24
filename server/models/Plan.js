
import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ["Basic", "Standard", "Premium"],
    },

    plan: {
      type: String,
      required: true,
      enum: ["basic", "standard", "premium"],
    },

    billingPeriod: {
      type: String,
      required: true,
      enum: ["month", "quarter", "year"],
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    entitlements: {
      limit: {
        type: mongoose.Schema.Types.Mixed,
        default: null,
      },

      fairUseCap: {
        type: mongoose.Schema.Types.Mixed,
        default: null,
      },

      period: {
        type: String,
        required: true,
        enum: ["month", "quarter", "cycle"],
      },
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

planSchema.index(
  { plan: 1, billingPeriod: 1 },
  { unique: true }
);

const Plan = mongoose.model("Plan", planSchema);

export default Plan;
