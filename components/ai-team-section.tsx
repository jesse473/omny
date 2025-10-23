"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, Clock, Zap } from "lucide-react"

const conversations = [
  {
    title: "Product Inquiry & DM Engagement",
    messages: [
      { text: "Hey! Love your latest post. Do you have this in stock?", sender: "customer", delay: 0 },
      {
        text: "Thanks so much! Yes, we have it in stock in all sizes. What color are you interested in?",
        sender: "ai",
        delay: 1000,
      },
      {
        text: "I'd love the black one. How much is shipping?",
        sender: "customer",
        delay: 2500,
      },
      {
        text: "Perfect! Black is our most popular. Shipping is free on orders over $50, and we deliver within 2-3 days.",
        sender: "ai",
        delay: 3500,
      },
      { text: "Great! I'll take it. How do I order?", sender: "customer", delay: 5000 },
      {
        text: "I've sent you a direct link to checkout. Use code INSTA15 for 15% off your first order!",
        sender: "ai",
        delay: 6000,
      },
    ],
  },
  {
    title: "Customer Support on Multiple Platforms",
    messages: [
      { text: "@YourBrand when will you restock the blue version?", sender: "customer", delay: 0 },
      {
        text: "Great question! Blue restocks next Tuesday. Want me to notify you when it's available?",
        sender: "ai",
        delay: 1000,
      },
      {
        text: "Yes please!",
        sender: "customer",
        delay: 2500,
      },
      {
        text: "Done! You'll get a notification the moment it drops. Thanks for your patience!",
        sender: "ai",
        delay: 3500,
      },
      { text: "Thanks! You're awesome", sender: "customer", delay: 5000 },
      {
        text: "Our pleasure! Follow us for exclusive early access to new drops 🎉",
        sender: "ai",
        delay: 6000,
      },
    ],
  },
  {
    title: "Community Building & Feedback",
    messages: [
      {
        text: "Just got my order! The quality is insane 🔥",
        sender: "customer",
        delay: 0,
      },
      {
        text: "That's amazing to hear! We'd love to feature your post. Can we share it?",
        sender: "ai",
        delay: 1000,
      },
      { text: "Tag me when you do", sender: "customer", delay: 2500 },
      {
        text: "Will do! Check your DMs for a special thank you gift code 💝",
        sender: "ai",
        delay: 3500,
      },
      {
        text: "Wow, you guys are incredible!",
        sender: "customer",
        delay: 5000,
      },
      {
        text: "You're the best! Thanks for being part of our community 🙌",
        sender: "ai",
        delay: 6000,
      },
    ],
  },
]

export function AITeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentConversation, setCurrentConversation] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<any[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("[v0] AI Team Section is now visible")
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

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [displayedMessages, isTyping])

  useEffect(() => {
    const conversation = conversations[currentConversation]
    setDisplayedMessages([])
    setIsTyping(false)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    let messageIndex = 0

    const showNextMessage = () => {
      if (messageIndex >= conversation.messages.length) {
        timeoutRef.current = setTimeout(() => {
          setCurrentConversation((prev) => (prev + 1) % conversations.length)
        }, 3000)
        return
      }

      const message = conversation.messages[messageIndex]

      timeoutRef.current = setTimeout(() => {
        if (message.sender === "ai") {
          setIsTyping(true)
          timeoutRef.current = setTimeout(() => {
            setDisplayedMessages((prev) => [...prev, message])
            setIsTyping(false)
            messageIndex++
            showNextMessage()
          }, 800)
        } else {
          setDisplayedMessages((prev) => [...prev, message])
          messageIndex++
          showNextMessage()
        }
      }, message.delay)
    }

    showNextMessage()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentConversation])

  return (
    <section id="ai-team" ref={sectionRef} className="relative z-10">
      <div className="bg-white rounded-b-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-48 px-4 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              AI Social Media Agent Demo
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              See AI Handle{" "}
              <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">
                Real Social Engagement
              </span>
            </h2>

            <p
              className={`text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Watch how our AI handles comments, DMs, and community engagement across all platforms 24/7.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* Left side - Text content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:h-[600px] space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div
                className={`transition-all duration-1000 delay-600 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-6">
                  This is what your audience sees
                </h3>

                <div className="space-y-3 lg:space-y-4 text-base lg:text-lg text-slate-700 leading-relaxed">
                  <p>
                    While you're sleeping, your AI agent is answering comments, responding to DMs, and building
                    community 24/7.
                  </p>

                  <p>
                    Every conversation you're watching could be happening at midnight, on weekends, or when you're
                    focused on creating content.
                  </p>

                  <p className="text-lg lg:text-xl font-semibold text-slate-900">
                    Your competitors are losing these engagement opportunities.
                  </p>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-800 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="p-4 lg:p-6 bg-slate-50 rounded-xl border-l-4 border-slate-900">
                  <p className="text-slate-800 font-medium text-sm lg:text-base">
                    "We went from missing 80% of comments to responding to every single one. Our engagement rate
                    increased 300% in the first month. We also scheduled a call with the OmnyAgent team to customize our
                    agent further."
                  </p>
                  <p className="text-xs lg:text-sm text-slate-600 mt-2">— Alex Chen, Content Creator</p>
                </div>

                <div className="mt-4 p-4 lg:p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
                  <p className="text-blue-900 font-medium text-sm lg:text-base">
                    Want to see OmnyAgent in action for your brand? Schedule a meeting with our team on{" "}
                    <a href="#" className="underline font-semibold hover:text-blue-700">
                      Calendly
                    </a>{" "}
                    or give us a call to discuss your social media goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Phone mockup */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="max-w-md w-full">
                <div
                  className={`relative transition-all duration-1000 delay-600 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-black rounded-[2rem] p-1">
                      <div className="bg-white rounded-[1.5rem] overflow-hidden">
                        {/* Status bar */}
                        <div className="bg-slate-50 px-6 py-3 flex justify-between items-center text-sm">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                            <span className="font-medium text-slate-700">OmnyAgent</span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-500">
                            <Clock className="w-3 h-3" />
                            <span className="text-xs">24/7</span>
                          </div>
                        </div>

                        <div className="bg-slate-900 px-6 py-4 text-white">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                              OA
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-sm">OmnyAgent</h3>
                              <p className="text-xs text-slate-300">Always online</p>
                            </div>
                            <div className="text-xs text-green-400 flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              Online
                            </div>
                          </div>
                        </div>

                        {/* Chat messages */}
                        <div
                          ref={chatContainerRef}
                          className="h-96 overflow-y-scroll scrollbar-hide p-4 space-y-3 bg-slate-50"
                          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                          {displayedMessages.map((message, index) => (
                            <div
                              key={index}
                              className={`flex ${message.sender === "customer" ? "justify-end" : "justify-start"}`}
                            >
                              {message.sender === "ai" && (
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mr-2 mt-1 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                                  OA
                                </div>
                              )}
                              <div
                                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                                  message.sender === "customer"
                                    ? "bg-slate-900 text-white rounded-br-md"
                                    : "bg-white text-slate-800 shadow-sm border border-slate-200 rounded-bl-md"
                                }`}
                              >
                                {message.text.split("\n").map((line, i) => (
                                  <div key={i}>{line}</div>
                                ))}
                              </div>
                              {message.sender === "customer" && (
                                <div className="w-6 h-6 rounded-full bg-slate-400 ml-2 mt-1 flex-shrink-0 flex items-center justify-center text-xs text-white font-medium">
                                  C
                                </div>
                              )}
                            </div>
                          ))}

                          {/* Typing indicator */}
                          {isTyping && (
                            <div className="flex justify-start items-start">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mr-2 mt-1 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                                OA
                              </div>
                              <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border border-slate-200">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                  <div
                                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.1s" }}
                                  ></div>
                                  <div
                                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="p-4 bg-white border-t border-slate-200">
                          <div className="flex items-center gap-3 bg-slate-100 rounded-full px-4 py-2">
                            <span className="text-slate-500 text-sm lg:text-base flex-1">
                              OmnyAgent is responding...
                            </span>
                            <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                              <Zap className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
