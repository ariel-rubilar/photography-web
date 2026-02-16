"use client";

import * as React from "react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";

import { cn } from "@/shared/lib/cn/index";
import { SelectRoot } from "./SelectRoot";
import { SelectGroup } from "./SelectGroup";
import { SelectValue } from "./SelectValue";
import { SelectTrigger } from "./SelectTrigger";
import { SelectContent } from "./SelectContent";
import { SelectSeparator } from "./SelectSeparator";
import { SelectItem } from "./SelectItem";
import { SelectLabel } from "./SelectLabel";

const Select = {
  Root: SelectRoot,
  Group: SelectGroup,
  Value: SelectValue,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Separator: SelectSeparator,
  Item: SelectItem,
  Label: SelectLabel,
};

export { Select };
