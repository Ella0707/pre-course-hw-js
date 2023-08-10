const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

let fruct = () => {
  const apelsin = words.indexOf("апельсин");
  if (apelsin >= 0) {
    console.log("Ура! нашел");
  } else {
    console.log("Придется поискать в другом магазине…");
  }
};

fruct();
