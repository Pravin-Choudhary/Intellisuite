import Silk from "./Silk";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";


export default function CTA() {
  return (
    <>
       <div className="flex justify-center">
        {/* <Card className="bg-muted/90 max-w-5xl w-full"> */}
          <Silk
  speed={5}
  scale={1}
  color="#7B7481"
  noiseIntensity={1.5}
  rotation={0}
/>
        <section className="py-16">
            <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Start Building</h2>
                    <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                                <span>Get Started</span>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                                <span>Book Demo</span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
     
       </div>
    </>
  )
}
