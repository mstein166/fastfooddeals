export interface Deal {
  id: string;
  restaurant: string;
  description: string;
  price: number;
  isVegetarian: boolean;
  url?: string;
  requiresMembership: boolean;
}

export const deals: Deal[] = [
  {
    id: "1",
    restaurant: "McDonald's",
    description: "Big Mac Meal\n(Big Mac/Fries/Drink)",
    price: 5.99,
    isVegetarian: false,
    url: "https://www.mcdonalds.com",
    requiresMembership: true,
  },

  {
    id: "2",
    restaurant: "McDonald's",
    description: "McDouble/McChicken Deal Meal\n(Sandwich/McNuggets/Fries/Drink)",
    price: 5,
    isVegetarian: false,
    url: "https://www.mcdonalds.com",
    requiresMembership: true,
  },

  {
    id: "3",
    restaurant: "Burger King",
    description: "Your Way Meal\n(Burger or Sandwich/Nuggets/Fries/Drink)",
    price: 5.00,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: true,
  },

  {
    id: "4",
    restaurant: "Burger King",
    description: "Whopper Jr. Duo)",
    price: 5.00,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: true,
  },

  {
    id: "5",
    restaurant: "Burger King",
    description: "Duo Wrap Combo\n(Two Royal Crispy Wraps/Fries/Drink)",
    price: 7.99,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: true,
  },

  {
    id: "6",
    restaurant: "Burger King",
    description: "Wrap Flow Trio\n(Three Royal Crispy Wraps)",
    price: 7.49,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: true,
  },

  {
    id: "7",
    restaurant: "Burger King",
    description: "The King of Wrap\n(Royal Crispy Wrap/Whopper or Chicken Fries or Chicken Sandwich/Fries/Drink)",
    price: 9.49,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: true,
  },

  {
    id: "8",
    restaurant: "Taco Bell",
    description: "Classic Luxe Box\n(Beef Burrito/Beef Taco/Chips/Drink)",
    price: 5.00,
    isVegetarian: false,
    url: "https://www.tacobell.com",
    requiresMembership: true,
  },

  {
    id: "9",
    restaurant: "Taco Bell",
    description: "Supreme Luxe Box\n(Gordita Supreme/Beef Burrito/Beef Taco/Chips/Drink)",
    price: 7.00,
    isVegetarian: false,
    url: "https://www.tacobell.com",
    requiresMembership: true,
  },
  {
    id: "10",
    restaurant: "Taco Bell",
    description: "Premium Luxe Box\n(Chicken Burrito/Chicken Taco/Beef Taco/Chips/Drink)",
    price: 7.00,
    isVegetarian: false,
    url: "https://www.tacobell.com",
    requiresMembership: true,
  },
  {
    id: "11",
    restaurant: "KFC",
    description: "Famous Bowl",
    price: 5.00,
    isVegetarian: false,
    url: "https://www.kfc.com",
    requiresMembership: true,
  },
  {
    id: "12",
    restaurant: "Wendy's",
    description: "Spicy Chicken Sandwich",
    price: 4.69,
    isVegetarian: false,
    url: "https://www.wendys.com",
    requiresMembership: true,
  },
  {
    id: "13",
    restaurant: "Chipotle",
    description: "Veggie Burrito Bowl",
    price: 7.50,
    isVegetarian: true,
    url: "https://www.chipotle.com",
    requiresMembership: true,
  },
  {
    id: "14",
    restaurant: "Domino's",
    description: "Medium 2-Topping Pizza",
    price: 5.99,
    isVegetarian: false,
    url: "https://www.dominos.com",
    requiresMembership: true,
  },
  {
    id: "15",
    restaurant: "Panera Bread",
    description: "Mediterranean Veggie Sandwich",
    price: 6.99,
    isVegetarian: true,
    url: "https://www.panerabread.com",
    requiresMembership: true,
  },

  {
    id: "16",
    restaurant: "Applebee's",
    description: "Really Big Meal Deal\n(Burger or Sandwich/Fries/Drink)",
    price: 9.99,
    isVegetarian: false,
    url: "https://www.applebees.com",
    requiresMembership: true,
  },
];
