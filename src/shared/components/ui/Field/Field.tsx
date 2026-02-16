"use client";

import { cn } from "@/shared/lib/cn";
import { FieldSet } from "./FieldSet";
import { FieldError } from "./FieldError";
import { FieldSeparator } from "./FieldSeparator";
import { FieldDescription } from "./FieldDescription";
import { FieldTitle } from "./FieldTitle";
import { FieldLabel } from "./FieldLabel";
import { FieldContent } from "./FieldContent";
import { FieldRoot } from "./FieldRoot";
import { FieldLegend } from "./FieldLegend";
import { FieldGroup } from "./FieldGroup";

const Field = {
  Root: FieldRoot,
  FieldSet: FieldSet,
  Error: FieldError,
  Separator: FieldSeparator,
  Description: FieldDescription,
  Title: FieldTitle,
  Label: FieldLabel,
  Content: FieldContent,
  Legend: FieldLegend,
  Group: FieldGroup,
};

export { Field };
