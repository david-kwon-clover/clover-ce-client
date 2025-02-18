import CloverIcon from "../assets/clover-icon.svg";
import DevicesStock from "../assets/devices-stock.png";

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 lg:px-60 sm:px-12">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-green-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div
        aria-hidden="true"
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80ffc8] to-[#46e5a5] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-30 lg:flex lg:px-8 lg:py-12 lg:h-screen sm:h-[1400px]">
        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
          <img alt="Clover Icon" src={CloverIcon} className="h-11" />
            <h1 className="mt-16 text-pretty lg:text-6xl font-semibold tracking-tight text-white sm:text-5xl">
              Discover the solutions to power your business with Clover
            </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
            Craft your plan, choose your devices - find the the right price
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="/cost-estimator"
              className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started
            </a>
            <a href="https://www.clover.com/" target="_blank" className="text-sm/6 font-semibold text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="absolute lg:top-56 lg:-right-6 -z-10 max-w-xl flex-none sm:max-w-5xl lg:max-w-2xl">
          <img
            alt="Clover devices"
            src={DevicesStock}
            width={2432}
            height={1442}
            className="w-[76rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
