"use client";

import AnimatedSection from "@/components/AnimatedSection";
import AnimatedElement from "@/components/AnimatedElement";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-[100] bg-white border-b border-gray-200 shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-black">Verbalizelt</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#service" className="text-black hover:text-yellow-500 transition-colors">Service</a>
              <a href="#blog" className="text-black hover:text-yellow-500 transition-colors">Blog</a>
              <a href="#about" className="text-black hover:text-yellow-500 transition-colors">About Us</a>
              <a href="#contact" className="text-black hover:text-yellow-500 transition-colors">Contact</a>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition-colors">
              Register
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col gap-12">
          {/* Title and Content */}
          <AnimatedSection direction="up" className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              We make you learn language easily!
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We help you learn language easily, with small lessons, you'll earn points and unlock new levels while improving your real world communications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors whitespace-nowrap">
                Get Started
              </button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <span className="text-sm text-gray-600">Students Enroll</span>
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 border-2 border-white"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-semibold">
                  2m
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Phone Mockups */}
          <AnimatedSection direction="up" delay={0.2} className="relative">
            <div className="bg-yellow-50 rounded-3xl p-8 space-y-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                {/* Left Phone */}
                <div className="relative">
                  <div className="bg-white rounded-3xl shadow-2xl p-4 max-w-xs mx-auto">
                    <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-4xl">👩</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-800">Learn a new language with a native speaker!</p>
                        <p className="text-xs text-gray-600">We help you learn language easily with small lessons and unlock new levels while improving</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Phone */}
                <div className="relative">
                  <div className="bg-white rounded-3xl shadow-2xl p-4 max-w-xs mx-auto">
                    <div className="bg-gray-50 rounded-2xl h-96 p-4 space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-xs font-semibold">9:27</div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-500"></div>
                          <span className="text-xs font-semibold">Hello Marrie</span>
                        </div>
                        <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      </div>
                      <div className="bg-yellow-400 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold mb-2">75%</div>
                        <p className="text-xs font-semibold">Good result! Your Singapore has been improved.</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold">Your Lesson</p>
                        <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs">📖</div>
                          <div className="flex-1">
                            <p className="text-xs font-semibold">Reading</p>
                            <p className="text-xs text-gray-500">Your completed 34%</p>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs">🎤</div>
                          <div className="flex-1">
                            <p className="text-xs font-semibold">Speaking</p>
                            <p className="text-xs text-gray-500">Your completed 54%</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 mt-4">
                        <p className="text-xs font-semibold">Native Speakers</p>
                        <div className="bg-white rounded-lg p-2 space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500"></div>
                            <div className="flex-1">
                              <p className="text-xs font-semibold">Emilia Schmidt</p>
                              <p className="text-xs text-gray-500">Paris France</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500"></div>
                            <div className="flex-1">
                              <p className="text-xs font-semibold">Pierre Duory</p>
                              <p className="text-xs text-gray-500">Native French speaker</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <AnimatedElement direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why you'll love learning with Verbalizelt
            </h2>
          </AnimatedElement>
          <AnimatedElement direction="left">
            <p className="text-lg text-gray-700">
              Reach your goals your way with features designed for the fastest, most fun way to learn a language.
            </p>
          </AnimatedElement>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedElement direction="up" index={0} stagger={0.2}>
            <div className="bg-yellow-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Make progress Quickly</h3>
              <p className="text-gray-700 mb-6">
                Combining the best of all and language science, lessons are tailored to help you learn at just the right level and place.
              </p>
              <div className="bg-white rounded-xl p-4 h-64 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-40 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-4xl">👩</span>
                  </div>
                  <p className="text-sm font-semibold">Learn a new</p>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="up" index={1} stagger={0.2}>
            <div className="bg-yellow-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Personalized Learning</h3>
              <p className="text-gray-700 mb-6">
                Research shows our courses effectively and efficiently teach reading, listening and speaking skills.
              </p>
              <div className="bg-white rounded-xl p-4 h-64 flex items-center justify-center">
                <div className="w-full space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500"></div>
                    <span className="text-sm font-semibold">Hello Marrie</span>
                  </div>
                  <div className="bg-yellow-400 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold">75%</div>
                    <p className="text-xs">Good result!</p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-100 rounded p-2 flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                      <span className="text-xs">Reading</span>
                    </div>
                    <div className="bg-gray-100 rounded p-2 flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded"></div>
                      <span className="text-xs">Speaking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* World Map Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <AnimatedSection direction="fade" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Learn a new language the fun way
          </h2>
          <p className="text-lg text-gray-700">
            Reach your language goals fast with the world's #1 education app.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" className="mb-16">
          <div className="bg-gray-100 rounded-2xl p-8 lg:p-16 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <p className="text-gray-600">World Map Placeholder</p>
              <p className="text-sm text-gray-500 mt-2">Interactive map showing global reach</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedElement direction="up" index={0} stagger={0.2}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <Counter end={4500} suffix="+" />
              </div>
              <p className="text-gray-700">Daily register from new users</p>
            </div>
          </AnimatedElement>
          <AnimatedElement direction="up" index={1} stagger={0.2}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <Counter end={1500} suffix="+" />
              </div>
              <p className="text-gray-700">Language In the world</p>
            </div>
          </AnimatedElement>
          <AnimatedElement direction="up" index={2} stagger={0.2}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <Counter end={1000} suffix="+" />
              </div>
              <p className="text-gray-700">Total learners in the world</p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-yellow-400 py-16 lg:py-24">
        <AnimatedSection direction="up" className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            Learn a new language for free download app Now!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="text-2xl">🍎</div>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </div>
            <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="text-2xl">▶</div>
              <div className="text-left">
                <div className="text-xs">Disponible sur</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <AnimatedElement direction="up" index={0} stagger={0.1}>
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Verbalizelt</h3>
                <p className="text-gray-600 text-sm">
                  Learning is a global training provider based across the UK that specialises in accredited and bespoke training course.
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement direction="up" index={1} stagger={0.1}>
              <div>
                <h4 className="font-semibold text-black mb-4">Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">Service</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">Blog</a></li>
                </ul>
              </div>
            </AnimatedElement>
            <AnimatedElement direction="up" index={2} stagger={0.1}>
              <div>
                <h4 className="font-semibold text-black mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">Terms & Conditions</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">Become a Partner</a></li>
                </ul>
              </div>
            </AnimatedElement>
            <AnimatedElement direction="up" index={3} stagger={0.1}>
              <div>
                <h4 className="font-semibold text-black mb-4">Social</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">Twitter</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">Facebook</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">Instagram</a></li>
                </ul>
              </div>
            </AnimatedElement>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <AnimatedSection direction="fade" className="text-center text-sm text-gray-600">
              <p>Privacy Policy | Terms & Conditions | Cookies Policy</p>
            </AnimatedSection>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Counter component for animated numbers
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}
