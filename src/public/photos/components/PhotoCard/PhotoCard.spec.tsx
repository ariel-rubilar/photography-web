import { render, screen } from "@testing-library/react";
import { generatePhoto } from "../../test/objectMothers";
import { PhotoCard } from "./PhotoCard";

describe("PhotoCard", () => {
  it("should render image with correct alt text", () => {
    const photo = generatePhoto({ title: "Sunset over the mountains" });

    render(<PhotoCard photo={photo} />);
    const image = screen.getByRole("img", {
      name: /sunset over the mountains/i,
    });

    expect(image).toBeTruthy();
  });

  it("should show recipe name and film simulation on hover", () => {
    const photo = generatePhoto({
      recipe: {
        name: "Cinematic Look",
        settings: { filmSimulation: "Classic Chrome" },
      },
    });

    render(<PhotoCard photo={photo} />);
    const card = screen.getByRole("button", {
      name: /view cinematic look/i,
    });

    card.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));

    const recipeName = screen.getByText(/cinematic look/i);
    const filmSimulation = screen.getByText(/classic chrome/i);

    expect(recipeName).toBeTruthy();
    expect(filmSimulation).toBeTruthy();
  });
});
