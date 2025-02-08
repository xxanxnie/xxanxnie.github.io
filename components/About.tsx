"use client"

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          I’m currently a first-year graduate student at {" "}
          <a href="https://www.engineering.columbia.edu/" className="text-black dark:text-white">
            Columbia University
          </a>
          , pursuing a master’s degree in Computer Science. I earned my bachelor’s degree in Computer Systems Engineering from {" "}
          <a href="https://eng.rpi.edu/" className="text-black dark:text-white">
            Rensselaer Polytechnic Institute
          </a>
          , where I developed a strong foundation in software development, system architecture, and data-driven solutions. I’m a software engineer with a passion for building intuitive and scalable applications.
        </p>

        <p className="text-start text-muted-foreground lg:px-6">
          My goal is to craft technology that solves real-world problems while delivering seamless user experiences. I’m particularly interested in {" "}
          <span className="text-black dark:text-white">full-stack development</span>, {" "}
          <span className="text-black dark:text-white">UI/UX design</span>, 
          and <span className="text-black dark:text-white">cloud computing</span>, and I aim to use my skills to create solutions that are both powerful and accessible.
        </p>

        <p className="text-start text-muted-foreground lg:px-6">
          <span className="text-black dark:text-white">When I’m not coding</span>
          , you’ll probably find me on the badminton court, art crafting, or exploring new ideas through music, side projects, and creative problem-solving.
        </p>
      </div>
    </section>
  );
}
