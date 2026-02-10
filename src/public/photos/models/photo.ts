type PhotoRecipeSettings = {
  filmSimulation?: string;
  dynamicRange?: string;
  highlight?: string;
  shadow?: string;
  color?: string;
  noiseReduction?: string;
  sharpening?: string;
  clarity?: string;
  grainEffect?: string;
  colorChromeEffect?: string;
  colorChromeBlue?: string;
  whiteBalance?: string;
  iso?: string;
  exposureCompensation?: string;
};

type PhotoRecipe = {
  name: string;
  settings: PhotoRecipeSettings;
  link?: string;
};

type Photo = {
  id: string;
  url: string;
  title: string;
  description?: string;
  recipe: PhotoRecipe;
};

export type { Photo, PhotoRecipe, PhotoRecipeSettings };
