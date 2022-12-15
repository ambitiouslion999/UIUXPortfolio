import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";



function AnimeList() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Anime Watch List</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <a
                  className="bg-gradient-to-r from-red-500 dark:text-white to-red-600 text-black px-4 py-2 border-none rounded-md ml-8 text-2xl"
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
            <h2 className="text-5xl py-2 text-red-600 font-medium dark:text-red-600 md:text-8xl">
            My Anime List
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-5xl">
            Keep track of your anime watch list.
            </h3>
            </div>
            <h3 className="text-4xl py-8 leading-8 text-red-600 font-medium dark:text-red-600 md:text-5xl">
              Context
            </h3>
            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            The purpose of this project was to develop an interactive list-based interface 
            that uses interface components, and ties the components to an internal data state.
            Furthermore, we had to implement some sort of sorting and filtering functionality.
            And so, I decided to create an interface that would allow users to look through various
            anime and add them to a watch list where they can see how many total episodes they would have
            to watch to get through their entire list. They can sort by the score rating of the anime in both ascending
            and descending order. They can also filter by the form of anime as well as the age rating of the anime.
            </p>

            <h3 className="text-4xl py-8 leading-8 text-red-600 font-medium dark:text-red-600 md:text-5xl">
            The Interface
            </h3>

            <div class="container-div py-20">

            <a
            className="bg-gradient-to-r from-red-500 dark:text-white to-red-600 text-black px-4 py-2 border-none rounded-xl text-5xl "
            href="https://ambitiouslion999.github.io/UIUX-Development/"
            >
            Launch
            </a>
            </div>
            <h3 className="text-4xl py-8 leading-8 text-red-600 font-medium dark:text-red-600 md:text-5xl">
            Design
            </h3>

            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            These are some of the things I was cognizant of when designing the interface.
            </p>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1 ">

            <h3 className="text-2xl py-2 text-red-600 font-medium dark:text-red-600 md:text-4xl">
            Usability Principles Considered
            </h3>

            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            <span className="text-red-600 dark:text-red-600">Clarity</span> - I use words that the average person can understand such as "watch list, rating, and type"
            </p>

            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            <span className="text-red-600 dark:text-red-600">User Control and Freedom</span> - I added a reset button where the user can get rid of any changes that they made and go back to how they first saw the website.
            </p>

            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            <span className="text-red-600 dark:text-red-600">Consistency and Predictability</span> - I made sure that the terminology that I use is consistent such as "add to watch list" and "remove from watchlist"
            </p>

            </div>

            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            I have 4 total components: Header, AnimeList, AnimeCard, and WatchList. App calls Header and AnimeList. AnimeList calls AnimeCard and WatchList.
            </p>

            <h3 className="text-4xl py-8 leading-8 text-red-600 font-medium dark:text-red-600 md:text-5xl">
            State and Data
            </h3>

            <h3 className="text-xl py-5 dark:text-white md:text-4xl">
            How Data is Passed Down Through Components
            </h3>

            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            AnimeList calls the API and gets all the information about various anime. The information gets passed down to AnimeCard and gets mapped onto a card. Those cards are returned to AnimeList and gets mapped on to a Grid List to be displayed. AnimeList also passes to WatchList the various anime that the user decides to add to their watchlist. WatchList then maps each of those anime titles to their episode and returns it to the AnimeList for it to be displayed and for it to calculate the total number of episodes to be watched.\
            </p>

            <h3 className="text-xl py-5 dark:text-white md:text-4xl">
            How the User Triggers State Changes
            </h3>

            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            I have around 10-11 different states. The user triggers them by clicking on various filters such as the type or rating filters. The user alsos triggers stage changes by clicking on anime to add to and remove from their watch list. Some states are used to keep track of other states.
            </p>

            <h3 className="text-4xl py-8 leading-8 text-red-600 font-medium dark:text-red-600 md:text-5xl">
            Conclusion
            </h3>

            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            Creating this anime watch list interface taught me a lot. I had to learn how to use APIs
            to get data from another source so that I could display information on my website.  
            I also learned what states are and how states change based on user interaction. Furthermore,
            I now know how to implement filtering and sorting features which will definitely be helpful for
            a variety of websites, but especially ecommerce sites. If I were to continue this project I would
            probably have to learn about data bases so that I can implement authentication and store user information
            to their account. An important lesson that I learned was that when you truly understand something, 
            like state changes for example, implementing it becomes a lot easier.
            </p>












          </section>
          </main>
          </div>
  )
}

export default AnimeList