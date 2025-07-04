'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gray-50 pt-20">
      {/* Background with curved white container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-white rounded-t-[80px] shadow-2xl"></div>
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
            {/* Main background image - green hills */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-green-400 to-green-600">
              {/* Rolling hills background */}
              <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-green-700 via-green-600 to-green-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-green-800 to-transparent opacity-60"></div>
                {/* Hill silhouettes */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-r from-green-800 via-green-700 to-green-800 opacity-40"></div>
              </div>
              
              {/* Hiker silhouette with raised hand */}
              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-32 relative">
                  {/* Body */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-14 bg-red-600 rounded-t-lg"></div>
                  {/* Head */}
                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full"></div>
                  {/* Raised arm */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-x-2 -rotate-45 w-8 h-1 bg-red-600 origin-left rounded-full"></div>
                  {/* Backpack */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 translate-x-1 w-3 h-6 bg-red-700 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Floating card with house */}
            <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-xl w-48 hover:shadow-2xl transition-shadow duration-300">
              <div className="h-32 bg-gradient-to-br from-green-300 to-green-500 rounded-xl mb-3 relative overflow-hidden">
                {/* Green field background */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-600 to-green-400"></div>
                {/* House in field */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  {/* House base */}
                  <div className="w-12 h-8 bg-white rounded-sm shadow-sm"></div>
                  {/* Roof */}
                  <div className="w-16 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-b-[20px] border-b-red-500 absolute -top-5 left-1/2 transform -translate-x-1/2"></div>
                  {/* Door */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-gray-800 rounded-t-sm"></div>
                  {/* Window */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-x-2 w-2 h-2 bg-blue-200 rounded-sm"></div>
                </div>
              </div>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200">
                More
              </button>
            </div>

            {/* Bottom floating elements */}
            <div className="absolute bottom-8 left-8 flex gap-4">
              <div className="bg-white rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="bg-white rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Decorative curved element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-100 rounded-full opacity-50"></div>
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