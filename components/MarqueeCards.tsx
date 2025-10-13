/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"; 
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, Target } from 'lucide-react';
import { ChartLineDots } from './LineChart';
import { ChartAreaIcons } from './AreaChart';

// Dashboard card items
const dashboardCards = [
  { id: 'statistics', type: 'statistics' },
  { id: 'revenue', type: 'revenue' },
  { id: 'profit', type: 'profit' },
  { id: 'total-revenue', type: 'total-revenue' },
  { id: 'line-chart', type: 'line-chart' },
  { id: 'area-chart', type: 'area-chart' },
]

const firstRow = dashboardCards.slice(0, Math.ceil(dashboardCards.length / 2))
const secondRow = dashboardCards.slice(Math.ceil(dashboardCards.length / 2))

const DashboardCard = ({ type }: { type: string }) => {
  switch (type) {
    case 'statistics':
      return (
        <Card className="bg-white border-gray-200 shadow-sm w-72">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">Statistics</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">Order placed</span>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">+11</Badge>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">12 New orders</span>
                  <span className="text-xs text-gray-500">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">Order Delivered</span>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">-4</Badge>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">8 New orders</span>
                  <span className="text-xs text-gray-500">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )

    case 'revenue':
      return (
        <Card className="bg-white border-gray-200 shadow-sm w-72">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-xs">Last week</span>
            </div>
            <div className="flex items-end justify-between h-24">
              {[40, 80, 65, 75, 95, 50, 70, 90].map((height, i) => (
                <div 
                  key={i} 
                  className="w-3 bg-gray-300 rounded-t-sm"
                  style={{ height: `${height}%`, backgroundColor: i === 4 ? '#000' : undefined }}
                ></div>
              ))}
            </div>
            <div className="flex items-end justify-between pt-2">
              <span className="text-2xl font-bold text-gray-900">124K</span>
              <span className="text-sm text-green-600 font-medium">+12.6%</span>
            </div>
          </CardContent>
        </Card>
      )

    case 'profit':
      return (
        <Card className="bg-white border-gray-200 shadow-sm w-72">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <span>-16%</span>
                <TrendingDown className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">$89.34k</div>
              <div className="text-sm text-gray-500">Total Profit</div>
            </div>
            <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
              Last One year
            </Badge>
          </CardContent>
        </Card>
      )

    case 'total-revenue':
      return (
        <Card className="bg-white border-gray-200 shadow-sm w-72">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">Total Revenue</span>
              </div>
              <span className="text-sm text-gray-600">30 Days</span>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-gray-900">$12,400</span>
              <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                12.4%
              </span>
            </div>
          </CardContent>
        </Card>
      )

    case 'line-chart':
      return <ChartLineDots />

    case 'area-chart':
      return <ChartAreaIcons />

    default:
      return null
  }
}

export function MarqueeVertical() {
  return (
    <div className="relative flex h-[600px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((card) => (
          <DashboardCard key={card.id} type={card.type} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((card) => (
          <DashboardCard key={card.id} type={card.type} />
        ))}
      </Marquee>
      <div className="from-gray-50 pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
      <div className="from-gray-50 pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  )
}