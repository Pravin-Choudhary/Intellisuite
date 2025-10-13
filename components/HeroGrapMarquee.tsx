import { cn } from "@/lib/utils"

import { Star, TrendingUp, Users, Award } from "lucide-react"
import { Marquee } from "./ui/marquee"

// Define different component types
const StatCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => {
  return (
    <div className="relative w-48 h-32 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

const TestimonialCard = ({ name, role, text }: { name: string, role: string, text: string }) => {
  return (
    <div className="relative w-80 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-sm text-gray-700 mb-4">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
        <div>
          <div className="font-semibold text-sm text-gray-900">{name}</div>
          <div className="text-xs text-gray-600">{role}</div>
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="relative w-64 h-40 rounded-xl border border-gray-200 bg-gradient-to-br from-purple-50 to-blue-50 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
        <Award className="w-6 h-6 text-purple-600" />
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

const LogoCard = ({ name, logo }: { name: string, logo: string }) => {
  return (
    <div className="relative w-44 h-24 rounded-xl border border-gray-200 bg-white p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
      <div className="text-2xl font-bold text-gray-800">{logo}</div>
    </div>
  )
}

// Create arrays of different components
const firstRowItems = [
  { type: 'stat', props: { icon: Users, value: '50K+', label: 'Active Users' } },
  { type: 'testimonial', props: { name: 'Sarah Johnson', role: 'CEO at TechCorp', text: 'This platform transformed our business operations completely.' } },
  { type: 'feature', props: { title: 'Fast Performance', description: 'Lightning-fast load times and seamless experience.' } },
  { type: 'logo', props: { name: 'Company A', logo: 'ACME' } },
  { type: 'stat', props: { icon: TrendingUp, value: '99.9%', label: 'Uptime' } },
  { type: 'testimonial', props: { name: 'Mike Chen', role: 'Product Manager', text: 'The best tool we have ever used for our team.' } },
]

const secondRowItems = [
  { type: 'feature', props: { title: 'Secure & Reliable', description: 'Bank-level security to protect your data.' } },
  { type: 'logo', props: { name: 'Company B', logo: 'BRAND' } },
  { type: 'stat', props: { icon: Award, value: '4.9/5', label: 'User Rating' } },
  { type: 'testimonial', props: { name: 'Emily Davis', role: 'Designer', text: 'Beautiful design and incredibly intuitive interface.' } },
  { type: 'feature', props: { title: 'Easy Integration', description: 'Connect with your favorite tools in minutes.' } },
  { type: 'logo', props: { name: 'Company C', logo: 'CORP' } },
]

// Render component based on type
const renderComponent = (item: any, index: number) => {
  switch (item.type) {
    case 'stat':
      return <StatCard key={index} {...item.props} />
    case 'testimonial':
      return <TestimonialCard key={index} {...item.props} />
    case 'feature':
      return <FeatureCard key={index} {...item.props} />
    case 'logo':
      return <LogoCard key={index} {...item.props} />
    default:
      return null
  }
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gray-50 py-12 gap-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Trusted by thousands</h2>
        <p className="text-gray-600">Join companies around the world using our platform</p>
      </div>
      
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRowItems.map((item, index) => renderComponent(item, index))}
      </Marquee>
      
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRowItems.map((item, index) => renderComponent(item, index))}
      </Marquee>
      
      <div className="from-gray-50 pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-gray-50 pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}