const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

// siccome abbiamo un oggetto Chef che ha tra le sua
//proprieta anche una funzione, meglio utilizzare il spread operator: {...chef}


const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

//oggetto restaurant invece contiene come proprieta un altro oggetto adress e un 
// l oggetto nativo complesso Date. In questo caso dobbiamo utillizzare la deep cpy per integrare anche i oggetti complessi
// e quindi utiliziamo la funzione structuredClone(restaurant)