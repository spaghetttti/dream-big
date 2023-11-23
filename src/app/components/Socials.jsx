import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

export function Socials() {
  return (
    <div className="flex flex-row gap-8">
      <Link href='/'>
        <BsTwitterX size={30} style={{ padding: 0 }} color="#991b1b" />
      </Link>
      <Link href='/'>
        <BsInstagram size={30} color="#991b1b" />
      </Link>
      <Link href='/'>
        <BsLinkedin size={30} color="#991b1b" />
      </Link>
    </div>
  );
}
