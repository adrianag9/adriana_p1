let spania = {
  population: 9245,
  drink: "sangria"
};

let elvetia = {
  population: 5678,
  drink: "wine"
};

let italia = {
  population: 34566,
  drink: "juice"
};

const countries = [spania, elvetia, italia];
let a = countries.sort((a, b) => {
  return a.population - b.population;
});

console.log(a);
