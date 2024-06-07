const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json());

let cocktails = [
  {
    name: "Bissap",
    img: "https://i0.wp.com/cuisinovores.com/wp-content/uploads/2022/05/photo_bissap_boisson_hibiscus_cuisinovores.jpg?fit=400%2C400&ssl=1",
    description:
      "Le bissap est une boisson traditionnelle très populaire en Afrique de l'Ouest, notamment au Sénégal, au Mali, en Guinée et au Burkina Faso. Elle est préparée à partir des fleurs séchées de l'hibiscus sabdariffa, une plante également connue sous le nom de roselle.",
    ingredients: [
      { name: "Sucre", quantity: 10 },
      { name: "Menthe", quantity: 5 },
      { name: "Ananas", quantity: 10 },
    ],
  },
  {
    name: "Gingembre",
    img: "https://villamaasai.fr/wp-content/uploads/2020/04/histoire-recette-gnamankoudji.jpg",
    description:
      "Le gingembre (Zingiber officinale) est une plante tropicale appartenant à la famille des Zingibéracées, dont le rhizome est couramment utilisé comme épice et remède naturel. Originaire d'Asie du Sud-Est, le gingembre est cultivé dans de nombreuses régions chaudes du monde, notamment en Inde, en Chine et en Afrique.",
    ingredients: [
      { name: "Sucre", quantity: 10 },
      { name: "Gingembre", quantity: 10 },
    ],
  },
  {
    name: "Tomi",
    img: "https://www.newstoriesafrica.com/wp-content/uploads/2022/12/jus-de-tamarin.png",
    description:
      "Le tamarin (Tamarindus indica) est un arbre tropical originaire d'Afrique de l'Est, mais largement cultivé dans les régions tropicales et subtropicales du monde, notamment en Inde, en Asie du Sud-Est et en Amérique latine. L'arbre produit des gousses comestibles qui sont prisées pour leur pulpe aigre-douce.",
    ingredients: [{ name: "", quantity: 10 }],
  },
];

// Get all cocktails
app.get("/cocktails", (req, res) => {
  res.json(cocktails);
});

// Get a single beverage by name
app.get("/cocktails/:name", (req, res) => {
  const beverage = cocktails.find(
    (b) => b.name.toLowerCase() === req.params.name.toLowerCase()
  );
  if (beverage) {
    res.json(beverage);
  } else {
    res.status(404).send("Beverage not found");
  }
});

// Create a new beverage
app.post("/cocktails", (req, res) => {
  const newBeverage = req.body;
  cocktails.push(newBeverage);
  res.status(201).json(newBeverage);
});

// Update a beverage by name
app.put("/cocktails/:name", (req, res) => {
  const index = cocktails.findIndex(
    (b) => b.name.toLowerCase() === req.params.name.toLowerCase()
  );
  if (index !== -1) {
    cocktails[index] = req.body;
    res.json(cocktails[index]);
  } else {
    res.status(404).send("Beverage not found");
  }
});

// Delete a beverage by name
app.delete("/cocktails/:name", (req, res) => {
  const index = cocktails.findIndex(
    (b) => b.name.toLowerCase() === req.params.name.toLowerCase()
  );
  if (index !== -1) {
    const deletedBeverage = cocktails.splice(index, 1);
    res.json(deletedBeverage);
  } else {
    res.status(404).send("Beverage not found");
  }
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
