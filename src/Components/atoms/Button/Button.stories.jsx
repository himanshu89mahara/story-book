import React from 'react';

import { Button, PaginationLink } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
  },
};

const ButtonTemplate = (args) => <Button {...args}>{args.children}</Button>;
const PaginationLinkTemplate = (args)=><PaginationLink {...args}><i class="fa fa-chevron-right" aria-hidden="true"></i></PaginationLink>

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  primary: true,
  children: 'Button',
  disabled:false
};

export const PrimaryPaginationLink = PaginationLinkTemplate.bind({});
PrimaryPaginationLink.args = {
  primary: true,
  children: '',
  disabled:false
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   children: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   children: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   children: 'Button',
// };
