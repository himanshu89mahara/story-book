import React from "react";
import { PageLink } from "./PageLink";

export default {
  title: "Example/Atoms/Anchor/PageLink",
  component: PageLink,

  argTypes: {},
};

const PageLinkTemplate = (args) => <PageLink {...args}>{args.label}</PageLink>;
export const Primary = PageLinkTemplate.bind({});

Primary.args = {
  primary: true,
  size: "medium",
  label: 1,
  disabled: false,
};


const PageLinkIconTemplate = (args) => <PageLink {...args}><i class={`fa fa-chevron-${args.icon}`} aria-hidden="true"></i></PageLink>;
export const PageLinkIcons = PageLinkIconTemplate.bind({});


PageLinkIcons.args = {
    primary: true,
    size: "medium",
    icon: "left",
    disabled: false,
  };

