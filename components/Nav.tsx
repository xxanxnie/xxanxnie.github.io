"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { ModeToggle } from "./ui/toggle-mode";
import useActiveSection from "@/hooks/useActiveSection";

type NavItem = {
  name: string;
  href: string;
};

export default function Nav() {
  const activeSection = useActiveSection([
    "about",
    "experience",
    "projects",
    "contact",
  ]);

  const navItems: NavItem[] = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const getNavItemClasses = (href: string) => {
    const sectionId = href.substring(1); // Extract the section ID (without the #)
    const isActive = activeSection === sectionId;
    return {
      linkClass: isActive ? "active" : "", // Apply active class if section is active
      indicatorClass: `nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
        isActive
          ? "active w-16 bg-foreground h-2" // Adjust the size of the indicator when active
          : "group-hover:w-16 group-hover:bg-foreground group-hover:h-px"
      }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest ${
        isActive
          ? "text-foreground"
          : "text-slate-500 group-hover:text-foreground"
      }`,
    };
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 flex flex-col lg:gap-4">
      <div className="flex flex-col gap-4 lg:pr-24 mt-6 lg:mt-0">
        <div className="w-full flex lg:items-center lg:justify-start">
          <img src="./anniehello.png" alt="Annie Avatar" className="max-w-56 h-auto" />
        </div>
        <h1 className="text-[42px] font-bold lg:text-start">
          Hello, I&#39;m Annie! 👋
        </h1>
        <h2 className="text-xl lg:text-start">💻👩🏻‍💻🏸</h2>
        <p className="text-lg lg:text-start text-muted-foreground">
          I build intuitive and scalable applications, transforming complex systems into seamless user experiences. Currently looking for a Software Engineering internship for Fall 2025!
        </p>
      </div>

      <nav className="lg:flex hidden">
        <ul className="flex flex-col w-max text-start gap-6 uppercase text-xs font-medium">
          {navItems.map((item: NavItem) => {
            const { linkClass, indicatorClass, textClass } = getNavItemClasses(item.href);
            return (
              <li key={item.name} className="group">
                <a href={item.href} className={`py-3 ${linkClass}`}>
                  <span className={indicatorClass}></span>
                  <span className={textClass}>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <ul className="flex flex-row gap-6 mt-6 lg:mt-0">
        <Button variant="outline" size="icon">
          <a
            href="https://github.com/xxanxnie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a
            href="https://www.linkedin.com/in/xxanxnie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <ModeToggle />
      </ul>
    </header>
  );
}
