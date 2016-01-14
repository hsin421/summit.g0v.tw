'use strict';

import React, { Component } from "react";
import Keynote from "./keynote";
import FeatureSpeakers from "./feature_speakers";
import About from "./about";
import Hightlights from "./highlights";
import MailChimp from "./mail_chimp";

class Intro extends Component {
  render() {
    return <div className="intro">
      <Keynote />
      <FeatureSpeakers />
      <About />
      <Hightlights />
      <MailChimp />
    </div>;
  }
};

export default Intro;