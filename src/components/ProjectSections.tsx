"use client";

import React from "react";
import Image from "next/image";
import { projects } from "@/constant";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectSections = () => {
  return (
    <section className="mb-10 mt-20">
      <h2 className="font-bold text-3xl mb-6">🟠 My journey</h2>
      <div className="space-y-20">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ delay: i * 0.2 }}
          >
            <div className="grid lg:grid-cols-2 grid-cols-2 gap-4">
              {project?.proimg?.map((image, idx) => (
                <div
                  key={idx}
                  className="lg:h-70 w-full relative overflow-hidden rouned-lg"
                >
                  <Image
                    src={`${image.url}`}
                    alt="project-image"
                    // width={800}
                    // height={400}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
            <h2 className="font-bold lg:text-2xl text-xl my-4">
              {project?.title}
            </h2>
            <div className="flex items-center space-x-2">
              <span className="">Role:</span>
              <p className="text-lg font-bold">{project?.role}</p>
            </div>
            {/* <p>{project?.summary}</p> */}
            <div className="mt-2 flex flex-wrap gap-2">
              Tech:{" "}
              {project?.tools?.map((tool, i) => (
                <p key={i} className="font-semibold text-sm text-gray-600">
                  {tool},
                </p>
              ))}
            </div>
            <div className=" mt-4">
              <h1 className="border-none text-lg underline font-bold">
                {project?.achivement}
              </h1>
              <ul className="list-disc space-y-2 mt-2 pl-4">
                {project?.tasks?.map((task, i) => (
                  <li key={i}>{task?.title}</li>
                ))}
              </ul>
            </div>
            <div className=" mt-4">
              <h1 className="border-none text-lg underline font-bold">
                Impact:
              </h1>
              <ul className="list-disc space-y-2 mt-2 pl-4">
                {project?.impact?.map((task, i) => (
                  <li key={i}>{task?.title}</li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-10 pt-6">
              {/* <Link href={`/case/${project.slug}`} className="flex">
                <Button className="bg-white text-zinc-900 hover:bg-gray-400">
                  Frontend Case Study
                </Button>
              </Link> */}
              {project.siteurl && (
                <Link
                  target="_blank"
                  href={`${project.siteurl}`}
                  className="flex"
                >
                  <Button variant="default" className=" hover:bg-gray-400">
                    View Website
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSections;
