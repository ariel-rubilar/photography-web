import * as z from "zod";

export const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  link: z.url("Invalid URL").optional(),
  settings: z.object({
    filmSimulation: z.string().optional(),
    dynamicRange: z.string().optional(),
    highlight: z.number().optional(),
    shadow: z.number().optional(),
    color: z.number().optional(),
    noiseReduction: z.number().optional(),
    sharpening: z.number().optional(),
    clarity: z.number().optional(),
    grainEffect: z.string().optional(),
    colorChromeEffect: z.string().optional(),
    colorChromeBlue: z.string().optional(),
    whiteBalance: z.string().optional(),
    temperature: z.string().optional(),
    red: z.number().optional(),
    blue: z.number().optional(),
    iso: z.string().optional(),
    exposureCompensation: z.string().optional(),
  }),
});

export type FormValues = z.infer<typeof formSchema>;
