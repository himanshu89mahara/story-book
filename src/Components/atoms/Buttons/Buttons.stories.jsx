import React from 'react';
import { Button } from './Button';
import { DecisionButton } from './DecisionButton';

export default {
  title: 'Example/Atoms/Buttons',
  component: Button,
  
  argTypes: {
  
  },
};


const ButtonTemplate = (args) => <Button {...args}> {args.label}</Button>;

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  size:'medium',
  disabled:false
};
Primary.storyName='Basic Button';


const DecisionButtonTemplate = (args) => <DecisionButton {...args}> {args.label}</DecisionButton>;

export const DecisionButtonPrimary = DecisionButtonTemplate.bind({});
DecisionButtonPrimary.args = {
  primary: true,
  label: 'Decision Button',
  disabled:false,
  icon:'fa-chevron-right'
};
DecisionButtonPrimary.storyName='Decision Button';

