import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  const services = [
    {
      id: 'social-media',
      title: 'SOCIAL MEDIA MARKETING',
      description: 'WE HELP BRANDS GROW AND ENGAGE WITH THEIR AUDIENCE ON SOCIAL MEDIA PLATFORMS. OUR TEAM CREATES AND MANAGES CONTENT TO ENSURE MAXIMUM REACH AND ENGAGEMENT',
      offerings: [
        {
          title: 'SOCIAL MEDIA MANAGEMENT',
          details: 'DAILY POSTS, COMMUNITY ENGAGEMENT, AND TREND-BASED CONTENT.'
        },
        {
          title: 'CONTENT CREATION',
          details: 'CUSTOM GRAPHICS, MEMES, VIRAL REELS, AND TIKTOK TRENDS.'
        },
        {
          title: 'PAID ADVERTISING',
          details: 'FACEBOOK, INSTAGRAM, AND TIKTOK ADS FOR LEAD GENERATION AND SALES.'
        },
        {
          title: 'INFLUENCER MARKETING & COLLABORATIONS',
          details: 'CONNECT BRANDS WITH TOP ZAMBIAN INFLUENCERS FOR PROMOTIONS.'
        }
      ]
    },
    {
      id: 'brand-strategy',
      title: 'BRAND STRATEGY & IDENTITY',
      description: 'YOUR BRAND\'S IDENTITY IS WHAT SETS YOU APART. WE CREATE STRONG, RECOGNIZABLE BRANDS THAT LEAVE A LASTING IMPRESSION.',
      offerings: [
        {
          title: 'LOGO & BRANDING DESIGN',
          details: 'CUSTOM LOGOS, BRAND GUIDELINES, AND COLOR PALETTES.'
        },
        {
          title: 'BRAND POSITIONING & MESSAGING',
          details: 'CRAFTING A UNIQUE VOICE THAT CONNECTS WITH CUSTOMERS.'
        },
        {
          title: 'PERSONAL BRANDING FOR INFLUENCERS & CEOS',
          details: 'STRATEGIES FOR BUILDING A PERSONAL BRAND ONLINE.'
        },
        {
          title: 'REBRANDING & SOCIAL MEDIA REVAMPS',
          details: 'TRANSFORM OUTDATED BRANDS INTO MODERN, ENGAGING ONES.'
        }
      ]
    },
    {
      id: 'content-production',
      title: 'CONTENT PRODUCTION',
      description: 'QUALITY CONTENT IS KING. WE PRODUCE HIGH-QUALITY VIDEOS, GRAPHICS, AND PHOTOS THAT MAKE BRANDS STAND OUT.',
      offerings: [
        {
          title: 'VIDEO ADS & PROMO SHOOTS',
          details: 'PROFESSIONAL COMMERCIALS AND SOCIAL MEDIA PROMOS.'
        },
        {
          title: 'HIGH-QUALITY PHOTOGRAPHY',
          details: 'PRODUCT SHOOTS, EVENTS, AND PERSONAL BRANDING IMAGES.'
        },
        {
          title: 'PODCAST & TALK SHOW PRODUCTION',
          details: 'SETUP, EDITING, BRANDING FOR HIGH-QUALITY PODCAST CONTENT.'
        },
        {
          title: 'CORPORATE & SOCIAL MEDIA VIDEOS',
          details: 'ENGAGING VIDEOS FOR BUSINESSES AND BRANDS.'
        }
      ]
    },
    {
      id: 'event-marketing',
      title: 'EVENT MARKETING & PUBLICITY',
      description: 'WE CREATE BUZZ AROUND EVENTS, ENSURING MAXIMUM ATTENDANCE AND MEDIA COVERAGE.',
      offerings: [
        {
          title: 'DIGITAL PROMOTIONS FOR EVENTS & PRODUCT LAUNCHES',
          details: 'BUILD HYPE WITH ENGAGING ONLINE CAMPAIGNS.'
        },
        {
          title: 'LIVE EVENT COVERAGE',
          details: 'PHOTOGRAPHY, VIDEOGRAPHY, AND LIVE SOCIAL MEDIA UPDATES.'
        },
        {
          title: 'INFLUENCER & MEDIA PARTNERSHIPS',
          details: 'LEVERAGE INFLUENCERS TO PROMOTE YOUR EVENT.'
        },
        {
          title: 'TICKET SALES & RSVP MANAGEMENT',
          details: 'STREAMLINED TICKETING SOLUTIONS FOR EVENTS.'
        }
      ]
    },
    {
      id: 'celebrity-influencer',
      title: 'CELEBRITY & INFLUENCER MARKETING',
      description: 'WE CONNECT BRANDS WITH THE RIGHT INFLUENCERS AND CELEBRITIES TO MAXIMIZE EXPOSURE.',
      offerings: [
        {
          title: 'TALENT MANAGEMENT & PR',
          details: 'HELPING INFLUENCERS AND CELEBRITIES MANAGE THEIR IMAGE.'
        },
        {
          title: 'SOCIAL MEDIA GROWTH',
          details: 'PERSONALIZED PLANS TO GAIN FOLLOWERS AND ENGAGEMENT.'
        },
        {
          title: 'BOOKING & BRAND ENDORSEMENT DEALS',
          details: 'GET BRANDS AND BUSINESSES TO COLLABORATE WITH INFLUENCERS.'
        },
        {
          title: 'VIRAL MARKETING CAMPAIGNS',
          details: 'CREATING TRENDS AND VIRAL MOMENTS FOR BRANDS.'
        }
      ]
    },
    {
      id: 'consultation',
      title: 'MARKETING CONSULTATION & TRAINING',
      description: 'WE CONNECT BRANDS WITH THE RIGHT INFLUENCERS AND CELEBRITIES TO MAXIMIZE EXPOSURE.',
      offerings: [
        {
          title: 'ONE-ON-ONE DIGITAL STRATEGY CONSULTATIONS',
          details: 'PERSONALIZED BUSINESS GROWTH STRATEGIES.'
        },
        {
          title: 'BUSINESS GROWTH COACHING',
          details: 'LEARN HOW TO BUILD A BRAND AND MARKET EFFECTIVELY.'
        },
        {
          title: 'SOCIAL MEDIA MARKETING TRAINING',
          details: 'TEACHING BUSINESSES HOW TO HANDLE THEIR DIGITAL MARKETING.'
        }
      ]
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
      {/* Header */}
      <header className="bg-black bg-opacity-40 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-3xl">PLUGG<span className="text-purple-400">MARKETING</span></div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><button onClick={() => setActiveTab('home')} className={`text-white ${activeTab === 'home' ? 'font-bold border-b-2 border-purple-400' : 'hover:text-purple-300'}`}>Home</button></li>
                <li><button onClick={() => setActiveTab('services')} className={`text-white ${activeTab === 'services' ? 'font-bold border-b-2 border-purple-400' : 'hover:text-purple-300'}`}>Services</button></li>
                <li><button onClick={() => setActiveTab('about')} className={`text-white ${activeTab === 'about' ? 'font-bold border-b-2 border-purple-400' : 'hover:text-purple-300'}`}>About</button></li>
                <li><button onClick={() => setActiveTab('contact')} className={`text-white ${activeTab === 'contact' ? 'font-bold border-b-2 border-purple-400' : 'hover:text-purple-300'}`}>Contact</button></li>
              </ul>
            </nav>
            <button className="md:hidden text-white text-2xl">
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {activeTab === 'home' && (
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">PLUGG MARKETING</h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-10">DIGITAL SERVICES CATALOG</p>
            <button onClick={() => setActiveTab('services')} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Explore Our Services
            </button>
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeTab === 'services' && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">OUR SERVICES</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-lg transition duration-300 transform hover:scale-105">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-purple-200 text-sm mb-4">{service.description}</p>
                    <h4 className="text-purple-300 font-semibold mt-4 mb-2">SERVICES:</h4>
                    <ul className="space-y-2">
                      {service.offerings.map((offering, index) => (
                        <li key={index} className="text-white">
                          <span className="font-semibold">{offering.title}</span> –
                          <span className="text-purple-200 text-sm"> {offering.details}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeTab === 'about' && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">ABOUT PLUGG MARKETING</h2>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <p className="text-purple-200 mb-6">
                PLUGG MARKETING is a premier digital marketing agency specializing in social media marketing, 
                brand strategy, content production, and influencer marketing. We help brands connect with their 
                audience and maximize their digital presence.
              </p>
              <p className="text-purple-200 mb-6">
                Our team of creative professionals works tirelessly to ensure that your brand stands out 
                in today's competitive digital landscape. We combine strategic thinking with creative execution 
                to deliver results that exceed expectations.
              </p>
              <p className="text-purple-200">
                Whether you're looking to build your brand from the ground up or enhance your existing digital 
                presence, PLUGG MARKETING has the expertise and experience to help you succeed.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeTab === 'contact' && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">GET IN TOUCH</h2>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-purple-200 mb-2" htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 bg-purple-900 bg-opacity-50 rounded-md border border-purple-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 mb-2" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 bg-purple-900 bg-opacity-50 rounded-md border border-purple-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 bg-purple-900 bg-opacity-50 rounded-md border border-purple-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-black bg-opacity-40 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white font-bold text-xl mb-4 md:mb-0">PLUGG<span className="text-purple-400">MARKETING</span></div>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-purple-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-purple-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-800 text-center">
            <p className="text-purple-400 text-sm">&copy; {new Date().getFullYear()} PLUGG MARKETING. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;