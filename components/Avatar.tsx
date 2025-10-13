import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'OS',
    name: 'Olivia Sparks'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'HL',
    name: 'Howard Lloyd'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards'
  },
  {
    fallback: '+39K',
    name: '39,000+ Users',
    isCounter: true
  }
]

const AvatarGroupTooltip = () => {
  return (
    <div className='flex -space-x-2'>
      {avatars.map((avatar, index) => (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            <Avatar className='ring-background ring-2 transition-all duration-300 ease-in-out hover:z-10 hover:-translate-y-1 hover:shadow-md'>
              {avatar.src && <AvatarImage src={avatar.src} alt={avatar.name} />}
              <AvatarFallback className={`text-xs font-semibold ${avatar.isCounter ? 'bg-gray-200 text-gray-700' : ''}`}>
                {avatar.fallback}
              </AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>{avatar.name}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}

export default AvatarGroupTooltip