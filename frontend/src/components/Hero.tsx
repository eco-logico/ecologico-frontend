'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gray-50 pt-20">
      {/* Background with curved white container - fluid transition */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-white shadow-2xl" style={{
          borderRadius: '80px 80px 0 0',
          clipPath: 'polygon(0% 12%, 8% 0%, 92% 0%, 100% 12%, 100% 100%, 0% 100%)'
        }}></div>
        {/* Additional organic curve overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-white opacity-30" style={{
          borderRadius: '120px 60px 0 0',
          clipPath: 'polygon(0% 8%, 15% 0%, 85% 0%, 100% 8%, 100% 100%, 0% 100%)'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-12 z-10">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                THE{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-green-500 px-6 py-2">
                    WORLD
                  </span>
                  <span className="absolute inset-0 border-3 border-green-500 rounded-full"></span>
                </span>{' '}
                WAS MADE
              </h1>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                TO BE EXPLORE
              </h1>
            </div>

            {/* Circular image thumbnails */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-3 border-white shadow-lg"></div>
                ))}
              </div>
              <p className="text-gray-600 text-base font-medium">
                +1000 sustainable projects
              </p>
            </div>
          </div>

          {/* Right Content - Background Image with Cards */}
          <div className="relative h-[600px] lg:h-[720px]">
            {/* Organic-shaped white frame container */}
            <div className="absolute inset-0 bg-white shadow-2xl" style={{
              borderRadius: '60px 120px 60px 120px',
              clipPath: 'polygon(0% 8%, 15% 0%, 100% 0%, 100% 85%, 92% 100%, 0% 100%)'
            }}>
              {/* Main landscape background */}
              <div className="absolute inset-0 overflow-hidden" style={{
                borderRadius: '60px 120px 60px 120px',
                clipPath: 'polygon(0% 8%, 15% 0%, 100% 0%, 100% 85%, 92% 100%, 0% 100%)'
              }}>
                {/* Sky gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-green-100 to-green-300"></div>
                
                {/* Rolling hills layers */}
                <div className="absolute inset-0">
                  {/* Distant hills */}
                  <div className="absolute bottom-0 left-0 w-full h-2/3">
                    <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-green-600 via-green-500 to-green-400 opacity-70"></div>
                    {/* Hill shapes */}
                    <div className="absolute bottom-0 left-0 w-1/3 h-4/5 bg-green-500 rounded-t-full opacity-80"></div>
                    <div className="absolute bottom-0 right-0 w-2/5 h-3/4 bg-green-600 rounded-t-full opacity-75"></div>
                    <div className="absolute bottom-0 left-1/4 w-2/5 h-5/6 bg-green-400 rounded-t-full opacity-85"></div>
                  </div>
                  
                  {/* Mid-ground with rocks and grass */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-green-800 via-green-700 to-transparent opacity-60"></div>
                  
                  {/* Foreground grass and rocks */}
                  <div className="absolute bottom-0 left-0 w-full h-1/3">
                    <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-green-900 to-green-700 opacity-50"></div>
                    {/* Scattered rocks */}
                    <div className="absolute bottom-4 left-1/4 w-3 h-2 bg-gray-600 rounded-full opacity-80"></div>
                    <div className="absolute bottom-6 right-1/3 w-4 h-3 bg-gray-700 rounded-full opacity-75"></div>
                    <div className="absolute bottom-2 left-2/3 w-2 h-2 bg-gray-500 rounded-full opacity-85"></div>
                  </div>
                </div>
                
                {/* Hiker in foreground with raised hand */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 translate-x-8">
                  <div className="w-28 h-36 relative">
                    {/* Body in red jacket */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-7 h-16 bg-red-600 rounded-t-lg shadow-lg"></div>
                    {/* Head */}
                    <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-red-600 rounded-full shadow-md"></div>
                    {/* Raised arm */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-x-3 -rotate-45 w-10 h-1.5 bg-red-600 origin-left rounded-full shadow-sm"></div>
                    {/* Other arm */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-x-2 rotate-12 w-6 h-1 bg-red-600 origin-left rounded-full"></div>
                    {/* Backpack */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-x-1 w-4 h-8 bg-red-700 rounded-sm shadow-md"></div>
                    {/* Legs */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-x-1 w-2 h-6 bg-gray-800 rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-x-1 w-2 h-6 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Circular white button with diagonal arrow */}
            <div className="absolute top-8 right-8 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>

          </div>
        </div>

        {/* Bottom info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 relative z-10">
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Consulting</h3>
            <p className="text-gray-600">Complete guidance for forest carbon projects</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Guaranteed Certification</h3>
            <p className="text-gray-600">Verified processes by leading international standards</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Immediate Impact</h3>
            <p className="text-gray-600">Start generating carbon credits quickly</p>
          </div>
        </div>
      </div>
    </div>
  )
} 