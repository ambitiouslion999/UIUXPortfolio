import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";



function VacationRentals() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Vacation Home Rentals</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <a
                  className="bg-gradient-to-r from-green-500 dark:text-white to-emerald-600 text-black px-4 py-2 border-none rounded-md ml-8 text-2xl"
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
            <h2 className="text-5xl py-2 text-green-600 font-medium dark:text-green-400 md:text-8xl">
              Vacation Home Rentals
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-5xl">
              Rent your dream vacation home.
            </h3>
            </div>
            <div className="">
            <h3 className="text-4xl py-8 leading-8 text-green-600 font-medium dark:text-green-400 md:text-5xl">
              Context
            </h3>
            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
            The purpose of this project was to take a 
            concept from a real startup and create a 
            user interface which would best achieve 
            the purpose of that startup. We followed the 
            design flow from sketching, prototyping, 
            critiquing, and user testing to create a 
            final prototype which was sent to the actual
            startup.
            </p>
            </div>
          <h3 className="text-4xl py-8 leading-8 text-green-600 font-medium dark:text-green-400 md:text-5xl">
              Research
         </h3>
        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        Vacation Home Rents is a vacation rental 
        service that helps users find and compare 
        rental options across listing websites. We 
        designed a mobile app for this startup 
        because the mobile format would make 
        accessing the site easier and more convenient
        for users. We think that this interface will 
        best serve users looking for a place to vacation
        who like to do their research before booking a 
        rental and want to do so at the best rates available.
        The mobile format would also appeal to people away 
        from their computer and out in public.
        </p>
       
        <h3 className="text-4xl py-8 leading-8 text-green-600 font-medium dark:text-green-400 md:text-5xl">
        Designs
        </h3>

        <h3 className="text-xl py-5 dark:text-white md:text-4xl">
        Sketches
        </h3>

        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        Each of us started the design process by 
        individually sketching the core features 
        and pages that are necessary for carrying 
        out the vision of the startup. We then presented 
        our designs to each other and chose parts that 
        made sense to integrate into the interface.       
        </p>
       
        <div className="flex gap-16 py-3 mid-img-div">
        <img src="/sketch1.png" ></img>
        <img src="/sketch2.png" ></img>
        <img src="/sketch3.png" ></img>
        </div>

        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        We liked how this sketch showed the information of the booking screen, which included info about the house, a picture,
            what sites has it listed, and similar homes. 
        </p>
        <div class="container-div">
        <div class= "big-img-div">
        <img src="/asketch.jpeg" class="sketchimg col"></img>
        </div>
        </div>

        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        This sketch did a good job of showing how the search feature would work. It included filters,
        a search bar at the top, and listings of houses using a card style. 
        </p>

        <div className="flex gap-16 py-3 img-div">
        <img src="/dsketch1.png" ></img>
        <img src="/dsketch2.png" ></img>
        <img src="/dsketch3.png" ></img>
        <img src="/dsketch4.png" ></img>
        </div>

        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        The format of the property information on this sketch had a good conceptual model for users.
        </p>

        <div class="container-div">
        <img src="/atsketch.png"></img>
        </div>

        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        We liked how the home page of this sketch was set up. It also included a section for popular destinations
            in case you did not know exactly where to go.
        </p>


        <h3 className="text-xl py-5 dark:text-white md:text-4xl">
        The Prototypes
        </h3>

        <h3 className="text-2xl py-5 leading-8 text-green-600 font-medium dark:text-green-400 md:text-4xl text-center container-div">
        Lo-Fi Mockups
        </h3>

        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        We developed our sketches into a low-fi prototype with the key features that we wanted to include.
        </p>

        <div className="flex gap-16 py-3 mid-img-div">
        <img src="/lofi5.png"/>
        <img src="/lofi2.png"/>
        <img src="/lofi4.png"/>
        </div>

        <div className="flex gap-16 py-3 mid-img-div">
        <img src="/lofi3.png"/>
        <img src="/lofi1.png"/>
        </div>

        <h3 className="text-2xl py-5 leading-8 text-green-600 font-medium dark:text-green-400 md:text-4xl text-center container-div">
        Hi-Fi Mockups
        </h3>

        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        The low-fi prototype was used as a template to create the hi-fi prototype. 
        The initial hi-fi prototype included a search page along with recommendations
        for places to travel. Upon searching for a location, it brings up a list of
        options based on listings from websites like Airbnb, Vrbo, and Expedia. 
        Clicking on a website reveals information like the rating, reviews, 
        accommodations, number of beds, and more. We also included a page where the 
        user can view individual reviews. The booking process is as simple as selecting
        the move-in and move-out dates and number of guests. An estimated subtotal is 
        automatically generated for the user, and the final step redirects the user to 
        the actual booking site to finalize the transaction.        
        </p>



        <div className="flex gap-16 py-3 mid-img-div">
        <img src="/home2.png"/>
        <img src="/search.png"/>
        <img src="/info.png"/>
        </div>

        <div className="flex gap-16 py-3 mid-img-div">
        <img src="/reviews.png"/>
        <img src="/reserve.png"/>
        <img src="/final.png"/>
        </div>

        <h3 className="text-4xl py-8 leading-8 text-green-600 font-medium dark:text-green-400 md:text-5xl">
        Critique
        </h3>

        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        We presented our initial prototype to a panel 
        of fellow classmates and an industry professional. 
        Summarized below are the areas they said we could improve
        and what we did in response to their suggestions.
        </p>

        <div className="lg:flex gap-10">
            <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1">
              <h3 className="text-center text-4xl py-4 text-green-600 font-medium dark:text-green-400">Areas Of Improvement</h3>
              <p className="text-3xl  text-black-800 dark:text-white py-3">A lot of headings and subheadings look the same.</p>
              <p className="text-3xl  text-black-800 dark:text-white py-3">There is no search option at the top of the pages,
              and sorting functionality for the search was missing. Similar bookings sites also have filters for narrowing down
              results.</p>
              <p className="text-3xl text-black-800 dark:text-white py-3">Boxes with drop shadow on the listings clutters the screen.</p>
              <p className="text-3xl  text-black-800 dark:text-white py-3">The top left navigation button did not work, and it was not clear
              what would be included in it. The home logo also had no functionality.</p>
              <p className="text-3xl  text-black-800 dark:text-white py-3">On the review page, the stars looked 3D and out of place
              with the rest of the site.</p>
              <p className="text-3xl  text-black-800 dark:text-white py-3">On the booking page, it would make sense if the checkout and booking
              button are always visible no matter where you scroll.</p>
            </div>
            <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1">
              <h4 className="text-center text-4xl py-4 text-green-600 font-medium dark:text-green-400">How We Improved</h4>
              <p className="text-3xl text-black dark:text-white py-3">We modified the pages to follow a uniform hierarchy of text that clearly showed differences in font size and weight between each element type</p>
              <p className="text-3xl text-black dark:text-white py-3">We added the search bar back to the results page to allow users to easily change their search criteria. Sorting options by relevance, price, proximity, and rating we added to the results page. We also included forms on the home page search area for the checkin date, checkout date, and number of guests as filtering options.</p>
              <p className="text-3xl text-black dark:text-white py-3">The visual design of the listings on the results page was changed to be more simplistic without shadows. We added a little more space within each listing, taking full advantage of the scrolling ability of our mobile layout.</p>
              <p className="text-3xl text-black dark:text-white py-3">Because of the simplicity of the app, we did not think it was necessary to include the top left navigation button and removed it. We added functionality to the home logo by making it take you back to the home page when pressed. We also made it easier to get back to the home page by adding a button after the final booking to return.</p>
              <p className="text-3xl text-black dark:text-white py-3">We changed the star design to be uniform throughout the site and opted for a minimalistic black and white scheme.</p>
              <p className="text-3xl text-black dark:text-white py-3">This made a lot of sense to us as designers because we want to make spending money on the site as easy as possible. Thus, we fixed the book now button to always be at the bottom of the screen regardless of scrolling.</p>
            </div>
          </div>

        <h3 className="text-4xl py-8 leading-8 text-green-600 font-medium dark:text-green-400 md:text-5xl">
        Final Prototype
        </h3>

        <div className="container-div">
        <iframe 

            width="600" height="800" 
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwaMYYv45vcFRfL8o9SDLhY%2FIterative-Design-Hifi%3Fpage-id%3D60%253A87%26node-id%3D64%253A193%26viewport%3D477%252C410%252C1.19%26scaling%3Dscale-down%26starting-point-node-id%3D64%253A193"
            allowfullscreen>
        </iframe>
    </div>

    <h3 className="text-4xl py-8 leading-8 text-green-600 font-medium dark:text-green-400 md:text-5xl">
        User Testing
    </h3>

    <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
    After modifying our prototype based on the feedback from the critique, we sent the prototype to a group of user testers and asked them to answer questions about the usability and design of the interface.
    </p>


    <h3 className="text-xl py-5 dark:text-white md:text-4xl">
        Questions
    </h3>

    <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
    Imagine that you are trying to rent a vacation home. You are trying to rent a vacation home. You decide to go on this website that aggregates vacation rental homes and helps you book the cheapest one after having compared the prices at various sites. Try to book a vacation rental home. Think aloud as you do so as well.
    </p>

    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1">
    
    <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
    1. Without leaving the home page, what are your initial impressions of the site?
    </p>

    <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
    2. What frustrated you most about the site?    </p>

    <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
    3. How would you improve this site?
    </p>

    <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
    4. Do you know any companies or websites that are similar to this one? If so, explain how this one compares.
    </p>

    </div>

    <h3 className="text-xl py-5 dark:text-white md:text-4xl">
        User Videos
    </h3>

    <div className="gap-32 container-div">

    <a
    className="bg-gradient-to-r from-green-500 dark:text-white to-emerald-600 text-black px-4 py-2 border-none rounded-md ml-8 text-2xl"
    href="https://app.usertesting.com/v/b66cf004-a375-4400-afc7-cc86961f318c?encrypted_video_handle=18c1ba59-fa11-4ae8-aadf-75b715bf0022#!/notes&shared_via=link">
    User 1
    </a>

    <a
    className="bg-gradient-to-r from-green-500 dark:text-white to-emerald-600 text-black px-4 py-2 border-none rounded-md ml-8 text-2xl"
    href="https://app.usertesting.com/v/640e6397-c174-4c2b-be4f-86d2ec90a015?encrypted_video_handle=63dec4f1-d672-46a7-895c-3c1aa450b32e#!/notes&shared_via=link">
    User 2
    </a>

    <a
    className="bg-gradient-to-r from-green-500 dark:text-white to-emerald-600 text-black px-4 py-2 border-none rounded-md ml-8 text-2xl"
    href="https://app.usertesting.com/v/eee1333f-4863-44cc-9421-0315327fb298?encrypted_video_handle=f615c8cb-71f6-485e-85fd-db59f14960a5#!/notes&shared_via=link">
    User 3
    </a>

    </div>

 

    <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1">
    <h4 className="text-center text-4xl py-4 text-green-600 font-medium dark:text-green-400">Summary of User Responses</h4>
    <p className="text-3xl text-black dark:text-white py-3">
    The users liked the color scheme of the website. It made them think of nature and relaxation.</p>
    <p className="text-3xl text-black dark:text-white py-3">
    They complemented how the home page was straightforward and not complex.</p>
    <p className="text-3xl text-black dark:text-white py-3">
    The users appreciated the different text sizes and hierarchy which helped them focus on the important features.</p>
    <p className="text-3xl text-black dark:text-white py-3">
    The users enjoyed how intuitive the flow of the prototype was.</p>
    <p className="text-3xl text-black dark:text-white py-3">
    One of the critiques on the prototype was that some of the vacation home pictures didn’t fully portray what the title labeled it as.</p>
    <p className="text-3xl text-black dark:text-white py-3">
    Also, the users questioned the text contents of the prototypes such as the fees and if all the fees were displayed or not.
    </p>

    </div>

        <h3 className="text-4xl py-8 leading-8 text-green-600 font-medium dark:text-green-400 md:text-5xl">
        Conclusion
        </h3>
        <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-3xl">
        Through this project, I learned how to test an interface and integrate user feedback into the design.
         I also became more familiar with prototyping in Figma. It was interesting to learn how users expect 
         to have certain features of an interface if similar sites have them; for example, the ability to filter 
         search results was something that many people wanted to have in the prototype. Even the placement of 
         buttons and the order of content like pricing was important. If I were to continue this project I would most
         likely begin turning this into an actual app using Flutter and Dart or some other app development technologies.
         One important lesson I learned from this 
         project is that the key to making your project better is to get other people to test your design because
         they will find problems that you might never have thought of yourself.     
         </p>

          </section>
          </main>
          </div>
  )
}

export default VacationRentals