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

export const Input = ({ ...props }: Partial<Props>) => {
  return <MantineInput {...props} />;
};
