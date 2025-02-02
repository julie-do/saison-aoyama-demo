"use client";

import { Popover } from "@headlessui/react";

import Link from "next/link";
import { Fragment, ReactNode } from "react";
import { NavMenuButton } from "./NavMenuButton";
import { cn } from "@/utils/utils";

export type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

export const NavMenu = ({ links }: { links: NavItem[] }) => {
  return (
    <Popover as={Fragment}>
      {({ close, open }) => (
        <>
          <NavMenuButton />
          <Popover.Panel
            static
            as="ul"
            className={cn(
              // mobile/desktop/light/dark:
              "flex min-h-min transition-[transform_opacity] duration-300",
              // mobile:
              "flex-col gap-0 w-full absolute top-0 left-0 pt-16 pb-2 backdrop-blur-[2px] shadow-lg bg-zinc-50/80 dark:bg-black/80",
              // desktop:
              "sm:flex-row sm:items-center sm:gap-4 sm:w-auto sm:relative sm:top-auto sm:left-auto sm:bg-transparent sm:py-0 sm:shadow-none sm:backdrop-blur-none sm:dark:bg-transparent sm:dark:shadow-none sm:dark:backdrop-blur-none",
              // mobile: show list depending on open state:
              open
                ? "visible opacity-100 translate-y-0"
                : "invisible opacity-0 -translate-y-2/3",
              // desktop: ALWAYS show the list:
              "sm:visible sm:opacity-100 sm:translate-y-0"
            )}
          >
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={close}
                  className={cn(
                    // mobile/desktop/light/dark:
                    "relative flex items-center capitalize text-sm outline-none appearance-none font-medium",
                    // mobile:
                    "pl-4 pr-8 h-12 justify-end",
                    // desktop:
                    "sm:pl-0 sm:pr-0 sm:h-10 sm:justify-normal",

                    // !! SOME OF THE CLASSES BELOW ARE VERY VERBOSE !!
                    // This is to keep things very clear.
                    // For example, the text color for mobile light and desktop light are the same (text-zinc-900)
                    // but in mobile light its "text-zinc-900" and in desktop light is "sm:text-zinc-900"
                    // the "sm:text-zinc-900" is unneccesary but it helps with clarity in the case we DO want to customize the text color for on mobile light themes

                    // mobile light:
                    "text-zinc-900 hover:text-primary-500 focus-visible:text-primary-500 bg-transparent hover:bg-primary-100 focus-visible:bg-primary-100 hover:shadow-none focus-visible:shadow-none",
                    // mobile dark:
                    "dark:text-zinc-100 dark:hover:text-primary-200 dark:focus-visible:text-primary-200 dark:bg-transparent dark:hover:bg-primary-900/70 dark:focus-visible:bg-primary-900/70 dark:hover:shadow-none dark:focus-visible:shadow-none",
                    // desktop light:
                    "sm:text-zinc-900 sm:hover:text-zinc-900 sm:focus-visible:text-zinc-900 sm:bg-transparent sm:hover:bg-transparent sm:focus-visible:bg-transparent sm:hover:[box-shadow:inset_0_-2px_0_0_black] sm:focus-visible:[box-shadow:inset_0_-2px_0_0_black]",
                    // desktop dark:
                    "sm:dark:text-zinc-100 sm:dark:hover:text-zinc-100 sm:dark:focus-visible:text-zinc-100 sm:dark:bg-transparent sm:dark:hover:bg-transparent sm:dark:focus-visible:bg-transparent sm:dark:hover:[box-shadow:inset_0_-2px_0_0_white] sm:dark:focus-visible:[box-shadow:inset_0_-2px_0_0_white]"
                  )}
                >
                  {link.label}

                  {/* <span className="absolute bottom-0 w-full h-"></span> */}
                </Link>
              </li>
            ))}
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};
