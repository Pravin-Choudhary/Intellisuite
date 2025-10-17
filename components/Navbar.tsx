  import { useId } from "react"
  import { HouseIcon,InfoIcon , User2Icon , LightbulbIcon, BadgeIndianRupee } from "lucide-react"

  import { Button } from "@/components/ui/button"

  import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import Image from "next/image"

  // Navigation links array to be used in both desktop and mobile menus
  const navigationLinks = [
    { href: "#hero", label: "Home", icon: HouseIcon, active: true },
    { href: "#about-us", label: "About us", icon: InfoIcon },
    { href: "#team", label: "Team", icon: User2Icon },
    { href: "#pricing", label: "Pricing", icon: BadgeIndianRupee },
  ]

  export default function NavBar() {
    const id = useId()

    return (
      <header className="border-b px-4 md:px-6 shadow-md">
        <div className="flex h-20 items-center justify-between max-w-[950px]">
          {/* Left side */}
          <div className="flex flex-1 items-center gap-2">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group size-8 md:hidden"
                  variant="ghost"
                  size="icon"
                >
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-36 p-1 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link, index) => {
                      const Icon = link.icon
                      return (
                        <NavigationMenuItem key={index} className="w-full">
                          <NavigationMenuLink
                            href={link.href}
                            className="flex-row items-center gap-2 py-1.5"
                            active={link.active}
                          >
                            <Icon
                              size={16}
                              className="text-muted-foreground/80"
                              aria-hidden="true"
                            />
                            <span>{link.label}</span>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )
                    })}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="text-primary hover:text-primary/90">
                    <Image src="/intellisuiteLogo.png" width={120} height={60} alt="IntelliSuite Logo" priority />
              </a>
            </div>
          </div>
          {/* Middle area */}
          <NavigationMenu className="max-md:hidden ">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      active={link.active}
                      href={link.href}
                      className="flex-row items-center gap-2 py-1.5 font-medium text-foreground hover:text-primary"
                    >
                      <Icon
                        size={16}
                        className="text-muted-foreground/80"
                        aria-hidden="true"
                      />
                      <span className="text-[16px]">{link.label}</span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    )
  }
