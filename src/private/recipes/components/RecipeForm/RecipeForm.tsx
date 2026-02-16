"use client";

import { PreviewSummary } from "./PreviewSummary";
import { BasicInformationSection } from "./BasicInformationSection";
import { ToneCurveSection } from "./ToneCurveSection";
import { ExposureSection } from "./ExposureSection";
import { FilmAndColorSection } from "./FilmAndColorSection";
import { Actions } from "./Actions";

const RecipeForm = () => {
  return (
    <form className="flex flex-col gap-8">
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
  );
};

export { RecipeForm };
