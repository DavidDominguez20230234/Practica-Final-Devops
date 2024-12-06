const fs = require("fs");

test('El archivo index.html contiene "Hola Mundo"', () => {
  const html = fs.readFileSync("./index.html", "utf-8");
  expect(html).toMatch(/Hola Mundo/);
});
