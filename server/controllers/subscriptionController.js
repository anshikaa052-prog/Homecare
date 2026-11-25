
import Subscription from "../models/Subscription.js";
import Plan from "../models/Plan.js";

export const createSubscription = async (req, res, next) => {
  try {
    const { plan, billingPeriod } = req.body;

    // Validate required fields
    if (!plan || !billingPeriod) {
      return res.status(400).json({
        success: false,
        message: "Plan and billing period are required",
      });
    }

    // Find selected active plan
    const selectedPlan = await Plan.findOne({
      plan,
      billingPeriod,
      isActive: true,
    });

    if (!selectedPlan) {
      return res.status(404).json({
        success: false,
        message: "Selected subscription plan is not available",
      });
    }

    // Check existing active subscription
    const existingSubscription = await Subscription.findOne({
      user: req.user._id,
      status: "active",
      endDate: { $gt: new Date() },
    });

    if (existingSubscription) {
      return res.status(409).json({
        success: false,
        message: "You already have an active subscription",
      });
    }

    // Calculate subscription dates
    const startDate = new Date();
    const endDate = new Date(startDate);

    if (billingPeriod === "month") {
      endDate.setMonth(endDate.getMonth() + 1);
    } else if (billingPeriod === "quarter") {
      endDate.setMonth(endDate.getMonth() + 3);
    } else if (billingPeriod === "year") {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }

    // Initialize usage counters
    const usage = {};

    for (const category of Object.keys(
      selectedPlan.entitlements.fairUseCap || {}
    )) {
      usage[category] = 0;
    }

    // Create subscription
    const subscription = await Subscription.create({
      user: req.user._id,
      plan: selectedPlan.plan,
      billingPeriod: selectedPlan.billingPeriod,
      amount: selectedPlan.amount,
      startDate,
      endDate,
      status: "active",
      usage,
    });

    return res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      subscription,
    });
  } catch (error) {
    next(error);
  }
};
