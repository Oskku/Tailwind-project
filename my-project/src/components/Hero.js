import Typical from "react-typical";
import { Link } from "react-scroll";

export default function Example() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-6"></div>

          <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Finclear</span>{" "}
                <span className="block text-4xl text-indigo-600 xl:inline ">
                  {" "}
                  <Typical
                    steps={["", 500, "Enemmän kuin siivous", 40000]}
                    loop={Infinity}
                    wrapper="p"
                  />
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                'Kattavaa ja luotettavaa siivouspalvelua Helsingissä. Ota
                yhteyttä ja kysy lisää! Räätälöimme siivouspalvelut tarpeen
                mukaan. Laadukas työnjälki. Remontointipalvelut.
                Siivouspalvelut.'
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow cursor-pointer">
                  <Link
                    to="order"
                    smooth={true}
                    duration={1000}
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md  animate-bounce hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Tilaa siivous
                  </Link>
                </div>
                <div className="mt-3 cursor-pointer sm:mt-0 sm:ml-3">
                  <Link
                    to="mail"
                    smooth={true}
                    duration={1000}
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md  animate-pulse hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Ota yhteyttä
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://assets.marthastewart.com/styles/wmax-570/d28/cleaning-to-prevent-flu-0118/cleaning-to-prevent-flu-0118_sq.jpg?itok=CzPo6kv9"
          alt=""
        />
      </div>
    </div>
  );
}
