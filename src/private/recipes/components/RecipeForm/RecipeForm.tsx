"use client";

import { PreviewSummary } from "./PreviewSummary";
import { BasicInformationSection } from "./BasicInformationSection";
import { ToneCurveSection } from "./ToneCurveSection";
import { ExposureSection } from "./ExposureSection";
import { FilmAndColorSection } from "./FilmAndColorSection";
import { Actions } from "./Actions";
import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormInputs } from "./schema";

const RecipeForm = () => {
  const form = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      link: "",
      settings: {
        filmSimulation: "",
        dynamicRange: "",
        highlight: undefined,
        shadow: 0,
        color: 0,
        noiseReduction: 0,
        sharpening: undefined,
        clarity: 0,
        grainEffect: "",
        colorChromeEffect: "",
        colorChromeBlue: "",
        whiteBalance: "",
        temperature: "",
        red: 0,
        blue: 0,
        iso: "",
        exposureCompensation: "",
      },
    },
  });

  const onSubmit = (data: FormInputs) => {
    // Do something with the form values.
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Recipe Name & Link */}
        <BasicInformationSection />

        {/* Film & Color Section */}
        <FilmAndColorSection />

        {/* Tone Curve Section */}
        <ToneCurveSection />

        {/* Exposure Section */}
        <ExposureSection />

        {/* Preview Summary */}
        <PreviewSummary />

        {/* Actions */}
        <Actions />
      </form>
    </FormProvider>
  );
};

export { RecipeForm };
