"use client";

import { CircleCheck } from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import MessageDialog from "./MessageDialog";
import { SlidingNumber } from "./ui/sliding-number";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PricingFeature[];
  button: {
    text: string;
    url: string;
  };
}

interface Pricing2Props {
  heading?: string;
  description?: string;
  plans?: PricingPlan[];
}

const PricingSection = ({
  heading = "Simple Pricing",
  description = "Pay Only for What You Need",
  plans = [
    {
      id: "basic",
      name: "Basic Plan",
      description: "1 Dashboard",
      monthlyPrice: 999,
      yearlyPrice: 9999,
      features: [
        { text: "1 Dashboard" },
        { text: "Real-time data updates" },
        { text: "Basic analytics" },
        { text: "Email support" },
      ],
      button: {
        text: "Start ₹999 Plan",
        url: "#",
      },
    },
    {
      id: "pro",
      name: "Power Plan",
      description: "1 Dashboard + Alerts + Email Summary",
      monthlyPrice: 2499,
      yearlyPrice: 24999,
      features: [
        { text: "1 Dashboard" },
        { text: "Custom alerts" },
        { text: "Email summary reports" },
        { text: "Advanced analytics" },
        { text: "Priority support" },
      ],
      button: {
        text: "Start ₹2,499 Plan",
        url: "#",
      },
    },
    {
      id: "custom",
      name: "Custom",
      description: "3+ Dashboards + 1-on-1 Analytics",
      monthlyPrice: 5999,
      yearlyPrice: 59999,
      features: [
        { text: "3+ Dashboards" },
        { text: "1-on-1 Analytics consultation" },
        { text: "Custom integrations" },
        { text: "Dedicated account manager" },
        { text: "White-label options" },
      ],
      button: {
        text: "Talk to Sales",
        url: "#",
      },
    },
  ],
}: Pricing2Props) => {
  const [isYearly, setIsYearly] = useState(false);

  const handleClick = () => {
    const end = Date.now() + 2 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  const handleToggle = () => {
    const newYearlyState = !isYearly;
    setIsYearly(newYearlyState);
    
    if (newYearlyState) {
      handleClick();
    }
  };
  return (
    <section className="py-8 mb-10">
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
          <h2 className="text-pretty text-4xl font-semibold lg:text-5xl">
            {heading}
          </h2>
          {description && (
            <p className="text-muted-foreground lg:text-xl">{description}</p>
          )}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 text-lg">
              Monthly
              <Switch
                checked={isYearly}
                onCheckedChange={handleToggle}
              />
              Yearly
            </div>
            {isYearly && (
              <div className="inline-flex items-center gap-2 rounded-lg bg-green-50 dark:bg-green-950/50 px-4 py-2 text-sm font-medium text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                <CircleCheck className="size-4" />
                <span>Pay yearly and get 2 months absolutely FREE!</span>
              </div>
            )}
          </div>
          <div className="flex flex-col items-stretch gap-6 md:flex-row">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className="flex w-80 flex-col justify-between text-left"
              >
                <CardHeader>
                  <CardTitle>
                    <p>{plan.name}</p>
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-end text-4xl font-semibold">
                      <span>
                        ₹
                      </span>
                      <span> 
                        {isYearly ? <SlidingNumber value={plan.yearlyPrice} /> : <SlidingNumber value={plan.monthlyPrice} />}
                      </span>
                      <span className="text-muted-foreground text-2xl font-semibold">
                        {isYearly ? "/yr" : "/month"}
                      </span>
                    </div>
                    {isYearly && (
                      <div className="inline-flex items-center gap-1.5 rounded-md bg-green-100 dark:bg-green-950 px-2.5 py-1 text-xs font-semibold text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 w-fit">
                        <span>
                          {plan.id === "basic" && "🎉"}
                          {plan.id === "pro" && "💪"}
                          {plan.id === "custom" && "🚀"}
                        </span>
                        <span>
                          Save ₹{(plan.monthlyPrice * 12 - plan.yearlyPrice).toLocaleString('en-IN')}
                        </span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-6" />
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CircleCheck className="size-4" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                    {plan.name !== "Custom" ? (
                                <MessageDialog title="Start Plan" description="We will connect your accounts and set up the dashboard. A 1-time assisted setup is available on request." triggerText="Start Plan" className="w-full" variantType="default"/>
                    ) : (
                                <MessageDialog title="Start Plan" description="We will connect your accounts and set up the dashboard. A 1-time assisted setup is available on request." triggerText="Talk to Sales" className="w-full" variantType="default"/>
                    ) }
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { PricingSection };