/** @jsxImportSource theme-ui */

import { ChangeEventHandler } from "react";
import { Box } from "theme-ui";

export function MainHeader({ text }: { text: string }) {
  return <h1 sx={{ textAlign: "center" }}>{text}</h1>;
}

export function Select({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <Box
      sx={{
        variant: "styles.box.flex.center",
        gap: "2rem",
      }}
    >
      <label
        htmlFor={`#${label}`}
        sx={{ fontSize: 1, color: "text.tables", textTransform: "capitalize" }}
      >
        {label}
      </label>
      <select
        id={`#${label}`}
        sx={{
          width: "16rem",
          borderRadius: 1,
          fontSize: "inherit",
          p: 1,
        }}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </Box>
  );
}
