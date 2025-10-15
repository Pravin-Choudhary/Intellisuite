import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChartBarMultiple } from './BarChart';
import { ChartPieLabelCustom } from './PieChart';

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
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-4 md:p-6 shadow-md ">
                <div className="text-sm font-medium text-gray-600 mb-4">Strengthen Client Relationships</div>
                <div className="bg-white rounded-xl p-2 md:p-4 shadow-sm w-70">
                  {/* Client List */}
                  <div className="space-y-3">
                    <ClientRow
                      name="John Clark"
                      email="j.clark@email.com"
                      time="Today"
                      status="Client"
                      color="bg-blue-500"
                      initial="J"
                    />
                    <ClientRow
                      name="Diana Smith"
                      email="d.smith@email.com"
                      time="2 days ago"
                      status="Staff"
                      color="bg-white"
                      initial="D"
                    />
                    <ClientRow
                      name="Ilya Malek"
                      email="malek@email.com"
                      time="5 days ago"
                      status="Client"
                      color="bg-blue-500"
                      initial="M"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customize Dashboards Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="text-sm font-medium text-gray-600 mb-2">Customize dashboards</div>
              <CardTitle className="text-2xl font-bold mb-2">Stay on top of metrics</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Make dashboards look exactly the way you want in seconds. Get a complete and accurate view of your clients' metrics any time you need.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl p-6 shadow-md">
                <div className="text-sm font-medium text-gray-600 mb-4">Stay on Top of Metrics</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <div className="text-blue-600">📧</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-center">
                    <div className="w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-0 h-0 border-l-8 border-l-transparent border-b-12 border-b-purple-600 border-r-8 border-r-transparent rotate-90"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Automate Reporting Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="text-sm font-medium text-gray-600 mb-2">Automate reporting</div>
              <CardTitle className="text-2xl font-bold mb-2">Faster reporting, smarter conversations</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Build a report in under 30 minutes, or faster with a template. Use your saved time to have better conversations with your clients.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartPieLabelCustom/>
            </CardContent>
          </Card>

          {/* Generate Insights Card */}
         <ChartBarMultiple/>

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