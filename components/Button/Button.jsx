import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button
        className="
          bg-[#53c28b] cursor-pointer border-none rounded-md w-max text-white

          /* Mobile */
          px-3 py-2 text-sm

          /* Tablet */
          sm:px-4 sm:py-2 sm:text-base

          /* Desktop */
          md:px-5 md:py-2 md:text-lg
        "
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;


// px-3 - padding-left: 12px; padding-right: 12px;
// py-2 - padding-top: 8px; padding-bottom: 8px;
// text-sm - font-size: 14px;