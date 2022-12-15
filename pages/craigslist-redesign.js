import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";



function Craigslist() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Craigslist Redesign</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <a
                  className="bg-gradient-to-r from-purple-400 dark:text-white to-purple-500 text-black px-4 py-2 border-none rounded-md ml-8 text-2xl"
                  href="https://uiux-portfolio-1w6u.vercel.app/"
                >
                  Home
                </a>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-4xl"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-purple-400 font-medium dark:text-purple-400 md:text-8xl">
              Craigslist
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-5xl">
              A long-awaited redesign.
            </h3>
            </div>
            <div className="p-10 py-10">
            <h3 className="text-4xl py-8 leading-8 text-purple-400 font-medium dark:text-purple-400 md:text-5xl">
              Context
            </h3>
            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            Craigslist has been around since the dark ages...
            </p>
            <img src="/oldsite.png" class="bg-cover"></img>
            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            However, Craigslist has not gone through many updates and as a result, the interface is  not very user-friendly.
            </p>
          </div>

          <h3 className="text-4xl py-8 leading-8 text-purple-400 font-medium dark:text-purple-400 md:text-5xl">
              Research
        </h3>
        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            There are various accessibility issues with the craigslist website.
            </p>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1 ">
          <h3 className="text-2xl py-2 text-purple-400 font-medium dark:text-purple-400 md:text-4xl">
            Accessibility Test Findings
          </h3>  
          <ul class="list-group">
          <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">              Errors: 2
            </p>
            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">              Errors: 2
              Contrast Errors: 275
            </p>
            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">              Errors: 2
              Alerts: 57
            </p>
          </ul>
          </div>
          <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            There are also various other visual problems with the interface.
            </p>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1">
          <h3 className="text-2xl py-2 text-purple-400 font-medium dark:text-purple-400 md:text-4xl">
            Observations
          </h3>  
        <ul class="list-group">
          <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
          No pictures
          </p>
          <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
          All hyperlinks
          </p>
          <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
          No color
          </p>
          <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
          Too much text
          </p>
          <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
          Non-existent capitalization
          </p>
          <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
          Unnecessary information
          </p>
            </ul>
          </div>
          <div>
          <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
          And so, I decided to give it a little redesign...
          </p>
          </div>
          <h3 className="text-4xl py-8 leading-8 text-purple-400 font-medium dark:text-purple-400 md:text-5xl">
              Iterative Designs
        </h3>
        <h3 className="text-xl py-5 dark:text-white md:text-4xl">
              The Low-Fi Mockups
        </h3>
        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        I used Balsamic to create the general layout of a new and improved version of Craigslist for various screen sizes.
        </p>

        <div >
        <h3 className="text-2xl py-5 leading-8 text-purple-400 font-medium dark:text-purple-400 md:text-4xl text-center container-div">
              Browser View
        </h3>
        <div class="container-div">
        <img src="/browser.PNG" class="bg-cover2"></img>
        </div>
        <h3 className="text-2xl py-5 leading-8 text-purple-400 font-medium dark:text-purple-400 md:text-4xl text-center">
              Tablet View
        </h3>
        <div class="container-div">
        <img src="/tablet.PNG" class="bg-cover3"></img>
        </div>
        <h3 className="text-2xl py-5 leading-8 text-purple-400 font-medium dark:text-purple-400 md:text-4xl text-center">
              Phone View
        </h3>
        <div class="container-div">
        <img src="/phone.PNG" class="bg-cover3"></img>
        </div>
        <h3 className="text-2xl py-5 leading-8 text-purple-400 font-medium dark:text-purple-400 md:text-4xl text-center">
            Style Sheet
        </h3>  

        <div class="container-div">
        <img src="/style-sheet.PNG" class="bg-cover4 container-div"></img>
         </div>
          </div>
          <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl text-center">
        This was the style sheet I used for my High-Fi mockups.   
        </p>
          <div>
          <h3 className="text-4xl py-8 leading-8 text-purple-400 font-medium dark:text-purple-400 md:text-5xl">
            The Prototype
        </h3>  
        <div class="container-div py-20">

        <a
        className="bg-gradient-to-r from-purple-400 dark:text-white to-purple-500 text-black px-4 py-2 border-none rounded-xl text-5xl "
        href="https://ambitiouslion999.github.io/responsive-redesign/"
        >
        Launch
        </a>
        </div>
        <div>

        <h3 className="text-4xl py-8 leading-8 text-purple-400 font-medium dark:text-purple-400 md:text-5xl">
        Conclusion
        </h3>
        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        I was able to successfully create a redesign that answers all the questions surrounding
        the accessibility of Craigslist. I made it much more simplified with the idea that everything
        should not be on one page. Rather, everything should be distributed among multiple pages so that
        everything is readable, less cluttered, and looks clean. If I were to continue this project even further,
        I would probably make it so that each of the categories in the circles have their own page. I learned a lot 
        about designing and had to consider many factors when I was planning out the interface. But at the
        end of the day, the most important lesson that I learned from redesigning
        Craigslist is that more is not always better.
        </p>
        </div>
          </div>
          </section>
          </main>
          </div>
  )

}

export default Craigslist