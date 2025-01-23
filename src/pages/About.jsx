import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences, education, certifications } from "../constants";
import CTA from "../components/CTA";
import ProjectCard from "../components/ProjectCard";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello... My name's{" "}
        <span className="red-gradient_text font-semibold drop-shadow">
          Malek
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Web Developer from Tunisia, who's really interested in developing
          cool, modern websites by becoming professional in software engineering
          technologies.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">My Education</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            {/* Spearheaded my freelance journey in web development with a notable
            period of about two years engaging in collaborative ventures
            alongside knowledgeable peers in adjacent computer fields like
            graphic design, digital marketing, SEO tactics, and accounting
            principles, fueling mutual growth and shared success: */}
            Hi, I&apos;m Malek, a passionate freelance developer specializing in
            <span className="font-semibold"> mobile</span> and{" "}
            <span className="font-semibold">web development</span> . With 2
            years of hands-on experience, I&apos;ve collaborated with
            businesses, startups, and individuals to bring their ideas to life,
            offering innovative, reliable, and scalable solutions.
          </p>
        </div>

        {/* <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div> */}
        <div className="mt-12 flex">
          <VerticalTimeline>
            {education.map((education) => (
              <VerticalTimelineElement
                key={education.company_name}
                date={education.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={education.icon}
                      alt={education.company_name}
                      className="w-[60%] h-[60%] object-fill"
                    />
                  </div>
                }
                iconStyle={{ background: education.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: "#9CA3AF",
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {education.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {education.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {education.points.map((point, index) => (
                    <li
                      key={`education-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <h3 className="subhead-text">My certifications</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I hold a diverse range of certifications that demonstrate my
            expertise and commitment to professional growth. These credentials
            validate my ability to deliver results, adapt to industry trends,
            and provide value in a competitive landscape.
          </p>
        </div>
        <div className="mt-20 lg:flex items-center justify-center gap-7 sm:flex ">
          {certifications.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
