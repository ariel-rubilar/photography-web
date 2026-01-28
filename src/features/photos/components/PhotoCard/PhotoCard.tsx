"use client";

import { Photo } from "@/features/photos/models/photo";
import Image from "next/image";
import { useState } from "react";

const PhotoCard = ({ photo }: { photo: Photo }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative w-full aspect-4/3 overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`View ${photo.recipe.name}`}
    >
      <Image
        src={photo.url}
        alt={photo.title}
        fill
        className={`object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />

      <div
        className={`absolute inset-0 bg-popover/85 flex flex-col justify-center items-start p-4 overflow-y-auto transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {photo.recipe && (
          <>
            <h3 className="font-mono text-basetext-accent-foreground mb-1">
              {photo.recipe.name}
            </h3>
            <p className="font-mono text-sm text-secondary-foreground mb-3">
              {photo.recipe.settings.filmSimulation}
            </p>
            <div className="w-full space-y-1 mb-3">
              {photo.recipe.settings.dynamicRange && (
                <div className="font-mono text-xs text-muted-foreground">
                  DR: {photo.recipe.settings.dynamicRange}
                </div>
              )}
              {photo.recipe.settings.highlight && (
                <div className="font-mono text-xs text-muted-foreground">
                  H: {photo.recipe.settings.highlight}
                </div>
              )}
              {photo.recipe.settings.shadow && (
                <div className="font-mono text-xs text-muted-foreground">
                  S: {photo.recipe.settings.shadow}
                </div>
              )}
              {photo.recipe.settings.color && (
                <div className="font-mono text-xs text-muted-foreground">
                  Color: {photo.recipe.settings.color}
                </div>
              )}
              {photo.recipe.settings.noiseReduction && (
                <div className="font-mono text-xs text-muted-foreground">
                  NR: {photo.recipe.settings.noiseReduction}
                </div>
              )}
              {photo.recipe.settings.sharpening && (
                <div className="font-mono text-xs text-muted-foreground">
                  Sharp: {photo.recipe.settings.sharpening}
                </div>
              )}
              {photo.recipe.settings.clarity && (
                <div className="font-mono text-xs text-muted-foreground">
                  Clarity: {photo.recipe.settings.clarity}
                </div>
              )}
              {photo.recipe.settings.grainEffect && (
                <div className="font-mono text-xs text-muted-foreground">
                  Grain: {photo.recipe.settings.grainEffect}
                </div>
              )}
              {photo.recipe.settings.colorChromeEffect && (
                <div className="font-mono text-xs text-muted-foreground">
                  CCE: {photo.recipe.settings.colorChromeEffect}
                </div>
              )}
              {photo.recipe.settings.colorChromeBlue && (
                <div className="font-mono text-xs text-muted-foreground">
                  CCE Blue: {photo.recipe.settings.colorChromeBlue}
                </div>
              )}
              {photo.recipe.settings.whiteBalance && (
                <div className="font-mono text-xs text-muted-foreground">
                  WB: {photo.recipe.settings.whiteBalance}
                </div>
              )}
              {photo.recipe.settings.iso && (
                <div className="font-mono text-xs text-muted-foreground">
                  ISO: {photo.recipe.settings.iso}
                </div>
              )}
              {photo.recipe.settings.exposureCompensation && (
                <div className="font-mono text-xs text-muted-foreground">
                  EV: {photo.recipe.settings.exposureCompensation}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { PhotoCard };
