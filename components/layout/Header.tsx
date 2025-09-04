"use client";

import { cn } from "@/lib/cn";
import LogoIcon from "@/public/icons/LogoIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/Infinity", label: "The Infinity Villa" },
  { href: "/Horizon", label: "The Horizon Retreat" },
  { href: "/Gallery", label: "Gallery" },
  { href: "#Contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(href + "/");
    },
    [pathname]
  );

  // Sticky background effect
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ปิดเมนูเมื่อ path เปลี่ยน
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ปิดเมนูเมื่อกด Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // ปิดเมนูเมื่อคลิกข้างนอก
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // ล็อกสกรอลล์ฉากหลัง
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex items-center",
        scrolled
          ? "bg-white backdrop-blur supports-[backdrop-filter]:bg-white"
          : "bg-transparent"
      )}
    >
      <nav className="container m-auto flex h-14 items-center gap-6">
        {/* Brand / Home */}
        <Link
          href="/"
          className="font-semibold"
          aria-current={isActive("/") ? "page" : undefined}
        >
          {
            scrolled ? (<LogoIcon color="#F79009" />) : (isActive("/") ? <LogoIcon /> : <LogoIcon color="#F79009" />)
          }

        </Link>

        {/* Desktop menu */}
        <div className="ml-auto hidden gap-4 text-sm md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative px-1 py-2 transition-opacity hover:opacity-80",
                isActive(href)
                  ? "text-[#F79009] font-bold"
                  : "text-neutral-600"
              )}
              aria-current={isActive(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger + dropdown */}
        <div className="relative ml-auto md:hidden" ref={menuRef}>
          {/* Hamburger button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* Icon: hamburger */}
            <svg
              className={cn("h-6 w-6 transition-transform", open && "scale-0")}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
            {/* Icon: close */}
            <svg
              className={cn(
                "absolute h-6 w-6 transition-transform",
                open ? "scale-100" : "scale-0"
              )}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Dropdown menu */}
          <div
            id="mobile-menu"
            className={cn(
              "absolute right-0 top-full mt-2 w-48 origin-top-right rounded-md border border-neutral-200 bg-white shadow-lg transition-all duration-200 ease-out",
              open
                ? "pointer-events-auto scale-100 opacity-100"
                : "pointer-events-none scale-95 opacity-0"
            )}
          >
            <div className="flex flex-col py-2">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "px-3 py-2 text-base transition-colors",
                    isActive(href)
                      ? "text-[#F79009] font-bold"
                      : "text-neutral-700 hover:text-neutral-900"
                  )}
                  aria-current={isActive(href) ? "page" : undefined}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
