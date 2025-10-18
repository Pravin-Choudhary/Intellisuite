import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChartPieLabelCustom } from './PieChart';
import { AnimatedBeamDemo } from './AppIntegrations';
import { BarChart3, CheckCircle, Cloud, Lock, Shield, TrendingUp, Zap } from 'lucide-react';
import MessageDialog from './MessageDialog';
import { ChartTooltipIndicatorLine } from './TooltipChart';

export default function AboutUS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Why to Choose Intellisuite? 
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Manage Clients Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="text-sm font-medium text-gray-600 mb-2">Manage clients</div>
              <CardTitle className="text-2xl font-bold mb-2">Keep clients in the loop</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Manage your clients from one place. With everything your clients need at their fingertips, they'll see your agency as an extension of their team.
              </CardDescription>
            </CardHeader>
            <CardContent>
                <AnimatedBeamDemo/>
            </CardContent>
          </Card>

{/* Customize Dashboards Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="text-sm font-medium text-gray-600 mb-2">Customize dashboards</div>
              <CardTitle className="text-2xl font-bold mb-2">Stay on top of metrics</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Get dashboards look exactly the way you want. Get a complete and accurate view of your Data.
              </CardDescription>
            </CardHeader>
            <CardContent className='border p-2 sm:p-4'>
             <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4'>
                <div className="w-full">
                  <ChartPieLabelCustom/>
                </div>
                <div className="w-full">
                  <ChartTooltipIndicatorLine/>
                </div>
             </div>
            </CardContent>
          </Card>

          {/* Automate Reporting Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="text-sm font-medium text-gray-600 mb-2">Automate reporting</div>
              <CardTitle className="text-2xl font-bold mb-2">Your Business at a Glance — With Smart, Real-Time Dashboards</CardTitle>
              <CardDescription className="text-base text-gray-600">
               Our plug-and-play dashboards connect with:
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* <ChartPieLabelCustom/> */}
              <div className="space-y-3 mb-6">
              {[
                { 
                  icon: <Zap className="w-5 h-5" />, 
                  title: "Google Sheets & CRMs", 
                  desc: "Sync your daily sales and leads",
                  color: "blue"
                },
                { 
                  icon: <TrendingUp className="w-5 h-5" />, 
                  title: "Shopify / WooCommerce", 
                  desc: "Track orders and revenue in real-time",
                  color: "purple"
                },
                { 
                  icon: <BarChart3 className="w-5 h-5" />, 
                  title: "Meta / Instagram Insights", 
                  desc: "Monitor engagement and ad ROI",
                  color: "pink"
                },
                { 
                  icon: <Cloud className="w-5 h-5" />, 
                  title: "All on Google Cloud", 
                  desc: "No tech setup required",
                  color: "indigo"
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
                >
                  <div className={`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center text-${item.color}-600 flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
              
              <MessageDialog title='Sample Dashboards' description='We provide Looker Studio template previews for social, sales, and finance dashboards.' triggerText='See Sample Dashboards →' className='w-full'/>
            </CardContent>
          </Card>

          {/* Generate Insights Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="text-sm font-medium text-gray-600 mb-2">Generate Insights</div>
              <CardTitle className="text-2xl font-bold mb-2">Your Data. Your Control.</CardTitle>
              <CardDescription className="text-base text-gray-600">
                We take your privacy seriously — every dashboard runs securely on Google’s infrastructure with:
              </CardDescription>
            </CardHeader>
            <CardContent>
               {/* <ChartBarMultiple/> */}
                <div className="space-y-1 mb-6">
              {[
                { 
                  icon: <Lock className="w-5 h-5" />, 
                  text: "End-to-end encryption for all data connections", 
                  color: "blue" 
                },
                { 
                  icon: <CheckCircle className="w-5 h-5" />, 
                  text: "OAuth-based access — you control what's shared", 
                  color: "green" 
                },
                { 
                  icon: <Cloud className="w-5 h-5" />, 
                  text: "No external storage — your data never leaves your Google account", 
                  color: "purple" 
                },
                { 
                  icon: <Shield className="w-5 h-5" />, 
                  text: "Compliance-ready setup for GDPR and Indian data protection norms", 
                  color: "orange" 
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex  items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-green-50 transition-colors duration-300"
                >
                  <div className={`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center text-${item.color}-600 flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <p className="text-gray-700 flex-1 text-sm sm:text-base">{item.text}</p>
                </div>
              ))}

            <div className='p-3 sm:p-4'>
              <Badge variant="secondary" className="gap-1.5">
                <span
                  className="size-2 rounded-full bg-[#3b82f6]"
                  aria-hidden="true"
                ></span>
               <span className='text-[14px] text-foreground tracking-wide'>Powered by Google Cloud Security</span>
              </Badge>
            </div>
          </div>

            {/* <div className="flex items-center gap-2 sm:gap-4 p-1 sm:p-2 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200 mb-2">
              <Cloud className="w-5 h-5 sm:w-8 sm:h-8 text-blue-[] flex-shrink-0" />
              <p className="font-semibold text-gray-900 text-sm sm:text-base">Powered by Google Cloud Security</p>
            </div> */}

             <MessageDialog title='Security Details' description='We use OAuth, end-to-end encryption, and keep dashboards within your Google account — no external storage.' triggerText='Learn How We Keep Your Data Safe' className='w-full' variantType='outline' />
            </CardContent>
          </Card>
        
        </div>
      </div>
    </div>
  );
}

function ClientRow({ name, email, time, status, color, initial } :any ) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3 flex-1">
        <div className={`w-8 h-8 rounded-full ${color === 'bg-blue-500' ? 'bg-blue-500' : color === 'bg-white' ? 'bg-orange-400' : 'bg-purple-400'} flex items-center justify-center text-white text-sm font-semibold`}>
          {initial}
        </div>
        <div className="flex-1 grid grid-cols-3 gap-1 md:gap-4 items-center">
          <span className="font-medium text-sm">{name}</span>
          <span className=" text-sm text-gray-600">{email}</span>
          <span className="hidden md:visible  text-sm text-gray-500">{time}</span>
        </div>
      </div>
      <Badge variant={status === 'Client' ? 'default' : 'secondary'} className={status === 'Client' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'}>
        {status}
      </Badge>
    </div>
  );
}