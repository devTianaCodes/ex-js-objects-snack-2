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
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

//il metodo migliore per clonare e spread operatior perche anbbiamo sia fmetodi
// Ssi oggerri annidati

const copyChef = {
    ...chef,
    restaurant: {
        ...chef.restaurant,
        address:{
            ...chef.restaurant.address

        }
    }
}
 console.log(copyChef);
