
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    plan: "basic",
    billingPeriod: "month",
    name: "Basic",
    price: 499,
    duration: "Monthly",
  },
  {
    plan: "standard",
    billingPeriod: "month",
    name: "Standard",
    price: 999,
    duration: "Monthly",
  },
  {
    plan: "standard",
    billingPeriod: "quarter",
    name: "Standard",
    price: 2699,
    duration: "Quarterly",
  },
  {
    plan: "premium",
    billingPeriod: "year",
    name: "Premium",
    price: 9999,
    duration: "Yearly",
  },
];

const initialAddress = {
  name: "",
  phone: "",
  address: "",
  city: "",
  pincode: "",
};

function Checkout() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [address, setAddress] = useState(initialAddress);

  const handleAddressChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const gst = selectedPlan ? selectedPlan.price * 0.18 : 0;
  const total = selectedPlan ? selectedPlan.price + gst : 0;

  const formatPrice = (amount) =>
    amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold">Checkout</h1>

        {/* Checkout Steps */}
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm font-medium">
          {["Plan", "Address", "Review", "Pay"].map((label, index) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step === index + 1
                    ? "bg-primary text-primary-foreground"
                    : step > index + 1
                    ? "bg-green-600 text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {index + 1}
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Step 1: Plan Selection */}
        {step === 1 && (
          <>
            <h2 className="mb-6 text-xl font-semibold">
              Choose Your Plan
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              {plans.map((plan) => {
                const isSelected =
                  selectedPlan?.plan === plan.plan &&
                  selectedPlan?.billingPeriod === plan.billingPeriod;

                return (
                  <Card
                    key={`${plan.plan}-${plan.billingPeriod}`}
                    onClick={() => setSelectedPlan(plan)}
                    className={`cursor-pointer transition-all ${
                      isSelected
                        ? "border-2 border-primary shadow-md"
                        : "hover:border-primary/50"
                    }`}
                  >
                    <CardHeader>
                      <CardTitle className="flex justify-between">
                        {plan.name}
                        {isSelected && (
                          <span className="text-sm text-primary">
                            Selected
                          </span>
                        )}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-3xl font-bold">
                        ₹{plan.price.toLocaleString("en-IN")}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {plan.duration}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8 flex justify-end">
              <Button
                disabled={!selectedPlan}
                onClick={() => setStep(2)}
              >
                Continue
              </Button>
            </div>
          </>
        )}

        {/* Step 2: Address */}
        {step === 2 && (
          <>
            <h2 className="mb-6 text-xl font-semibold">
              Service Address
            </h2>

            <Card>
              <CardContent className="pt-6">
                <form
                  onSubmit={handleAddressSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={address.name}
                      onChange={handleAddressChange}
                      required
                      className="w-full rounded-md border bg-background px-3 py-2"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={address.phone}
                      onChange={handleAddressChange}
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className="w-full rounded-md border bg-background px-3 py-2"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Complete Address
                    </label>
                    <textarea
                      name="address"
                      value={address.address}
                      onChange={handleAddressChange}
                      required
                      rows={3}
                      className="w-full rounded-md border bg-background px-3 py-2"
                      placeholder="House number, street, area"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      City
                    </label>
                    <select
                      name="city"
                      value={address.city}
                      onChange={handleAddressChange}
                      required
                      className="w-full rounded-md border bg-background px-3 py-2"
                    >
                      <option value="">Select city</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Agra">Agra</option>
                      <option value="Lucknow">Lucknow</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Pincode
                    </label>
                    <input
                      name="pincode"
                      type="text"
                      value={address.pincode}
                      onChange={handleAddressChange}
                      required
                      pattern="[0-9]{6}"
                      maxLength={6}
                      className="w-full rounded-md border bg-background px-3 py-2"
                      placeholder="6-digit pincode"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>

                    <Button type="submit">
                      Continue
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <div>
            <h2 className="mb-6 text-xl font-semibold">
              Review Your Order
            </h2>

            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Plan</span>
                  <span className="font-medium">
                    {selectedPlan?.name} ({selectedPlan?.duration})
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Plan Price</span>
                  <span>₹{formatPrice(selectedPlan.price)}</span>
                </div>

                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>₹{formatPrice(gst)}</span>
                </div>

                <div className="flex justify-between border-t pt-4 text-lg font-bold">
                  <span>Total Amount</span>
                  <span>₹{formatPrice(total)}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-5">
              <CardHeader>
                <CardTitle>Service Address</CardTitle>
              </CardHeader>

              <CardContent>
                <p>{address.name}</p>
                <p>{address.phone}</p>
                <p>{address.address}</p>
                <p>
                  {address.city} - {address.pincode}
                </p>
              </CardContent>
            </Card>

            <div className="mt-6 flex justify-between">
              <Button
                variant="outline"
                onClick={() => setStep(2)}
              >
                Back
              </Button>

              <Button onClick={() => setStep(4)}>
                Continue to Pay
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Pay */}
        {step === 4 && (
          <div>
            <h2 className="mb-6 text-xl font-semibold">
              Payment
            </h2>

            <Card>
              <CardHeader>
                <CardTitle>Complete Your Payment</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Your order is ready for payment.
                </p>

                <div className="flex justify-between font-medium">
                  <span>Selected Plan</span>
                  <span>{selectedPlan?.name}</span>
                </div>

                <div className="flex justify-between text-lg font-bold">
                  <span>Total Amount</span>
                  <span>₹{formatPrice(total)}</span>
                </div>

                <p className="text-sm text-muted-foreground">
                  Payment options will be available in the next step.
                </p>

                <div className="flex justify-start pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep(3)}
                  >
                    Back
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
