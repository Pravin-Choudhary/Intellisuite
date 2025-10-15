"use client";

import { CircleCheck } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
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

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
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
      name: "Basic",
      description: "1 Dashboard",
      monthlyPrice: "₹999",
      yearlyPrice: "₹9,999",
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
      name: "Pro",
      description: "1 Dashboard + Alerts + Email Summary",
      monthlyPrice: "₹2,499",
      yearlyPrice: "₹24,999",
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
      monthlyPrice: "₹5,999",
      yearlyPrice: "₹59,999",
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
          <div className="flex items-center gap-3 text-lg">
            Monthly
            <Switch
              checked={isYearly}
              onCheckedChange={() => setIsYearly(!isYearly)}
            />
            Yearly
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
                  <div className="flex items-end">
                    <span className="text-4xl font-semibold">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground text-2xl font-semibold">
                      {isYearly ? "/yr" : "/month"}
                    </span>
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
                  <             MessageDialog title="Start Plan" description="We will connect your accounts and set up the dashboard. A 1-time assisted setup is available on request." triggerText="Talk to Sales" className="w-full" variantType="default"/>
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