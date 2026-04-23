"use client";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
interface Props {
  label: string;
  placeholder?: string;
  icon?: React.ReactNode;
  error?: string;
  type?: string;
}
const CustomAuthFormInput = ({
  label,
  placeholder,
  icon,
  error,
  type = "text",
  ...otherProps
}: Props & { type?: string }) => {
  const [actualType, setActualType] = useState(type);
  return (
    <Field className="w-full">
      <FieldLabel htmlFor="inline-start-input">{label}</FieldLabel>
      <InputGroup
        className={cn(
          "min-h-12",
          error &&
            "border-red-600 focus:ring-red-600 focus-within:ring-red-600 focus-within:border-red-600",
        )}
      >
        <InputGroupInput
          id="inline-start-input"
          placeholder={placeholder}
          type={actualType}
          {...otherProps}
        />
        <InputGroupAddon align="inline-start">{icon}</InputGroupAddon>
        {type === "password" && (
          <InputGroupAddon align="inline-end" className="cursor-pointer">
            {actualType === "password" ? (
              <Eye
                onClick={() => setActualType("text")}
                className="text-muted-foreground"
              />
            ) : (
              <EyeOff
                onClick={() => setActualType("password")}
                className="text-muted-foreground"
              />
            )}
          </InputGroupAddon>
        )}
      </InputGroup>
      {error && <p className="text-red-600 text-xs">{error}</p>}
    </Field>
  );
};

export default CustomAuthFormInput;
