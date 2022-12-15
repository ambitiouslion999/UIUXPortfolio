import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";



function Briefcase() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Briefcase</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <a
                  className="bg-gradient-to-r from-blue-500 dark:text-white to-indigo-500 text-black px-4 py-2 border-none rounded-md ml-8 text-2xl"
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
            <h2 className="text-5xl py-2 text-blue-600 font-medium dark:text-blue-400 md:text-8xl">
              Briefcase
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-5xl">
              Liberating legal services for all.
            </h3>
            </div>
            <div className="p-10 py-10">
            <h3 className="text-4xl py-8 leading-8 text-blue-600 font-medium dark:text-blue-400 md:text-5xl">
              Context
            </h3>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1">

            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            Only 8 percent of low income workers file claims when they are
            seriously injured.
            </p>
            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            25 percent of those who do file face first-round denial.
            </p>
            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            At the end, only 6 percent of claimants receive benefits.
            </p>
            </div>
            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            The majority of the people affected are immigrants and people who speak English
            as a second language since they often either cannot afford a lawyer or cannot
            find someone who speaks the same langauge as them. I thought to myself that there must
            be lawyer-finding apps and websites out there already that are attempting to solve
            this problem so I went and did some research.
            </p>
            </div>
          <h3 className="text-4xl py-8 leading-8 textblue-600 font-medium dark:text-blue-400 md:text-5xl">
              Research
         </h3>
        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            What I found was that existing apps that try to connect people with lawyers are
            extremely inefficient due to the poor interface design. The screens are cluttered,
            the questions they ask are unnecessary and complex, there is no multi-language support, and
            it takes way too much time to complete the forms.
        </p>
        <h3 className="text-2xl py-5 leading-8 text-blue-600 font-medium dark:text-blue-400 md:text-4xl text-center container-div">
        User Interface of LegalMatch
        </h3>
        <div class="container-div">
        <img src="/legalmatch.png" class="bg-cover2"></img>
        </div>
        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            And so I decided to make my own design for an app that would help
            people get connected to lawyers and be easy to use and accessible for
            people who speak other languages.
            </p>
        <h3 className="text-4xl py-8 leading-8 textblue-600 font-medium dark:text-blue-400 md:text-5xl">
            The Designs
        </h3>
        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        The first question asks the user what language they would like to continue in
        so that the user is comfortable and is able to understand the questions they will be asked.
        </p>
        <div class="container-div">
        <img src="/question1.png" ></img>
        </div>
        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        After the user chooses a language, the entire app will be translated into that
        language and so all the questions will also be asked in that language.
        </p>
        <div className="flex gap-16 py-3 img-div">
        <img src="/lan1.png" ></img>
        <img src="/lan2.png" ></img>
        <img src="/lan3.png" ></img>
        <img src="/lan4.png" ></img>
        </div>
        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        As you can see, it is designed so that the user is asked one simple question 
        at a time so that the user is not confused and the screen is not cluttered.
        There are also shades of color to make the text more readable.
        </p>
        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        After the user answers all the questions, they will be shown lawyers that speak
        the same language as them in ascending order in terms of proximity. They can then
        select a lawyer and look at their profile which has information about them such as
        their contact information.
        </p>
        <div className="p-10 my-10 gap-16 big-img-div flex">
        <img src="/matches.png" ></img>
        <img src="/profile.jpg" ></img>
        </div>
        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        Readability and comprehensiveness was prioritized when
        designing the interface for these screens. Therefore, only essential
        information is displayed.
        </p>
        <h3 className="text-4xl py-8 leading-8 textblue-600 font-medium dark:text-blue-400 md:text-5xl">
        Conclusion
        </h3>
        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        I was able to successfully create an app design that is accessible to people who
        speak languages other than English. This app design also readable and comprehensive
        so that the user is not bogged-down with complex words or a cluttered screen. I added
        shades of color to really differentiate the various choices. If I were to continue this
        project further, I would add a user profile page where the user could add information that
        relates to themself and their case. The most important lesson I learned from doing this project
        was that something as simple as the language of an interface makes an immense amount of difference
        to the user so I will keep that in mind when designing future interfaces. 
        </p>









          </section>
          </main>
          </div>
  )
}

export default Briefcase