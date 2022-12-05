import React from "react";

function ThemeSelector() {
  const themeValues = [
    "Dark",
    "Cupcake",
    "Bumblebee",
    "Emerald",
    "Corporate",
    "Synthwave",
    "Retro",
    "Cyberpunk",
    "Valentine",
    "Halloween",
    "Garden",
    "Forest",
    "Aqua",
    "Lofi",
    "Pastel",
    "Fantasy",
    "Wireframe",
    "Black",
    "Luxury",
    "Dracula",
    "Cmyk",
  ];

  return (
    <>
      <select className="select w-full max-w-xs" data-choose-theme>
        <option className="text-primary" value="">
          Default value
        </option>
        {themeValues.map((value) => (
          <option
            className="text-primary"
            key={value.toLowerCase()}
            value={value.toLowerCase()}
          >
            {value}
          </option>
        ))}
      </select>
    </>
  );
}

export default ThemeSelector;
