import {
  Input as MantineInput,
} from "@mantine/core";
import React from "react";

type Props = {
  id: string;
  required: boolean;
  label: string;
  description: string;
  error: string;
  placeholder: string;
};

export const Input = ({ placeholder, label, ...props }: Partial<Props>) => {
  return (
    <MantineInput.Wrapper label={label || "Search for coin"} description="Input a name">
      <MantineInput {...props} variant="filled" radius="md" placeholder={placeholder || ""} />
    </MantineInput.Wrapper>
  )
};
