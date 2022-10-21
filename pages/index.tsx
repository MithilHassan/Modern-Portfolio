import type { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import WorkExperience from "../Components/WorkExperience";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import ContactMe from "../Components/ContactMe";
import { Experience, PageInfo, Project, Skill, Social } from "../typing";
import { sanityClient } from "../sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>Mithil Hassan | Portfolio</title>
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await sanityClient.fetch(
    `*[_type == "pageInfo"][0]`
  );
  const experiences: Experience[] = await sanityClient.fetch(
    `*[_type == "experience"]{
      ...,
      technologies[]->
    }`
  );
  const skills: Skill[] = await sanityClient.fetch(`*[_type == "skill"]`);
  const projects: Project[] = await sanityClient.fetch(
    `*[_type == "project"] {
      ...,
      technologies[]->
    }`
  );
  const socials: Social[] = await sanityClient.fetch(`*[_type == "social"]`);
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
};
