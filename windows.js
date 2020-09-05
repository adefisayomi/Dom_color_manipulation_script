const alphaColors = [
  "aqua",
  "brown",
  "coral",
  "darkcyan",
  "e",
  "fuchsia",
  "green",
  "hotpink",
  "indianred",
  "j",
  "khaki",
  "lavender",
  "magenta",
  "navy",
  "orange",
  "pink",
  "q",
  "red",
  "sienna",
  "turquoise",
  "u",
  "violet",
  "wheat",
  "x",
  "yellow",
  "z",
];

const keys = document.getElementById("keys");

keys.addEventListener("keydown", (e) => {
  let input_value = document.getElementById("keys").value;
  for (let color of alphaColors) {
    if (e.key.toLowerCase() == color.substring(0, 1)) {
      document.getElementById("container").style.background = color;
      document.getElementById("dynamicColor").textContent = color
      
    }
    if (e.code == "Backspace") {
      let last_colorCode = input_value.substring(
        input_value.length - 2,
        input_value.length - 1
      );
      if (last_colorCode.toLowerCase() == color.substring(0, 1))
        {document.getElementById("container").style.background = color;
        document.getElementById("dynamicColor").textContent = color}
    }
  
  }

});
