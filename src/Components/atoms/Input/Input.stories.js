import React from "react";
import { FancySelect } from "./FancySelect";
import { Input } from "./Input";
import { Select } from "./Select";

export default {
    title: 'Example/Atoms/Inputs',
    component:Input,
    argsTypes:{

    }
}

const InputTemplate = (args) =><Input {...args} />;
export const Primary = InputTemplate.bind({});
Primary.args = {
    placeholder:"Example",
    disabled:false,
    value:"Himanshu",
};

const SelectTemplate = (args) =><Select {...args} >
    <option value="">Please Selected</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
    <option value="5">Option 5</option>
</Select>
export const SelectInput = SelectTemplate.bind({});
SelectInput.args = {
    placeholder:"Example",
    disabled:false,
    error:false
};

export const FancySelectInput = FancySelect.bind({});
FancySelectInput.args = {
    placeholder:"Example",
    disabled:false,
    error:false
};

