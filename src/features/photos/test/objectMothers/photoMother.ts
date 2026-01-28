import { faker } from "@faker-js/faker";
import { Photo, PhotoRecipe, PhotoRecipeSettings } from "../../models/photo";
import { generateValueOrUndefined } from "@/test/objectMothers";

const generatePhotoRecipeSettings = (
  overwrites: Partial<PhotoRecipeSettings> = {},
): PhotoRecipeSettings => {
  const defaults: PhotoRecipeSettings = {
    filmSimulation: generateValueOrUndefined(
      faker.helpers.arrayElement([
        "Provia",
        "Velvia",
        "Astia",
        "Classic Chrome",
        "Acros",
        "Eterna",
        "Classic Negative",
        "Pro Neg Hi",
        "Pro Neg Std",
      ]),
    ),
    dynamicRange: generateValueOrUndefined(
      faker.helpers.arrayElement(["100%", "200%", "400%"]),
    ),
    highlight: generateValueOrUndefined(
      faker.helpers.arrayElement(["-2", "-1", "0", "+1", "+2"]),
    ),
    shadow: generateValueOrUndefined(
      faker.helpers.arrayElement(["-2", "-1", "0", "+1", "+2"]),
    ),
    color: generateValueOrUndefined(
      faker.helpers.arrayElement(["-2", "-1", "0", "+1", "+2"]),
    ),
    noiseReduction: generateValueOrUndefined(
      faker.helpers.arrayElement(["-2", "-1", "0", "+1", "+2"]),
    ),
    sharpening: generateValueOrUndefined(
      faker.helpers.arrayElement(["-2", "-1", "0", "+1", "+2"]),
    ),
    clarity: generateValueOrUndefined(
      faker.helpers.arrayElement(["-2", "-1", "0", "+1", "+2"]),
    ),
    grainEffect: generateValueOrUndefined(
      faker.helpers.arrayElement(["Weak", "Strong", "Strong+"]),
    ),
    colorChromeEffect: generateValueOrUndefined(
      faker.helpers.arrayElement(["Weak", "Strong"]),
    ),
    colorChromeBlue: generateValueOrUndefined("On"),
    whiteBalance: generateValueOrUndefined("Auto"),
    iso: generateValueOrUndefined(
      faker.helpers.arrayElement(["Auto", "200", "400", "800", "1600"]),
    ),
    exposureCompensation: generateValueOrUndefined(
      faker.helpers.arrayElement(["-2", "-1", "0", "+1", "+2"]),
    ),
  };

  return { ...defaults, ...overwrites };
};

const generatePhotoRecipe = (
  overwrites: Partial<PhotoRecipe> = {},
): PhotoRecipe => {
  const defaults: PhotoRecipe = {
    name: faker.lorem.word(),
    settings: generatePhotoRecipeSettings(),
    link: generateValueOrUndefined(faker.internet.url()),
  };

  return { ...defaults, ...overwrites };
};

const generatePhoto = (overwrites: Partial<Photo> = {}): Photo => {
  const defaults: Photo = {
    id: faker.database.mongodbObjectId(),
    url: faker.image.url(),
    title: faker.lorem.sentence(),
    recipe: generatePhotoRecipe(),
    description: generateValueOrUndefined(faker.lorem.paragraph()),
  };

  return { ...defaults, ...overwrites };
};

const generatePhotoList = (count: number): Photo[] => {
  return Array.from({ length: count }, () => generatePhoto());
};

export {
  generatePhoto,
  generatePhotoRecipeSettings,
  generatePhotoRecipe,
  generatePhotoList,
};
