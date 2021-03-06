import React from "react";
import { Controller } from "react-hook-form";
import { SelectWrapper, SelectStyled, SelectIcon } from "./styled";
import { Text } from "../Text";
import { Grid } from "../Grid";
import { Colors } from "../Global";

export type SelectProps = {
  label: string;
  name: string;
  options: { value: number; label: string }[];
};

export const Select = ({ name, label, options }: SelectProps) => {
  return (
    <label>
      <Grid gap="4px">
        <Text textType="caption">{label}</Text>
        <Controller
          name={name}
          render={({ field }) => {
            return (
              <SelectWrapper>
                <SelectStyled {...field}>
                  {options.map(({ value, label }, index) => (
                    <option value={value} key={index}>
                      {label}
                    </option>
                  ))}
                </SelectStyled>
                <SelectIcon color={Colors.black} />
              </SelectWrapper>
            );
          }}
        />
      </Grid>
    </label>
  );
};
