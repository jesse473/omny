"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const AlertTriangle = () => (
  <svg className="h-6 w-6 text-red-400s" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.186-.833-2.956 0L3.858 16.5c-.77.833.192 2.5 1.732 2.5z"
    />
  </svg>
)

const CheckCircle = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            The Brand Challenge
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            While you're creating content, your audience is waiting for responses. <br /> Here's how we fix it.
          </p>
        </div>

        {/* Main Problem/Solution Cards */}
        <div
          className={`grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Problem Card */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:bg-white/10 transition-all duration-500 hover:border-red-400/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg sbg-red-500/20">
                  <AlertTriangle />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">The Reality</h3>
              </div>

              {/* Key Stat */}
              <div className="rounded-xl py-2 sm:py-4 mb-6">
                <div className="text-3xl sm:text-4xl font-bold mb-2">Hours to Days</div>
                <p className="text-white/80 text-sm sm:text-base">
                  Average response time, but 65% of users expect replies within minutes
                </p>
              </div>

              {/* Problem Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70 text-sm sm:text-base">
                    Comments pile up across X, Instagram, Facebook, Reddit, and Telegram
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70 text-sm sm:text-base">
                    Manual responses are slow, inconsistent, and drain your team's time
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70 text-sm sm:text-base">
                    Engagement drops, followers feel ignored, brand reputation suffers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:bg-white/10 transition-all duration-500 hover:border-green-400/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg">
                  <CheckCircle />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">OmnyAgent Solution</h3>
              </div>

              {/* Key Stat */}
              <div className="rounded-xl py-2 sm:py-4 mb-6">
                <div className="text-3xl sm:text-4xl font-bold mb-2">Instant Replies</div>
                <p className="text-white/80 text-sm sm:text-base">
                  AI responds within seconds, 24/7 across all platforms simultaneously
                </p>
              </div>

              {/* Solution Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm sm:text-base">
                    One agent manages X, Instagram, Facebook, Reddit, Telegram and more
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm sm:text-base">
                    Responds in your brand voice, learns from your content and values
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-white/70 text-sm sm:text-base">
                    Escalates complex issues to your team, handles routine engagement automatically
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center rounded-2xl p-6 sm:p-8 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 text-balance">
            Never Miss a Comment Again
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Set up your AI agent and start capturing every engagement opportunity your brand has been missing.
          </p>
          <Button
            size="lg"
            className="bg-white text-black rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg group cursor-pointer"
          >
            Get Started
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
