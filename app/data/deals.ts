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
    requiresMembership: false,
  },

  {
    id: "2",
    restaurant: "McDonald's",
    description: "McDouble/McChicken Deal Meal\n(Sandwich/McNuggets/Fries/Drink)",
    price: 5,
    isVegetarian: false,
    url: "https://www.mcdonalds.com",
    requiresMembership: false,
  },

  {
    id: "3",
    restaurant: "McDonald's",
    description: "Double Cheeseburger\n(App Only/1x per Week)",
    price: 0.50,
    isVegetarian: false,
    url: "https://www.mcdonalds.com",
    requiresMembership: true,
  },

  {
    id: "4",
    restaurant: "Burger King",
    description: "Your Way Meal\n(Burger or Sandwich/Nuggets/Fries/Drink)",
    price: 5.00,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: true,
  },

  {
    id: "5",
    restaurant: "Burger King",
    description: "Whopper Jr. Duo",
    price: 5.00,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: true,
  },

  {
    id: "6",
    restaurant: "Burger King",
    description: "Duo Wrap Combo\n(Two Royal Crispy Wraps/Fries/Drink)",
    price: 7.99,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: true,
  },

  {
    id: "7",
    restaurant: "Burger King",
    description: "Wrap Flow Trio\n(Three Royal Crispy Wraps)",
    price: 7.49,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: true,
  },

  {
    id: "8",
    restaurant: "Burger King",
    description: "The King of Wrap\n(Royal Crispy Wrap/Whopper or Chicken Fries or Chicken Sandwich/Fries/Drink)",
    price: 9.49,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: false,
  },

  {
    id: "9",
    restaurant: "Taco Bell",
    description: "Classic Luxe Box\n(Beef Burrito/Beef Taco/Chips/Drink)",
    price: 5.00,
    isVegetarian: false,
    url: "https://www.tacobell.com",
    requiresMembership: false,
  },

  {
    id: "10",
    restaurant: "Taco Bell",
    description: "Supreme Luxe Box\n(Gordita Supreme/Beef Burrito/Beef Taco/Chips/Drink)",
    price: 7.00,
    isVegetarian: false,
    url: "https://www.tacobell.com",
    requiresMembership: false,
  },
  {
    id: "11",
    restaurant: "Taco Bell",
    description: "Premium Luxe Box\n(Chicken Burrito/Chicken Taco/Beef Taco/Chips/Drink)",
    price: 7.00,
    isVegetarian: false,
    url: "https://www.tacobell.com",
    requiresMembership: false,
  },
  {
    id: "12",
    restaurant: "Taco Bell",
    description: "Chalupa Bell Bundle\n(Chalupa Supreme/Burrito/Chicken Taco/Fries/Drink)",
    price: 9.99,
    isVegetarian: false,
    url: "https://www.tacobell.com",
    requiresMembership: false,
  },
  {
    id: "13",
    restaurant: "Wendy's",
    description: "Spicy Chicken Sandwich",
    price: 4.69,
    isVegetarian: false,
    url: "https://www.wendys.com",
    requiresMembership: true,
  },
  {
    id: "14",
    restaurant: "Wendy's",
    description: "Bacon Double Stack Biggie Bag\n(Bacon Burger/Nuggets/Fries/Drink)",
    price: 8.00,
    isVegetarian: false,
    url: "https://www.wendys.com",
    requiresMembership: false,
  },
  {
    id: "15",
    restaurant: "Wendy's",
    description: "Crispy Chicken BLT Biggie Bag\n(Chicken BLT/Nuggets/Fries/Drink)",
    price: 8.00,
    isVegetarian: false,
    url: "https://www.wendys.com",
    requiresMembership: false,
  },
  {
    id: "16",
    restaurant: "Wendy's",
    description: "Crispy Chicken Biggie Bag\n(Chicken Sandwich/Nuggets/Fries/Drink)",
    price: 7.00,
    isVegetarian: false,
    url: "https://www.wendys.com",
    requiresMembership: false,
  },
  {
    id: "17",
    restaurant: "Wendy's",
    description: "Jr. Bacon Cheeseburger Biggie Bag\n(Bacon Cheeseburger/Nuggets/Fries/Drink)",
    price: 7.00,
    isVegetarian: false,
    url: "https://www.wendys.com",
    requiresMembership: false,
  },

  {
    id: "18",
    restaurant: "Wendy's",
    description: "Double Stack Biggie Bag\n(Jr. Double Cheeseburger/Nuggets/Fries/Drink)",
    price: 7.00,
    isVegetarian: false,
    url: "https://www.wendys.com",
    requiresMembership: false,
  },

  {
    id: "19",
    restaurant: "Wendy's",
    description: "Jr. Cheeseburger\n(Jr. Cheeseburger/Nuggets/Fries/Drink)",
    price: 5.00,
    isVegetarian: false,
    url: "https://www.wendys.com",
    requiresMembership: false,
  },

  {
    id: "20",
    restaurant: "Applebee's",
    description: "Really Big Meal Deal\n(Burger or Sandwich/Fries/Drink)",
    price: 9.99,
    isVegetarian: false,
    url: "https://www.applebees.com",
    requiresMembership: false,
  },

  {
    id: "21",
    restaurant: "KFC",
    description: "Taste of KFC 2pc. Deal\n(2pc. Fried Chicken/Mashed Potatoes/Gravy/Biscuit)",
    price: 5.00,
    isVegetarian: false,
    url: "https://www.kfc.com",
    requiresMembership: false,
  },

  {
    id: "22",
    restaurant: "KFC",
    description: "Saucy Chicken Sandwich Combo\n(Chicken Sandwich/Side/Drink - Digital Exclusive)",
    price: 9.99,
    isVegetarian: false,
    url: "https://www.kfc.com",
    requiresMembership: false,
  },
];
