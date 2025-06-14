"use client";

import clsx from "clsx";
import gsap from "gsap";
import Image from "next/image";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const NavBar: React.FC = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState<boolean>(false);
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  const { y: currentScrollY } = useWindowScroll();

  const toggleAudioIndicator = (): void => {
    const next = !isAudioPlaying;
    setIsAudioPlaying(next);
    setIsIndicatorActive(next);
  };

  useEffect(() => {
    const audio = audioElementRef.current;
    if (!audio) return;

    try {
      isAudioPlaying ? audio.play() : audio.pause();
    } catch (error) {
      console.warn("Audio playback failed:", error);
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    const nav = navContainerRef.current;
    if (!nav) return;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      nav.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      nav.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      nav.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    const nav = navContainerRef.current;
    if (!nav) return;

    gsap.to(nav, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
      ease: "power1.out",
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product Button */}
          <div className="flex items-center gap-7">
            <Image
              src="/img/logo.png"
              alt="logo"
              className="w-10"
              width={40}
              height={40}
            />

            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          {/* Navigation Links and Audio Toggle */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item: string) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              tabIndex={0}
              aria-label="Toggle background audio"
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar: number) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
