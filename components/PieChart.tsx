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
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Products Sells -- Pie Chart Report</CardTitle>
        <CardDescription>January - June 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] px-0"
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
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total Product sells in last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}