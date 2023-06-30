import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import Question from "../../content/sections/questions";
import { styled } from "styled-components";
import Q1 from "../../content/sections/q1";
import S1 from "../../content/sections/s1";
import Q2 from "../../content/sections/q2";
import Q3 from "../../content/sections/q3";
import Q4 from "../../content/sections/q4";
import Q5 from "../../content/sections/q5";
import S5 from "../../content/sections/s5";
import Feedback from "../../content/sections/feedback";

export default function IndexPage() {
  return (
    <>
      <Seo title="Web development assignment for Zluri" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero"/>
        <Question />
        <Q1 />
        <S1 />
        <Q2 />
        <Q3 />
        <Q4 />
        <Q5 />
        <S5 />
        <Feedback />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Issues?" /> */}
      </Page>
    </>
  );
}
