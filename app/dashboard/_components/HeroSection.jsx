'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative overflow-hidden bg-background pt-[120px] pb-20 lg:pb-32">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-sky-500/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        {/* Badge */}
        <div className={`inline-flex items-center px-4 py-2 mb-8 border rounded-full bg-secondary/50 border-border backdrop-blur-sm transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Sparkles className="w-4 h-4 mr-2 text-primary" />
          <span className="text-sm font-medium text-secondary-foreground">The #1 Prepmate-ai Platform</span>
        </div>

        {/* Heading */}
        <h1 className={`max-w-4xl mx-auto mb-6 text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Master Your Next <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            Tech Interview
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`max-w-2xl mx-auto mb-10 text-xl text-muted-foreground md:text-2xl transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Practice widely used questions with real-time AI feedback.
          Boost your confidence and land your dream job.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link href="/dashboard" className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium text-primary-foreground transition-all bg-primary rounded-full hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/25">
            Start Interview Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <Link href="#how-it-works" className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium transition-all bg-transparent border border-input rounded-full hover:bg-secondary/50 hover:text-foreground">
            How It Works
          </Link>
        </div>

        {/* Stats/Social Proof (Optional placeholder for now) */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-10 border-t border-border/50 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-foreground">10k+</span>
            <span className="text-sm text-muted-foreground">Interviews Practiced</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-foreground">500+</span>
            <span className="text-sm text-muted-foreground">Questions</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-foreground">95%</span>
            <span className="text-sm text-muted-foreground">Success Rate</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-foreground">24/7</span>
            <span className="text-sm text-muted-foreground">AI Availability</span>
          </div>
        </div>
      </div>
    </div>
  )
}