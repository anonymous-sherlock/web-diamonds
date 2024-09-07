import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const Header = ({}: Props) => {
  return (
    <header className="tp-header-height">
      <div id="header-sticky" className="h-[var(--header-height)] z-10 px-10 py-6 fixed w-full left-0 top-0 bg-white/90">
        <div className="flex justify-between">
          <div className="logo">
            <Image src="/logo.png" alt="Web Diamonds Logo" width={60} height={15} className="h-full w-full object-contain" />
          </div>
          <div className="flex items-center">
            <ul className="flex gap-10 uppercase text-base items-center">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Service</Link>
              </li>
              <li>
                <Link href="#">Portfolio</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="logo">
            <button className="tp-offcanvas-open-btn">
              <span className="h-[2px] w-[40px] bg-common-black flex my-[6px]"></span>
              <span className="h-[2px] w-[40px] bg-common-black flex my-[6px]"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
