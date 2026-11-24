
import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db.js";
import Service from "../models/Service.js";
import Plan from "../models/Plan.js";

dotenv.config();

const services = [
  {
    name: "Cleaning",
    description: "Professional cleaning services for your home.",
    category: "cleaning",
    basePrice: 499,
    image: "",
    isActive: true,
  },
  {
    name: "Plumbing",
    description: "Reliable plumbing services for taps, pipes and water leaks.",
    category: "plumbing",
    basePrice: 399,
    image: "",
    isActive: true,
  },
  {
    name: "Electrical",
    description: "Professional electrical repair and maintenance services.",
    category: "electrical",
    basePrice: 449,
    image: "",
    isActive: true,
  },
  {
    name: "AC Service",
    description: "AC maintenance, repair and servicing for your home.",
    category: "ac",
    basePrice: 599,
    image: "",
    isActive: true,
  },
  {
    name: "Appliance Repair",
    description: "Repair and maintenance services for home appliances.",
    category: "appliance",
    basePrice: 499,
    image: "",
    isActive: true,
  },
];

const plans = [
  {
    name: "Basic",
    plan: "basic",
    billingPeriod: "month",
    amount: 499,
    entitlements: {
      limit: null,
      fairUseCap: {},
      period: "month",
    },
    isActive: true,
  },
  {
    name: "Standard",
    plan: "standard",
    billingPeriod: "month",
    amount: 999,
    entitlements: {
      limit: null,
      fairUseCap: {
        plumbing: 4,
      },
      period: "month",
    },
    isActive: true,
  },
  {
    name: "Standard",
    plan: "standard",
    billingPeriod: "quarter",
    amount: 2699,
    entitlements: {
      limit: null,
      fairUseCap: {
        plumbing: 4,
      },
      period: "month",
    },
    isActive: true,
  },
  {
    name: "Premium",
    plan: "premium",
    billingPeriod: "year",
    amount: 9999,
    entitlements: {
      limit: null,
      fairUseCap: {
        cleaning: 8,
      },
      period: "cycle",
    },
    isActive: true,
  },
];

const seedData = async () => {
  try {
    await connectDB();

    console.log("Connected to MongoDB.");

    for (const service of services) {
      await Service.updateOne(
        { category: service.category },
        { $set: service },
        { upsert: true }
      );
    }

    console.log("Services seeded successfully.");

    for (const plan of plans) {
      await Plan.updateOne(
        {
          plan: plan.plan,
          billingPeriod: plan.billingPeriod,
        },
        { $set: plan },
        { upsert: true }
      );
    }

    console.log("Subscription plans seeded successfully.");

    await mongoose.connection.close();

    console.log("Seed data completed successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Seed data failed:", error.message);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedData();
