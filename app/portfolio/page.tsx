import Link from "next/link";

const PortfolioPage = () => {
  return (
    <div className="w-full">
      <h1 className="my-5">Choose a Gallery</h1>

      <div className="flex gap-12.5 flex-col md:flex-row">
        <Link
          href="/portfolio/illustrations"
          className="relative w-50 h-62.5 border-[3px] border-[#bbb] rounded-[5px] bg-[url('/illustration.jpg')] bg-contain bg-center bg-no-repeat"
        >
          <span className="absolute right-2.5 bottom-2.5 text-[20px] font-bold text-[#bbb] hover:text-[#53c28b]">
            Illustrations
          </span>
        </Link>

        <Link
          href="/portfolio/websites"
          className="relative w-50 h-62.5 border-[3px] border-[#bbb] rounded-[5px] bg-[url('/websites.jpg')] bg-contain bg-center bg-no-repeat"
        >
          <span className="absolute right-2.5 bottom-2.5 text-[20px] font-bold text-[#bbb] hover:text-[#53c28b]">
            Websites
          </span>
        </Link>

        <Link
          href="/portfolio/applications"
          className="relative w-50 h-62.5 border-[3px] border-[#bbb] rounded-[5px] bg-[url('/apps.jpg')] bg-contain bg-center bg-no-repeat"
        >
          <span className="absolute right-2.5 bottom-2.5 text-[20px] font-bold text-[#bbb] hover:text-[#53c28b]">
            Applications
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioPage;


// my-[20px]   - my-5                /* margin-top & margin-bottom: 20px; */
// gap-[50px]  -gap-12.5             /* gap: 50px; */
// w-[200px]   - w-50                /* width: 200px; */
// border-[3px] - border-[3px]       /* border-width: 3px; */
// rounded-[5px] - rounded-[5px]     /* border-radius: 5px; */
// text-[20px]  - text-[20px]        /* font-size: 20px; */
// right-[10px] - right-2.5          /* right: 10px; */
// bottom-[10px] - bottom-2.5        /* bottom: 10px; */
// h-[250px]   - h-62.5              /* height: 250px; */
