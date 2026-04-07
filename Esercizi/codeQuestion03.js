const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

//abbiamo 3 oggetti complessi, primo esistente, piu altri due copiati con deep copy structuredClone

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);