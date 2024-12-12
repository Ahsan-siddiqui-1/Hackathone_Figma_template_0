import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-10 md:px-[10%] px-[2%]">
      <div className="w-full h-full">
        {/* Main footer layout: 3 sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-content-center place-items-center h-full md:h-[312px] w-full">
          {/* Address Section */}
          <div className="text-sm">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            {/* Column 1: Main links */}
            <div>
              <h3 className="font-semibold pb-10 text-[#9F9F9F]">Links</h3>
              <ul className="space-y-10 font-bold">
                {['Home', 'Shop', 'About', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Help links */}
            <div>
              <h3 className="font-semibold pb-10 text-[#9F9F9F]">Help</h3>
              <ul className="space-y-10 font-bold">
                {['Payment Options', 'Returns', 'Privacy Policies'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="text-sm ">
            <h3 className="font-semibold pb-10 text-[#9F9F9F]">Newsletter</h3>
            <form
              className="flex items-center"
            >
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-grow border border-gray-300 px-4 py-2 text-sm rounded-l-md focus:outline-none focus:ring focus:ring-gray-200"
                required
              />
              <button
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 text-sm rounded-r-md hover:bg-gray-700"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs">
          <p>2022 Meubel House. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

