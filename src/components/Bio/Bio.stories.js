import React from "react";
import Bio from "./Bio";

export default {
  title: "Component/Bio",
  component: Bio,
};

const Template = () => (
  <Bio
    headshot="https://pbs.twimg.com/profile_images/1547747685817454592/--aLCZbS_400x400.jpg"
    name="Deinde Dawodu"
    tagline="Helping myself learn by doing"
    role="Creative Technologist @ Paradise Objects"
  />
);

export const Default = Template.bind({});
