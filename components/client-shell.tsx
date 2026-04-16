"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const iconAnims = ["rand-bounce", "rand-spin", "rand-shake", "rand-pop"] as const;

function langHref(pathname: string): string {
  if (pathname.startsWith("/en/works")) return "/works";
  if (pathname === "/works" || pathname.startsWith("/works/")) return "/en/works";
  if (pathname.startsWith("/en")) return "/";
  return "/en";
}

export function ClientShell() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const hasContactSection = pathname === "/" || pathname === "/en";

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-lang", isEn ? "en" : "ja");
    } catch {
      /* ignore */
    }
    document.body.classList.toggle("en-mode", isEn);
    document.documentElement.lang = isEn ? "en" : "ja";
    return () => {
      document.body.classList.remove("en-mode");
      document.documentElement.lang = "ja";
    };
  }, [isEn]);

  useEffect(() => {
    const body = document.body;
    const stored = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
    }

    const onToggle = () => {
      if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("portfolio-theme", "light");
      } else {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("portfolio-theme", "dark");
      }
    };
    const btn = document.getElementById("themeToggle");
    btn?.addEventListener("click", onToggle);
    return () => btn?.removeEventListener("click", onToggle);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const removers: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>(".contact-links a").forEach((link) => {
      const icon = link.querySelector<HTMLElement>(".contact-icon");
      if (!icon) return;
      const onEnter = () => {
        iconAnims.forEach((c) => icon.classList.remove(c));
        void icon.offsetWidth;
        const c = iconAnims[Math.floor(Math.random() * iconAnims.length)];
        icon.classList.add(c);
      };
      const onLeave = () => {
        iconAnims.forEach((c) => icon.classList.remove(c));
      };
      link.addEventListener("mouseenter", onEnter);
      link.addEventListener("mouseleave", onLeave);
      removers.push(() => {
        link.removeEventListener("mouseenter", onEnter);
        link.removeEventListener("mouseleave", onLeave);
      });
    });
    return () => removers.forEach((fn) => fn());
  }, [pathname]);

  useEffect(() => {
    const contactFab = document.getElementById("contactFab");
    const scrollFab = document.getElementById("scrollTopFab");
    const contact = document.getElementById("contact");
    if (!contactFab || !scrollFab) return;

    const showScroll = () => {
      contactFab.classList.add("absorbed");
      window.setTimeout(() => scrollFab.classList.remove("absorbed"), 200);
    };
    const showContact = () => {
      scrollFab.classList.add("absorbed");
      window.setTimeout(() => contactFab.classList.remove("absorbed"), 200);
    };

    if (hasContactSection && contact) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) showScroll();
            else showContact();
          });
        },
        { threshold: 0.1 },
      );
      io.observe(contact);
      return () => io.disconnect();
    }

    const onScroll = () => {
      if (window.scrollY > 300) showScroll();
      else showContact();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, hasContactSection]);

  useEffect(() => {
    const scrollFab = document.getElementById("scrollTopFab");
    const onClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    scrollFab?.addEventListener("click", onClick);
    return () => scrollFab?.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const isHome = pathname === "/" || pathname === "/en";
    if (!isHome) return;
    const el = document.querySelector<HTMLElement>(".profile-img");
    if (!el) return;

    el.style.transformOrigin = "center";
    el.style.willChange = "transform, box-shadow";

    const move = (ev: MouseEvent | TouchEvent) => {
      if (ev.type === "touchmove") ev.preventDefault();
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const clientX = "touches" in ev ? ev.touches[0].clientX : ev.clientX;
        const clientY = "touches" in ev ? ev.touches[0].clientY : ev.clientY;
        const x = (clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (clientY - rect.top - rect.height / 2) / (rect.height / 2);
        const rotX = -y * 25;
        const rotY = x * 25;
        const shX = -x * 20;
        const shY = -y * 20;
        el.style.transition = "transform 0.1s ease-out, box-shadow 0.1s ease-out";
        el.style.transform = `perspective(1000px) scale(1.1) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        el.style.boxShadow = `${shX}px ${shY + 15}px 40px rgba(122, 162, 246, 0.6)`;
      });
    };

    const end = () => {
      el.style.transition =
        "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s ease";
      el.style.transform = "perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)";
      el.style.boxShadow = "0 15px 35px rgba(122, 162, 246, 0.4)";
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", end);
    el.addEventListener("touchmove", move, { passive: false });
    el.addEventListener("touchend", end);
    el.addEventListener("touchcancel", end);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", end);
      el.removeEventListener("touchmove", move);
      el.removeEventListener("touchend", end);
      el.removeEventListener("touchcancel", end);
    };
  }, [pathname]);

  const lh = langHref(pathname);
  const langLabel = isEn ? "日本語に切り替え" : "Switch to English";
  const contactHash = isEn ? "/en#contact" : "/#contact";

  return (
    <>
      <button
        className="theme-toggle"
        id="themeToggle"
        type="button"
        aria-label="Toggle Theme"
      >
        <div className="icon-container">
          <svg
            className="sun-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <svg
            className="moon-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </div>
      </button>
      <Link
        href={lh}
        className="theme-toggle"
        aria-label={langLabel}
        style={{ right: 110 }}
        prefetch={false}
      >
        <div className="icon-container">
          <svg className="lang-icon-en" viewBox="0 0 24 24" aria-hidden>
            <text
              x="50%"
              y="54%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="currentColor"
              fontFamily="'JetBrains Mono', monospace"
              fontWeight={700}
              fontSize={11}
              letterSpacing="0.5px"
            >
              EN
            </text>
          </svg>
          <svg className="lang-icon-ja" viewBox="0 0 24 24" aria-hidden>
            <text
              x="50%"
              y="54%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="currentColor"
              fontFamily="'JetBrains Mono', monospace"
              fontWeight={700}
              fontSize={11}
              letterSpacing="0.5px"
            >
              JA
            </text>
          </svg>
        </div>
      </Link>
      <a
        href={contactHash}
        className="contact-fab"
        id="contactFab"
        aria-label="Go to Contact"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </a>
      <button
        className="scroll-top-fab absorbed"
        type="button"
        id="scrollTopFab"
        aria-label="Scroll to Top"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
