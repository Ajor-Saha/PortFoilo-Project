import HeroImg from '../assets/profile.jpeg'
import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Hero() {
  return (
    <div className="hhero bg-color flex justify-around px-5 py-32 text-white">
      <div className="mt-10 pl-3">
        <div className="custom-font text-xl font-semibold gap-2">
          <h1 className="text-3xl font-extralight">Hi,</h1>
          <h3>I am Ajor</h3>
          <h3>Web Developer</h3>
          <p>I am proficient in JavaScript, React.js and Node js</p>
        </div>
        <div className="flex flex-col mt-5">
          <div className="flex gap-3">
            <a href="https://github.com/Ajor-Saha">{" "}<FaGithub size={40} />{" "}</a>
            <a href="#">{" "}<FaLinkedin size={40} />{" "}</a>
            <a href="#">{" "}<AiOutlineFacebook size={40} />{" "}</a>
          </div>
          <div className="mt-5">
            <a href="/#projects" className="btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent">See Projects</a>
          </div>
        </div>
      </div>
      <div className="hero-png mt-10">
        <img
          src={HeroImg}
          alt="coding illustration"
          className="lgw-[80%] lg:w-72 ml-auto w-44 rounded-full"
        />
      </div>
    </div>
  );
}

export default Hero;
