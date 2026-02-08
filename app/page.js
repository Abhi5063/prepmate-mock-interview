'use client'
import { Button } from "@/components/ui/button"
import HeroSection from "./dashboard/_components/HeroSection"
import { Atom, Edit, Share2, Video, Sparkles, UserCheck } from "lucide-react"

export default function Home() {
  const features = [
    {
      icon: <Video className="w-10 h-10 text-primary mb-4" />,
      title: "AI Audio & Video Interview",
      description: "Experience realistic interviews with our advanced audio and video capabilities.",
    },
    {
      icon: <Edit className="w-10 h-10 text-primary mb-4" />,
      title: "Real-time Feedback",
      description: "Get instant, constructive feedback on your answers to improve continuously.",
    },
    {
      icon: <Share2 className="w-10 h-10 text-primary mb-4" />,
      title: "Share & Collaborate",
      description: "Easily share your interview recordings and feedback with mentors or peers.",
    },
    {
      icon: <Atom className="w-10 h-10 text-primary mb-4" />,
      title: "Automated Question Generation",
      description: "Face a unique set of questions every time, tailored to your job role.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Paste Job Description",
      description: "Simply paste the job role and description you're applying for.",
    },
    {
      step: "02",
      title: "AI Generates Questions",
      description: "Our AI creates tailored questions based on your input and industry standards.",
    },
    {
      step: "03",
      title: "Start Mock Interview",
      description: "Answer via webcam and microphone for a realistic experience.",
    },
    {
      step: "04",
      title: "Get Detailed Report",
      description: "Receive a comprehensive performance analysis and improvement tips.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navbar Placeholder - assuming layout handles it, or just a simple header */}
      <nav className="flex items-center justify-between p-6 border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="flex items-center gap-2 font-bold text-2xl text-primary">
          <Sparkles className="w-6 h-6" />
          Prepmate-ai
        </div>
        <div className="flex items-center gap-4">
          <a href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">Dashboard</a>
          <a href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How it Works</a>
          <a href="/dashboard" className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors">
            Get Started
          </a>
        </div>
      </nav>

      <HeroSection />

      {/* Featured Section */}
      <section className="py-24 bg-secondary/30" id="features">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Why Choose Our Prepmate-ai?
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide a comprehensive platform to help you prepare effectively for your dream job.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border/50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-background" id="how-it-works">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in minutes and revolutionize your interview preparation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-border -z-10 -translate-y-[60%]"></div>

            {howItWorks.map((item, index) => (
              <div key={index} className="relative p-6 bg-card border border-border rounded-xl text-center z-10 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/30">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to Ace Your Interview?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Join thousands of candidates who are already improving their interview skills with our AI.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium text-primary bg-background rounded-full hover:bg-background/90 transition-all shadow-xl"
          >
            Start Your Free Mock Interview
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/50 border-t border-border">
        <div className="container px-4 mx-auto md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 font-bold text-xl text-foreground mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              Prepmate-ai
            </div>
            <p className="text-muted-foreground max-w-xs">
              Empowering job seekers with advanced AI technology to master technical and behavioral interviews.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase tracking-wider">Resources</h2>
              <ul className="text-muted-foreground font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-primary">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-primary">Success Stories</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase tracking-wider">Follow us</h2>
              <ul className="text-muted-foreground font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-primary">Github</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-primary">Twitter</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase tracking-wider">Legal</h2>
              <ul className="text-muted-foreground font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-primary">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-primary">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto mt-12 pt-8 border-t border-border/50 flex items-center justify-between text-muted-foreground text-sm">
          <span>© 2024 Prepmate-ai. All Rights Reserved.</span>
          <div className="flex space-x-6 sm:justify-center sm:mt-0">
            {/* Social icons could go here */}
          </div>
        </div>
      </footer>
    </div>
  );
}