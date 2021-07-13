import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import Portfolio from "components/cards/ProfileThreeColGrid.js";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";

import Footer2 from "components/footers/MiniCenteredFooter.js";

import About from "pages/AboutUs.js";
import Articles from "pages/Articles.js";
import Interview from "pages/Interview.js";
import LeadershipArticle from "components/articles/LeadershipArticle.js";
import MemberArticle from "components/articles/MemberArticle.js";
import MemberPoems from "components/articles/MemberPoems.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "pages/Gallery";
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";
import Artwork from "pages/Artwork.js";
import Milestones from "pages/Milestones.js";

export default function App() {
  const navLinks = [
    {
      url: "/",
      title: "Home"
    },
    {
      url: "/about",
      title: "About"
    },
    {
      url: "/articles",
      title: "Articles"
    },
    {
      url: "/artwork",
      title: "Artwork"
    },
    {
      url: "/milestones",
      title: "Milestones"
    },
    {
      url: "/interview",
      title: "Interview"
    },
    {
      url: "/gallery",
      title: "Gallery"
    }
  ];

  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About navLinks={navLinks}/>
        </Route>
        <Route path="/articles/leadership/:number">
          <LeadershipArticle navLinks={navLinks}/>
        </Route>
        <Route path="/articles/member/:number">
          <MemberArticle navLinks={navLinks}/>
        </Route>
        <Route path="/articles/poem/:number">
          <MemberPoems navLinks={navLinks}/>
        </Route>
        <Route path="/articles">
          <Articles navLinks={navLinks}/>
        </Route>
        <Route path="/artwork">
          <Artwork navLinks={navLinks}/>
        </Route>
        <Route path="/milestones">
          <Milestones navLinks={navLinks}/>
        </Route>
        <Route path="/interview">
          <Interview navLinks={navLinks}/>
        </Route>
        
        <Route path="/gallery">
          <Gallery navLinks={navLinks}/>
        </Route>
        <Route path="/">
          <AnimationRevealPage>
            <Hero navLinks={navLinks}/>
            <Features />
            {/* <MainFeature /> */}
            <Portfolio />
            <Testimonial />
            <Footer2 navLinks={navLinks}/>
          </AnimationRevealPage>
        </Route>
      </Switch>
    </Router>
    
  );
}
