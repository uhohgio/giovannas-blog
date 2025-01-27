import Link from "next/link";
import NavBar from "@/app/_components/navbar";
 
const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href="/" className="hover:underline">
        Gio Ehrig
      </Link>
      .
    </h2>
  );
};

export default Header;
