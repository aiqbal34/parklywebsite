"use client";

import AnimatedSection from "@/components/AnimatedSection";
import AnimatedElement from "@/components/AnimatedElement";
import { useState, useEffect, useRef } from "react";
// Updated for Parkly

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  // Video refs for autoplay on scroll
  const parkerVideoRef = useRef<HTMLVideoElement>(null);
  const peterVideoRef = useRef<HTMLVideoElement>(null);

  // Autoplay videos when they come into view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Play when 50% of video is visible
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play().catch((error) => {
            // Autoplay was prevented, which is fine
            console.log("Autoplay prevented:", error);
          });
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (parkerVideoRef.current) {
      observer.observe(parkerVideoRef.current);
    }
    if (peterVideoRef.current) {
      observer.observe(peterVideoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you! We'll send you a download link soon.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 z-[100] bg-black border-b border-gray-800 shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0">
              <img 
                src="/parkly_logo.png" 
                alt="Parkly Logo" 
                className="h-10 w-auto"
              />
              <div className="text-3xl font-bold text-white">Parkly</div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-white hover:text-blue-500 transition-colors">About Us</a>
              <a href="#demo" className="text-white hover:text-blue-500 transition-colors">Demo</a>
              <a href="#contact" className="text-white hover:text-blue-500 transition-colors">Contact</a>
            </div>
            <a href="#download" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
              Download App
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col gap-12">
          {/* Title and Content */}
          <AnimatedSection direction="up" className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Friendly Neighborhood Parking Spot!
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              An easier and cheaper alternative to parking while making some easy cash
            </p>
          </AnimatedSection>

          {/* Hero Video - Parker POV */}
          <AnimatedSection direction="up" delay={0.2} className="relative">
            <div className="bg-blue-950 rounded-3xl p-4 sm:p-8">
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-4xl">
                  <div className="bg-gray-900 rounded-3xl shadow-2xl p-2 sm:p-4 overflow-hidden">
                    <video
                      ref={parkerVideoRef}
                      src="/parker_pov.MOV"
                      controls
                      className="w-full h-auto max-h-[70vh] rounded-2xl object-contain"
                      playsInline
                      muted
                      loop
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Peter POV Video Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-black">
        <AnimatedSection direction="up" className="relative">
          <div className="bg-blue-950 rounded-3xl p-4 sm:p-8">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-4xl">
                <div className="bg-gray-900 rounded-3xl shadow-2xl p-2 sm:p-4 overflow-hidden">
                  <video
                    ref={peterVideoRef}
                    src="/peter_pov.MOV"
                    controls
                    className="w-full h-auto max-h-[70vh] rounded-2xl object-contain"
                    playsInline
                    muted
                    loop
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Demo Section */}
      <section id="demo" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-black">
        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedElement direction="pop" index={0} stagger={0.15}>
            <div className="group relative bg-gradient-to-br from-blue-950 to-blue-900 rounded-3xl p-1 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white text-center relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  Practical
                </h3>
                <div className="absolute bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="pop" index={1} stagger={0.15}>
            <div className="group relative bg-gradient-to-br from-blue-950 to-blue-900 rounded-3xl p-1 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white text-center relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  Convenient
                </h3>
                <div className="absolute bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="pop" index={2} stagger={0.15}>
            <div className="group relative bg-gradient-to-br from-blue-950 to-blue-900 rounded-3xl p-1 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white text-center relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  Efficient
                </h3>
                <div className="absolute bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Images Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-black">
        <AnimatedSection direction="up" className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <AnimatedElement direction="up" index={0} stagger={0.1}>
              <div className="bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/parkly_1.png"
                  alt="Parkly image 1"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedElement>
            <AnimatedElement direction="up" index={1} stagger={0.1}>
              <div className="bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/parkly_2.png"
                  alt="Parkly image 2"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedElement>
            <AnimatedElement direction="up" index={2} stagger={0.1}>
              <div className="bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/parkly_3.png"
                  alt="Parkly image 3"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedElement>
          </div>
        </AnimatedSection>
      </section>

      {/* About Us Section */}
      <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-black">
        <AnimatedSection direction="up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Us
          </h2>
        </AnimatedSection>
        <AnimatedSection direction="up">
          <div className="bg-gray-900 rounded-2xl p-8 lg:p-16">
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Growing up just 15 minutes away from Levi's Stadium, Sohaib, Azfar, and Aariz were huge 49ers fans. But attending games was always a hassle with hours of traffic followed by searching for extremely overpriced parking.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We knew there had to be a better way. We noticed the empty driveways of nearby neighbors and started thinking: what if there was a cheaper way to find parking while people nearby could earn some extra cash? It's a win-win situation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                From there, Parkly was born.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-black">
        <AnimatedSection direction="up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact
          </h2>
        </AnimatedSection>
        <AnimatedSection direction="up" className="text-center space-y-4">
          <p className="text-lg text-gray-300">
            <a href="tel:+14086596839" className="text-blue-500 hover:text-blue-400 transition-colors">
              (408) 659-6839
            </a>
          </p>
          <p className="text-lg text-gray-300">
            <a href="mailto:team@useparkly.com" className="text-blue-500 hover:text-blue-400 transition-colors">
              team@useparkly.com
            </a>
          </p>
        </AnimatedSection>
      </section>

      {/* Download Section */}
      <section id="download" className="bg-blue-500 py-16 lg:py-24">
        <AnimatedSection direction="up" className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Coming Soon
          </h2>
          <p className="text-lg md:text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Enter your email address and we'll send you a download link as soon as the app is ready!
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === "loading"}
                className="flex-1 px-4 py-3 rounded-lg border-2 border-white bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white w-full disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send"}
              </button>
            </div>
            {message && (
              <p
                className={`mt-4 text-center text-sm ${
                  status === "success" ? "text-green-200" : "text-red-200"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <AnimatedElement direction="up" index={0} stagger={0.1}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">UseparklyLLC</h3>
                <p className="text-gray-300 text-sm">
                  Useparkly LLC is a two-way marketplace connecting property owners and drivers. Owners can monetize their driveways and parking spaces, while drivers discover affordable and convenient parking solutions.
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement direction="up" index={1} stagger={0.1}>
              <div>
                <h4 className="font-semibold text-white mb-4">Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#about" className="text-gray-300 hover:text-blue-500 transition-colors">About Us</a></li>
                  <li><a href="#demo" className="text-gray-300 hover:text-blue-500 transition-colors">Demo</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-blue-500 transition-colors">Contact</a></li>
                </ul>
              </div>
            </AnimatedElement>
            <AnimatedElement direction="up" index={2} stagger={0.1}>
              <div>
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/terms-of-service" className="text-gray-300 hover:text-blue-500 transition-colors">Terms of Service</a></li>
                  <li><a href="/privacy-policy" className="text-gray-300 hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Become a Partner</a></li>
                </ul>
              </div>
            </AnimatedElement>
            <AnimatedElement direction="up" index={3} stagger={0.1}>
              <div>
                <h4 className="font-semibold text-white mb-4">Social</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://www.linkedin.com/company/useparkly/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors">LinkedIn</a></li>
                  <li><a href="https://www.instagram.com/use.parkly?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors">Instagram</a></li>
                  <li><a href="https://www.tiktok.com/@useparkly.com?_r=1&_t=ZT-92CxQ0iXIXv" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors">TikTok</a></li>
                </ul>
              </div>
            </AnimatedElement>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <AnimatedSection direction="fade" className="text-center text-sm text-gray-400">
              <p>
                <a href="/privacy-policy" className="hover:text-blue-500 transition-colors">Privacy Policy</a> |{" "}
                <a href="/terms-of-service" className="hover:text-blue-500 transition-colors">Terms of Service</a> |{" "}
                <a href="#" className="hover:text-blue-500 transition-colors">Cookies Policy</a>
              </p>
            </AnimatedSection>
          </div>
        </div>
      </footer>
    </div>
  );
}

