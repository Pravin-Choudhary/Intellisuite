const members = [
    {
        name: 'Aarav Mehta',
        role: 'Data Analyst',
        avatar: 'https://avatars.githubusercontent.com/u/47919550?v=4',
    },
    {
        name: 'Shivam Kumar',
        role: ' Data Visualization Expert',
        avatar: 'https://avatars.githubusercontent.com/u/68236786?v=4',
    },
    {
        name: 'Rohit Sharma',
        role: 'Data Engineer',
        avatar: 'https://avatars.githubusercontent.com/u/99137927?v=4',
    },
    {
        name: 'Vikram Deshmukh',
        role: 'Data Scientist',
        avatar: 'https://avatars.githubusercontent.com/u/31113941?v=4',
    },
]

export default function TeamSection() {
    return (
        <section className="py-12 md:py-32">
        
            <div className='mb-12 text-center sm:mb-16 lg:mb-24'>
            <h2 className='mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl'>Get to Know Our Amazing Team</h2>
            <p className='text-muted-foreground text-xl'>
                Meet the Passionate Experts Behind Our Success and Learn More About Their Roles.
            </p>
            </div>
            <div className="mx-auto max-w-3xl px-8 lg:px-0">

                <div>
                    <h3 className="mb-6 text-lg font-medium">Members</h3>
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {members.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
