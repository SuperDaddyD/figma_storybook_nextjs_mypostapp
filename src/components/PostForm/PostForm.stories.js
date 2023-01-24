import React from "react";

import PostForm from "./PostForm";

export default {
  title: "Components/PostForm",
  component: PostForm,
};

// const Template = (args) => <Post {...args} />;

const Template = () => <PostForm label="click Me" />;

export const Default = Template.bind({});
