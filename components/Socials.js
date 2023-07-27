import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinLine,
  RiFacebookLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine size={25} />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine size={25} />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine size={25} />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGithubLine size={25} />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine size={25} />
      </Link>
    </div>
  );
};

export default Socials;
