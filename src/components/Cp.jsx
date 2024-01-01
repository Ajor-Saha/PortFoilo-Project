import cpAvatar from "../assets/Img3.png";
import codeChef from "../assets/CodeChef.png";

const Cp = () => {
  return (
    <section id="cp" className="bg-primary text-white px-5 py-30">
      <div className="about-info mb-5">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[280px] border-indigo-600 pb-2">
          Competitve Programming
        </h2>

        <p className="pb-5">Some of my Online Judge Profie</p>
      </div>

      <div className="flex justify-evenly p-8">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-8 py-5">
          <a href="https://codeforces.com/profile/Ajor">
            <img
              className="p-8 rounded-t-lg"
              src={cpAvatar}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="https://codeforces.com/profile/Ajor">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                Codeforces Profile
              </h5>
            </a>

            <div className="flex justify-center mt-2">
              <a
                href="https://codeforces.com/profile/Ajor"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit Profile
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-8 py-5">
          <a href="https://www.codechef.com/users/ajor_63">
            <img
              className="p-8 rounded-t-lg"
              src={codeChef}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="https://www.codechef.com/users/ajor_63">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                CodeChef Profile
              </h5>
            </a>

            <div className="flex justify-center mt-2">
              <a
                href="https://www.codechef.com/users/ajor_63"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cp;
