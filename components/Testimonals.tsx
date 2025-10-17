import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"

const reviews = [
  {
    name: "Priya Nair",
    username: "@priya",
    body: "I stopped guessing and started scaling! My sales grew 20% after I began tracking ad ROI daily.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Rohit Sharma",
    username: "@rohit",
    body: "The dashboard made my Google Sheet look like a command center. Everything is visual and easy to understand.",
    img: "https://avatar.vercel.sh/rohit",
  },
  {
    name: "Sneha Iyer",
    username: "@sneha",
    body: "Data visualization has never been this intuitive. Their team turned my raw data into actionable insights.",
    img: "https://avatar.vercel.sh/sneha",
  },
  {
    name: "Aarav Mehta",
    username: "@aarav",
    body: "The dashboards helped us identify hidden trends and improve decision-making across departments.",
    img: "https://avatar.vercel.sh/aarav",
  },
  {
    name: "Dillip Agarwal",
    username: "@Dillusteelsuppliers",
    body: "Thanks to their AI-powered dashboards, our reporting time dropped from hours to minutes.",
    img: "https://avatar.vercel.sh/karan",
  },
  {
    name: "Shalu Sultania",
    username: "@swagsatrangi",
    body: "Incredible experience! Their analytics solution gave our business a clear performance overview in real time.",
    img: "https://avatar.vercel.sh/vikram",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 sm:w-72 md:w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function ReviewCardTestimonials() {
  return (
    <section className="py-10">
      <div className="container px-4 md:px-6">
        {/* Title Section */}
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            See how businesses like yours transformed their data into growth with our dashboards
          </p>
        </div>

        {/* Marquee Cards */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s] mb-4">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </div>
    </section>
  )
}