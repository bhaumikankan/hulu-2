import request from "../Utils/request";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <ul className="flex gap-5 items-center whitespace-nowrap overflow-x-scroll px-7 sm:px-7 scrollbar-hide sm:gap-11">
        {Object.entries(request).map(([key, { title, url }]) => {
          return (
            <li
              onClick={() => {
                router.push(`/?genre=${key}`);
              }}
              key={key}
              className="transition ease-in-out last:pr-7  cursor-pointer hover:scale-125 duration-300  hover:text-red-200 sm:text-xl"
            >
              <h1>{title}</h1>
            </li>
          );
        })}
      </ul>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-slate-800 h-10 w-1/12 "></div>
    </nav>
  );
}

export default Nav;
