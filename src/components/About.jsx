import AboutImg from "../assets/avatar.avif";

function About() {
  return (
    <section
      id="about"
      className=" bg-gray-700 flex justify-evenly px-5 py-20 h-auto"
    >
      <div>
        <div className=" text-slate-200">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>
        </div>
        <div className="text-white flex flex-col md:flex-row h-auto">
          <div className="w-10/12 p-3">
            <p>Hello there! 👋 I'm Ajor Saha, a passionate web web developer with a
            love for crafting robust and user-friendly applications. I thrive on
            turning creative ideas into functional and scalable solutions.</p>
            MyExpertise: <br />
            <p>🚀 Full-Stack Development: I specialize in end-to-end development,
            ensuring seamless integration of frontend and backend components.{" "}</p>
            <br />
            <p>
            💻 React Enthusiast: I'm a fan of React and its ability to create
            dynamic and interactive user interfaces. From component-based
            architecture to state management with Redux, I've got it covered.</p>
            <br />
            <p>
            🌐Node.js Backend: Leveraging the power of Node.js, I build scalable
            server-side applications. Express.js is my go-to framework for
            creating APIs that power the frontend. </p><br />
            <p>📊 MongoDB Database: I'm experienced in designing and working with
            MongoDB databases, providing efficient and flexible data storage
            solutions. </p><br />
            <p>
            🛠️ Tools & Technologies: Git for version control, RESTful
            APIs, JSON Web Tokens (JWT) for secure authentication, and a strong
            understanding of web security practices.</p>
          </div>
          <div className="mt-5">
            <img src={AboutImg} alt="" className=" w-72 rounded-full" />
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default About;
