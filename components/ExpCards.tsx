"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Aug 2023 — Dec 2023",
    currentPosition: "Software Engineering Intern",
    place: "MVP Health Care",
    previousPositions: [""],
    description:
      "Developed an interactive Choropleth map to visualize pharmacy deserts in New York State. Improved medical adherence prediction accuracy by 15% through machine learning models. Integrated a digital twin of healthcare infrastructure to simulate pharmacy access patterns. Worked with a cross-functional team to clean datasets, ensuring accurate pharmacy accessibility metrics.",
    skills: [
      "Overleaf",
      "React",
      "GIS",
      "Scikit-learn",
      "SQL",
      "Agil Development",
      "Python",
      "Data Analysis",
    ],
  },
  {
    timeline: "May 2023 — Aug 2023",
    currentPosition: "Systems Analysis and Exploitation Intern",
    place: "Assured Information Security",
    previousPositions: [""],
    description:
      "Performed efficiency assessments on a cloud hypervisor forensics platform, leading to a 20% improvement in analysis time. Crafted a radio string injection attack script for an open-source RF and reverse engineering framework using C++. Developed comprehensive test scripts to evaluate the framework’s functionality and enhance its CI/CD capabilities.",
    skills: [
      "Linux",
      "Reverse Engineering",
      "Python",
      "Jenkins",
      "Unit Testing",
      "Hypervisors Forensics",
      "Cloud Computing"
    ],
  },
  {
    timeline: "May 2022 — Aug 2022",
    currentPosition: "Application Engineering Intern",
    place: "Xallent Inc.",
    previousPositions: [""],
    description:
      "Engineered software to extract electrical and mechanical properties, resulting in a 40% improvement in data accuracy. Designed and implemented PID control and feedback routines to enhance probe-device interaction. Developed a Python-based data acquisition system for real-time collection, processing, and visualization of measured data.",
    skills: [
      "Python",
      "Matlab",
      "LabVIEW",
      "SQL",
      "Plotly",
      "RTOS",
      "C++"
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
      <a
        href="/xu_resume.pdf" // Link to your resume file
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center font-medium leading-tight text-foreground group"
      >
        <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
          View Full Résumé
        </span>
        <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
      </a>
    </div>
    </section>
  );
}
