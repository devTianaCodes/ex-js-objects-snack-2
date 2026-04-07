function deepCopy(value) {
    if (value === null || typeof value !== "object") {
      return value;
    }

    const copy = Array.isArray(value) ? [] : {};

    for (const key in value) {
      copy[key] = deepCopy(value[key]);
    }

    return copy;
  }

  const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
      console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
      name: "Hyur's Burgers",
      welcomeClient: () => {
        console.log("Benvenuto!");
      },
      address: {
        street: "Main Street",
        number: 123,
        showAddress: () => {
          console.log("Main Street 123");
        }
      },
      isOpen: true
    }
  };

  const chefCopy = deepCopy(chef);

  // Test
  chefCopy.name = "Chef Marco";
  chefCopy.restaurant.name = "Marco's Burgers";
  chefCopy.restaurant.address.street = "Second Street";
  chefCopy.restaurant.address.number = 456;

  console.log(chef.name); // Chef Hyur
  console.log(chefCopy.name); // Chef Marco

  console.log(chef.restaurant.name); // Hyur's Burgers
  console.log(chefCopy.restaurant.name); // Marco's Burgers

  console.log(chef.restaurant.address.street); // Main Street
  console.log(chefCopy.restaurant.address.street); // Second Street

  console.log(chef.restaurant.address.number); // 123
  console.log(chefCopy.restaurant.address.number); // 456

  chef.makeBurger(2);//Ecco 2 hamburger per te!
  chefCopy.makeBurger(3);//Ecco 3 hamburger per te!

  chef.restaurant.welcomeClient();//Benvenuto!
  chefCopy.restaurant.welcomeClient();//Benvenuto!

  chef.restaurant.address.showAddress();//Main Street 123
  chefCopy.restaurant.address.showAddress(); //Main Street 123

  //deepCopy() è ricorsiva perché richiama sé stessa dentro il for...in.
  //anche i metodi vengono copiati come proprietà modificando chefCopy, 
  // l’oggetto chef originale non cambia nelle parti annidate