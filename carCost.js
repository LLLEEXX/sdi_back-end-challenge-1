const cars = [
  { size: "S", capacity: 5, price: 5000 },
  { size: "M", capacity: 10, price: 8000 },
  { size: "L", capacity: 15, price: 12000 },
];

let number = 20; //USER INPUT--------------------------------------------

let finalI = 0,
  finalJ = 0,
  finalK = 0;

  let cheapest = Infinity;

for (let i = 0; i <= number / cars[0].capacity; i++) {
  for (let j = 0; j <= number / cars[1].capacity; j++) {
    for (let k = 0; k <= number / cars[2].capacity; k++) {
        
      const totalSeats =
        i * cars[2].capacity + j * cars[1].capacity + k * cars[0].capacity;
      const totalCost =
        i * cars[2].price + j * cars[1].price + k * cars[0].price;

      if (totalSeats >= number && totalCost < cheapest) {
        cheapest = totalCost;
        finalI = i;
        finalJ = j;
        finalK = k;
      }
    }
  }
}

finalI > 0 ? console.log(`${cars[0].size} X ${finalI}`) : null;
finalJ > 0 ? console.log(`${cars[1].size} X ${finalJ}`) : null;
finalK > 0 ? console.log(`${cars[2].size} X ${finalK}`) : null;
console.log(`Total cost: ${cheapest}`);

