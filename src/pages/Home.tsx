import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, BookOpen, Building, Star, Briefcase, School, GraduationCap, Clock, CheckCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeTab, setActiveTab] = useState('colleges');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Partner logos array
  const partners = [
    { name: "Google", url: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80" },
    { name: "Microsoft", url: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80" },
    { name: "Apple", url: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80" },
    { name: "Amazon", url: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80" },
    { name: "Meta", url: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80" },
    { name: "IBM", url: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80" },
    { name: "Intel", url: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80" },
    { name: "Oracle", url: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80" }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (partners.length * 2));
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

  // Double the partners array for seamless loop
  const displayPartners = [...partners, ...partners];
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      quote: "Aignite helped me land my dream internship at a tech startup. The real-world experience was invaluable!"
    },
    {
      name: "Prof. Michael Chen",
      role: "University Educator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      quote: "This platform has transformed how we connect our students with industry projects. The results are outstanding!"
    },
    {
      name: "David Smith",
      role: "Tech Company CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      quote: "We've found amazing talent through Aignite. It's our go-to platform for student collaboration."
    }
  ];

  const faqs = [
    {
      question: "What is the Aignite experiential learning platform?",
      answer: "Aignite is a comprehensive online platform that connects students, educators, and employers through real-world project experiences. Our platform facilitates meaningful collaborations between educational institutions and industry partners, enabling students to work on actual business challenges while earning academic credit. This creates a win-win situation where students gain practical experience and employers benefit from fresh perspectives and innovative solutions."
    },
    {
      question: "What are the benefits of using an experiential learning platform?",
      answer: "Experiential learning platforms offer numerous benefits: students gain real-world experience and build their professional networks; educators can enhance their curriculum with practical projects; and employers can access fresh talent and perspectives. The platform streamlines the entire process of project-based learning, from matching to assessment, making it easier for all parties to participate in meaningful educational experiences."
    },
    {
      question: "What makes Aignite the #1 experiential learning platform?",
      answer: "Aignite stands out through its extensive network of 680+ partners, sophisticated matching algorithm, and comprehensive support system. Our platform has facilitated over 13.3M+ hours of applied learning, connecting students with real industry projects that align with their academic goals. We provide end-to-end project management tools, assessment frameworks, and dedicated support to ensure successful outcomes for all participants."
    }
  ];

  const opportunities = [
    {
      title: "Workforce Development Programs",
      description: "Partner with workforce development providers to create equitable career-advancing opportunities.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      path: "/workforce-development"
    },
    {
      title: "Work-Based Learning Programs",
      description: "Authentic learning experiences structured to empower students through employer-designed projects.",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      path: "/work-based-learning"
    },
    {
      title: "Project-Based Internships",
      description: "Connect educators and employers to integrate real projects into course curriculum.",
      image: "https://images.unsplash.com/photo-1560976812-c6f9f44aa2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      path: "/project-internships"
    }
  ];

  const tabContent = {
    colleges: {
      title: "For colleges & universities",
      description: "Find experiential learning projects to integrate into your curriculum, helping students gain real-world experience and improve employability outcomes.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      benefits: [
        "Drive student engagement through real work projects",
        "Save time on finding relevant employers",
        "Strengthen the reputation of your institution",
        "Enhance course content and curriculum with real-world experiences"
      ],
      primaryButton: {
        text: "Sign up",
        link: "/signup"
      },
      secondaryButton: {
        text: "Learn more",
        link: "/colleges"
      }
    },
    businesses: {
      title: "For organizations & business leaders",
      description: "Grow your business with access to a forward-thinking student talent pool to get your projects done - all at no cost to you. All while helping shape the future of work.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      benefits: [
        "Get your projects done",
        "Shape the future of business and future business leaders",
        "Discover and recruit rising talent",
        "Cultivate innovation in the workspace"
      ],
      primaryButton: {
        text: "Sign up",
        link: "/signup"
      },
      secondaryButton: {
        text: "Learn more",
        link: "/businesses"
      }
    },
    students: {
      title: "For learners",
      description: "Gain employable skills and apply what you have learned by adding real value to organizations in a variety of industries. Put yourself on a fast track to a thriving career upon graduation.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      benefits: [
        "Learn by doing",
        "Develop employable skills and a professional network",
        "Add real value to employers",
        "Make a positive impact"
      ],
      primaryButton: {
        text: "Sign up",
        link: "/signup"
      },
      secondaryButton: {
        text: "Learn more",
        link: "/learners"
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connect Students with Real-World Opportunities
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Bridge the gap between education and industry with meaningful project-based learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/explore"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center"
            >
              Explore Opportunities <ArrowRight className="ml-2" />
            </Link>
            <Link
              to="/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Employer Projects */}
            <div className="text-center group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-300">
                <Briefcase className="h-8 w-8 text-blue-400" />
              </div>
              <div className="font-bold text-4xl md:text-5xl mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                40K+
              </div>
              <p className="text-gray-300 font-medium">
                Employer projects
              </p>
            </div>

            {/* Educational Institutions */}
            <div className="text-center group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-300">
                <School className="h-8 w-8 text-blue-400" />
              </div>
              <div className="font-bold text-4xl md:text-5xl mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                640+
              </div>
              <p className="text-gray-300 font-medium">
                Educational institutions and training providers
              </p>
            </div>

            {/* Learner Experiences */}
            <div className="text-center group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-300">
                <GraduationCap className="h-8 w-8 text-blue-400" />
              </div>
              <div className="font-bold text-4xl md:text-5xl mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                217K+
              </div>
              <p className="text-gray-300 font-medium">
                Learner experiences
              </p>
            </div>

            {/* Applied Learning Hours */}
            <div className="text-center group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-300">
                <Clock className="h-8 w-8 text-blue-400" />
              </div>
              <div className="font-bold text-4xl md:text-5xl mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                13.3M+
              </div>
              <p className="text-gray-300 font-medium">
                Hours of applied learning
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed Section */}
      <div className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Bridging education to employment</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Aignite is a work-based learning platform helping educators, organizations, and learners collaborate on real industry projects to bridge the gap between education and employment.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries({
              colleges: "Colleges & Universities",
              businesses: "Businesses & Nonprofits",
              students: "Students & Learners"
            }).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? "bg-white text-blue-900"
                    : "bg-blue-800/50 text-white hover:bg-blue-800"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <img
                src={tabContent[activeTab].image}
                alt={tabContent[activeTab].title}
                className="relative rounded-lg shadow-xl w-full h-[400px] object-cover transform group-hover:-rotate-3 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4">{tabContent[activeTab].title}</h3>
              <p className="text-blue-100 mb-8">{tabContent[activeTab].description}</p>
              
              <div className="space-y-4 mb-8">
                {tabContent[activeTab].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0 mt-1" />
                    <p className="text-blue-100">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to={tabContent[activeTab].primaryButton.link}
                  className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors duration-300"
                >
                  {tabContent[activeTab].primaryButton.text}
                </Link>
                <Link
                  to={tabContent[activeTab].secondaryButton.link}
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors duration-300"
                >
                  {tabContent[activeTab].secondaryButton.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by 680+ partners</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Logo Carousel */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-linear"
              style={{
                transform: `translateX(-${scrollPosition * (200 + 32)}px)`,
                width: `${displayPartners.length * (200 + 32)}px`
              }}
            >
              {displayPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-[200px] h-20 mx-4 rounded-lg bg-white shadow-md p-4 flex items-center justify-center group transition-all duration-300 hover:shadow-lg"
                >
                  <img
                    src={partner.url}
                    alt={`${partner.name} logo`}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Who We Serve</h2>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-12">
            We are revolutionizing the world of work by connecting people with limitless opportunities. From talent acquisition and management to powerful talent insights, our all-in-one AI-driven platform streamlines every step of the journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="group">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <Link
                  to={opportunity.path}
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Aignite Section */}
      <div className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-8">Why Aignite</h2>
              <div className="space-y-6">
                <div className="border-b border-blue-700 pb-6">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'intelligence' ? null : 'intelligence')}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-xl font-semibold">Best-in-class intelligence and talent insights</h3>
                    <ChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${
                      activeDropdown === 'intelligence' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  <div className={`mt-4 transition-all duration-300 ${
                    activeDropdown === 'intelligence' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <p className="text-blue-100">
                      Powered by deep-learning AI, we surface insights when and where you need them most →
                    </p>
                  </div>
                </div>

                <div className="border-b border-blue-700 pb-6">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'technology' ? null : 'technology')}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-xl font-semibold">Unparalleled AI technology</h3>
                    <ChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${
                      activeDropdown === 'technology' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  <div className={`mt-4 transition-all duration-300 ${
                    activeDropdown === 'technology' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <p className="text-blue-100">
                      We harness the data of 1B+ career trajectories and 1M+ skills worldwide to give a truly global view of talent and skills insights. Learn more about responsible AI in HR →
                    </p>
                  </div>
                </div>

                <div className="border-b border-blue-700 pb-6">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-xl font-semibold">Products designed for greatness</h3>
                    <ChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${
                      activeDropdown === 'products' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  <div className={`mt-4 transition-all duration-300 ${
                    activeDropdown === 'products' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <p className="text-blue-100">
                      Our Talent Intelligence Platform is easy to use, insightful, and delivers fast results →
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
                className="relative rounded-lg shadow-xl w-full h-[500px] object-cover transform group-hover:-rotate-3 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    activeFaq === index
                      ? 'max-h-96 pb-6 opacity-100'
                      : 'max-h-0 overflow-hidden opacity-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}