"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import Logo from "../Logo/Logo";
import MobileMenuSheet from "../MobileMenuSheet/MobileMenuSheet";
import { MENU_ITEMS } from "./menuItems";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [prevPathname, setPrevPathname] = useState<string | null>(null);
  const pathname = usePathname();

  /* close any open desktop dropdown / mobile drawer whenever the route
   * changes */
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpenDropdown(null);
    setIsOpen(false);
  }

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* stop body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-none border-b border-brand-900/5"
        }`}
      >
        <div className="container flex items-center justify-between h-18 py-3">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Logo variant="dark" />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-7">
            {MENU_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition ${
                      isActive
                        ? "text-brand-600"
                        : "text-brand-900/80 hover:text-brand-600"
                    }`}
                  >
                    {item.display}
                  </Link>
                );
              }

              const isDropdownOpen = openDropdown === item.href;

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown((prev) => (prev === item.href ? null : item.href))
                    }
                    className={`flex items-center gap-1 text-sm font-medium transition ${
                      isActive
                        ? "text-brand-600"
                        : "text-brand-900/80 hover:text-brand-600"
                    }`}
                  >
                    {item.display}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3 transition duration-200 ${
                      isDropdownOpen
                        ? "visible opacity-100 translate-y-0"
                        : "invisible opacity-0 -translate-y-1"
                    }`}
                  >
                    <div className="overflow-hidden rounded-xl border border-brand-900/10 bg-white py-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2.5 text-sm text-brand-900/80 transition hover:bg-brand-50 hover:text-brand-700"
                        >
                          {child.display}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Get a Quote
            </Link>
          </div>

          {/* MOBILE TRIGGER */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-900 lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenuSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        openSubmenu={openSubmenu}
        onToggleSubmenu={(href) =>
          setOpenSubmenu((prev) => (prev === href ? null : href))
        }
      />
    </>
  );
};

export default Navbar;
