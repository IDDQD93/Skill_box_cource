const cars = {
    bmw: {
        model: "X5",
        color: "black",
        year: 2022,
      },
      audi: {
        model: "A6",
        color: "grey",
        year: 2021,
      },
      mercedes: {
        model: "C-class",
        color: "white",
        year: 2023,
      },
    };
function getCarsNames() {
    for (const name in cars) {
        console.log(name);
    }
}

getCarsNames();