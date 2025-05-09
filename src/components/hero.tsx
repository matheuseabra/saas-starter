import { Star, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="py-12 sm:py-28 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <div className="space-y-4 flex flex-col items-center">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-loose">
                Build and Launch Your SaaS <br />
                <span className="text-blue-500 italic">in Days, Not Weeks</span>
              </h1>
              <p className="max-w-xl text-base sm:text-lg text-gray-600">
                The Next.js boilerplate packed with everything you need to
                create your SaaS, AI tool, or web app—and start earning online,
                fast.
              </p>
              <div className="flex flex-col items-center mt-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <span className="mt-2 text-sm text-gray-500">
                  Trusted by 5000+ makers and founders
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-none">
            <Link href="/sign-up">
              <Button
                size="lg"
                className="text-base sm:text-lg rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 hover:bg-blue-600 cursor-pointer w-full sm:w-auto"
              >
                <Zap className="h-5 w-5" />
                Get SaaSify
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
