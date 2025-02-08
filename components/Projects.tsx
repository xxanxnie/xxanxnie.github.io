"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/stringswift.png",
    title: "String Swift – Stringing Request App",
    description:
      "A cloud-based application designed to enhance the racket stringing experience for badminton, tennis, and squash players. The platform features an intuitive front-end interface for users to place orders, track real-time updates, and process secure payments. Front-end functionalities are seamlessly integrated with the back-end system to ensure efficient data synchronization for stringers. Deployed on AWS to optimize performance, scalability, and accessibility.",
    skills: [
      "Javascript",
      "UI/UX",
      "AWS",
      "Agile Development",
      "MySQL",
    ],
    link: "https://github.com/Cloud-404BrainNotFound/StringSwift-Frontend",
  },
  {
    imagePath: "/cozyquarter.png",
    title: "CozyQuarter – Dorm Review Hub",
    description:
      "Led a team to develop an interactive web platform that enables students to post and explore dorm reviews, enhancing transparency and decision-making for on-campus housing. The platform features a user-friendly map for seamless visualization of dorm locations and feedback. A robust database system, built with MongoDB, efficiently stores reviews, ratings, and photos, ensuring fast and reliable data retrieval. The project emphasized accessibility, user engagement, and intuitive design.",
    skills: [
      "React",
      "MongoDB",
      "Database Design",
      "UI/UX",
      "Agile Development",
      "Figma",
    ],
    link: "https://cozyquarter-9251ad96e93b.herokuapp.com/home",
  },
  {
    imagePath: "/gitgud.png",
    title: "GitGud – Social Welfare API",
    description:
      "Led development of a social welfare API to streamline resource management for shelters, clinics, and outreach programs. Built with Node.js and MongoDB, featuring secure authentication with JWT and real-time service updates via a dynamic map interface. Integrated external APIs to enhance data accuracy. Deployed on Google Cloud Platform (GCP) for scalability and reliability.",
    skills: [
      "C++",
      "Node.js",
      "JWT Authenticatio",
      "GCP",
      "MongoDB",
      "API Integration",
      "Unit Testing"
    ],
    link: "https://github.com/xxanxnie/GitGud",
  },
  {
    imagePath: "/nerfornothing.png",
    title: "NeRF-or-Nothing",
    description:
      "A web application that leverages Neural Radiance Fields (NeRF) to generate novel 3D views of complex scenes from 2D images. Back-end development focused on computing extrinsic and intrinsic camera parameters from COLMAP output to enhance 3D reconstruction accuracy. A web server worker queue was implemented using RabbitMQ to efficiently manage Structure-from-Motion tasks, optimizing computational performance. The project demonstrated expertise in computational photography and real-time 3D rendering.",
    skills: [
      "Python",
      "Computer Vision",
      "RabbitMQ",
      "Neural Rendering",
      "Javascript",
      "Research & Development"
    ],
    link: "https://github.com/NeRF-or-Nothing",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
