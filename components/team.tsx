import { Badge } from "./ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const members = [
    {
        name: 'Venu Gopal Agarwal',
        role: 'Chief Technology Officer',
        designation: 'Chief Technology Officer',
        bio: 'Visionary technology leader overseeing innovation, strategic growth, and sustainable digital transformation across the organization.',
        primarySkill: 'Leadership & Innovation',
        skills: ['Strategic Planning', 'Decision Making', 'Innovation Management', 'Team Leadership']
    },
    {
        name: 'Kartik Agarwal',
        role: 'Software Engineer',
        designation: 'Full Stack Developer',
        bio: 'Creative and detail-oriented engineer focused on building reliable and user-friendly software that enhances digital experiences.',
        primarySkill: 'Problem Solving',
        skills: ['Analytical Thinking', 'Collaboration', 'Adaptability', 'Continuous Learning']
    },
    {
        name: 'Shreya Kedia',
        role: 'Data Scientist',
        designation: 'Machine Learning Specialist',
        bio: 'Insight-driven professional passionate about uncovering trends and translating data into actionable business intelligence.',
        primarySkill: 'Data-Driven Analysis',
        skills: ['Critical Thinking', 'Curiosity', 'Communication', 'Research Skills']
    },
    {
        name: 'Ajin Anthony',
        role: 'Data Engineer',
        designation: 'Data Engineer',
        bio: 'Efficient data strategist with expertise in designing structured solutions to support analytical and business goals.',
        primarySkill: 'Data Management',
        skills: ['Attention to Detail', 'Process Optimization', 'Time Management', 'Collaboration']
    },
]


function TeamCard({ member }: { member: any }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-center text-[20px] font-semibold text-foreground">{member.name}</CardTitle>
                <CardDescription className="flex justify-center">
                    <Badge className="text-[#3b82f6] text-md font-semibold" variant={"secondary"}>{member.designation}</Badge>
                    {/* <h4 className="text-[#3b82f6] text-lg font-semibold"></h4> */}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
                <div className="flex justify-center">
                    <Badge className="flex justify-center text-secondary-foreground" variant='outline'>{member.primarySkill}</Badge>
                </div>
                <div className="flex justify-start tracking-tight">
                    <p className="text-[13px]/5 text-muted-foreground/95 font-medium">
                        {member.bio}
                    </p>
                </div>

                <div className="flex justify-start gap-2 mt-3 flex-wrap">
                    {member.skills.map((skill: string, index: number) => (
                        <Badge key={index} className="text-secondary-foreground" variant='secondary'>{skill}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default function TeamSection() {
    return (
        <section className="py-12 md:py-25 ">
        
            <div className='mb-12 text-center sm:mb-16 lg:mb-24'>
                <h2 className='mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl'>Get to Know Our Amazing Team</h2>
                <p className='text-muted-foreground text-xl'>
                    Meet the Passionate Experts Behind Our Success and Learn More About Their Roles.
                </p>
            </div>
            
            <div className=" px-4 sm:px-8 md:px-12 lg:px-20 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
                {members.map((member, index) => (
                    <TeamCard key={index} member={member} />
                ))}
            </div>

        </section>
    )
}