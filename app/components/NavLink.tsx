import Link from "next/link";

type NavLinkProps = {
  href: string;
  title: string;
};

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ffffff] sm:text-xl rounded md:p-0 hover:text-[#ffcc00]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
