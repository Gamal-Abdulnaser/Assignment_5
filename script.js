hexaArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
colorArray = [];

Math.floor(Math.random() * hexaArray.length);

for (let i = 0; i < 6; i++) {
  colorArray.push(hexaArray[Math.floor(Math.random() * hexaArray.length)]);
}

let lastColor = `#${colorArray.join("")}`;

console.log(lastColor);
document.body.style.backgroundColor = lastColor;
