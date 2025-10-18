"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A pie chart with a custom label"

const chartData = [
  { product: "productA", revenue: 275, fill: "var(--color-productA)" },
  { product: "productB", revenue: 200, fill: "var(--color-productB)" },
  { product: "productC", revenue: 187, fill: "var(--color-productC)" },
  { product: "productD", revenue: 173, fill: "var(--color-productD)" },
  { product: "other", revenue: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  revenue: {
    label: "Total Revenue",
  },
  productA: {
    label: "Product A",
    color: "var(--chart-1)",
  },
  productB: {
    label: "Product B",
    color: "var(--chart-2)",
  },
  productC: {
    label: "Product C",
    color: "var(--chart-3)",
  },
  productD: {
    label: "Product D",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other Products",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartPieLabelCustom() {
  return (
    <Card className="flex flex-col h-full">
      <CardContent className="flex-1 pb-0 flex items-center justify-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-h-[200px] sm:max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="revenue" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="revenue"
              labelLine={false}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="hsla(var(--foreground))"
                  >
                    {payload.revenue}
                  </text>
                )
              }}
              nameKey="product"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}