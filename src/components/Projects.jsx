import randomQuote from "../assets/Img1.png";
import food from "../assets/food.png";
import workout from "../assets/workout.png"

function Projects() {
  const projects = [
    {
      title: "Workout-Todo-App",
      des: "A workout to do app to save personal workout details",
      img: workout,
      live: "https://workout-todo-app-client.vercel.app/login",
      code: "https://github.com/Ajor-Saha/Workout-Todo-App",
    },
    {
      title: "Food Delivery App",
      des: "A Food Delivery App built with React.js is a web application that allows users to browse and order food from home",
      img: food,
      live: "https://food-delivery-app-black.vercel.app/",
      code: "https://github.com/Ajor-Saha/Food-Delivery-App",
    },
    {
      title: "Weather-App",
      des: "The Weather App is a simple web application that allows users to get the current weather conditions for a specific location.",
      img: "https://github.com/Ajor-Saha/Weather-App-Demo/raw/main/image.png",
      live: "https://ajor-saha.github.io/Weather-App-Demo/",
      code: "https://github.com/Ajor-Saha/Weather-App-Demo",
    },
    {
      title: "Random Quote Generator",
      des: "A Random Quote Generator is a simple web application that retrieves and displays random quotes or sayings from various sources",
      img: randomQuote,
      live: "https://ajor-saha.github.io/Random-Quote-Generator/",
      code: "https://github.com/Ajor-Saha/Random-Quote-Generator",
    },
    
  ];

  return (
    <section id="projects" className="bg-primary text-white px-5 py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>
          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            Javascript and CSS. Check them out.
          </p>
        </div>
      </div>
      <div className="mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src={project.img} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {project.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {project.des}
                </p>
                <div className="flex justify-evenly">
                  <a
                    href={project.live}
                    className="inline-flex items-center px-7 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-transparent"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="inline-flex items-center px-7 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-transparent"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Projects;
