export interface Deal {
  id: string;
  restaurant: string;
  description: string;
  price: number;
  isVegetarian: boolean;
  url?: string;
  requiresMembership: boolean;
  logoUrl: string;
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
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
  },

  {
    id: "2",
    restaurant: "McDonald's",
    description: "McDouble/McChicken Deal Meal\n(Sandwich/McNuggets/Fries/Drink)",
    price: 5,
    isVegetarian: false,
    url: "https://www.mcdonalds.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
  },

  {
    id: "3",
    restaurant: "McDonald's",
    description: "Double Cheeseburger\n(App Only/1x per Week)",
    price: 0.50,
    isVegetarian: false,
    url: "https://www.mcdonalds.com",
    requiresMembership: true,
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
  },

  {
    id: "4",
    restaurant: "Burger King",
    description: "Your Way Meal\n(Burger or Sandwich/Nuggets/Fries/Drink)",
    price: 5.00,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/Burger_King_1969_logo.svg",
  },

  {
    id: "5",
    restaurant: "Burger King",
    description: "Whopper Jr. Duo",
    price: 5.00,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/Burger_King_1969_logo.svg",
  },

  {
    id: "6",
    restaurant: "Burger King",
    description: "Duo Wrap Combo\n(Two Royal Crispy Wraps/Fries/Drink)",
    price: 7.99,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/Burger_King_1969_logo.svg",
  },

  {
    id: "7",
    restaurant: "Burger King",
    description: "Wrap Flow Trio\n(Three Royal Crispy Wraps)",
    price: 7.49,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/Burger_King_1969_logo.svg",
  },

  {
    id: "8",
    restaurant: "Burger King",
    description: "The King of Wrap\n(Royal Crispy Wrap/Whopper or Chicken Fries or Chicken Sandwich/Fries/Drink)",
    price: 9.49,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/Burger_King_1969_logo.svg",
  },

  {
    id: "9",
    restaurant: "Burger King",
    description: "BOGO Original Chicken Sandwich",
    price: 6.99,
    isVegetarian: false,
    url: "https://www.bk.com",
    requiresMembership: true,
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/Burger_King_1969_logo.svg",
  },

  {
    id: "10",
    restaurant: "Taco Bell",
    description: "Classic Luxe Box\n(Beef Burrito/Beef Taco/Chips/Drink)",
    price: 5.00,
    isVegetarian: false,
    url: "https://www.tacobell.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/b/b3/Taco_Bell_2016.svg",
  },

  {
    id: "11",
    restaurant: "Taco Bell",
    description: "Supreme Luxe Box\n(Gordita Supreme/Beef Burrito/Beef Taco/Chips/Drink)",
    price: 7.00,
    isVegetarian: false,
    url: "https://www.tacobell.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/b/b3/Taco_Bell_2016.svg",
  },
  {
    id: "12",
    restaurant: "Taco Bell",
    description: "Premium Luxe Box\n(Chicken Burrito/Chicken Taco/Beef Taco/Chips/Drink)",
    price: 7.00,
    isVegetarian: false,
    url: "https://www.tacobell.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/b/b3/Taco_Bell_2016.svg",
  },
  {
    id: "13",
    restaurant: "Taco Bell",
    description: "Chalupa Bell Bundle\n(Chalupa Supreme/Burrito/Chicken Taco/Fries/Drink)",
    price: 9.99,
    isVegetarian: false,
    url: "https://www.tacobell.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/b/b3/Taco_Bell_2016.svg",
  },
  {
    id: "14",
    restaurant: "Wendy's",
    description: "Spicy Chicken Sandwich",
    price: 4.69,
    isVegetarian: false,
    url: "https://www.wendys.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/3/32/Wendy%27s_full_logo_2012.svg",
  },
  {
    id: "15",
    restaurant: "Wendy's",
    description: "Bacon Double Stack Biggie Bag\n(Bacon Burger/Nuggets/Fries/Drink)",
    price: 8.00,
    isVegetarian: false,
    url: "https://www.wendys.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/3/32/Wendy%27s_full_logo_2012.svg",
  },
  {
    id: "16",
    restaurant: "Wendy's",
    description: "Crispy Chicken BLT Biggie Bag\n(Chicken BLT/Nuggets/Fries/Drink)",
    price: 8.00,
    isVegetarian: false,
    url: "https://www.wendys.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/3/32/Wendy%27s_full_logo_2012.svg",
  },
  {
    id: "17",
    restaurant: "Wendy's",
    description: "Crispy Chicken Biggie Bag\n(Chicken Sandwich/Nuggets/Fries/Drink)",
    price: 7.00,
    isVegetarian: false,
    url: "https://www.wendys.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/3/32/Wendy%27s_full_logo_2012.svg",
  },
  {
    id: "18",
    restaurant: "Wendy's",
    description: "Jr. Bacon Cheeseburger Biggie Bag\n(Bacon Cheeseburger/Nuggets/Fries/Drink)",
    price: 7.00,
    isVegetarian: false,
    url: "https://www.wendys.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/3/32/Wendy%27s_full_logo_2012.svg",
  },

  {
    id: "19",
    restaurant: "Wendy's",
    description: "Double Stack Biggie Bag\n(Jr. Double Cheeseburger/Nuggets/Fries/Drink)",
    price: 7.00,
    isVegetarian: false,
    url: "https://www.wendys.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/3/32/Wendy%27s_full_logo_2012.svg",
  },

  {
    id: "20",
    restaurant: "Wendy's",
    description: "Jr. Cheeseburger\n(Jr. Cheeseburger/Nuggets/Fries/Drink)",
    price: 5.00,
    isVegetarian: false,
    url: "https://www.wendys.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/3/32/Wendy%27s_full_logo_2012.svg",
  },

  {
    id: "21",
    restaurant: "Applebee's",
    description: "Really Big Meal Deal\n(Burger or Sandwich/Fries/Drink)",
    price: 9.99,
    isVegetarian: false,
    url: "https://www.applebees.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/Red_apple.svg",
  },

  {
    id: "22",
    restaurant: "KFC",
    description: "Taste of KFC 2pc. Deal\n(2pc. Fried Chicken/Mashed Potatoes/Gravy/Biscuit)",
    price: 5.00,
    isVegetarian: false,
    url: "https://www.kfc.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/5/57/KFC_logo-image.svg",
  },

  {
    id: "23",
    restaurant: "KFC",
    description: "Saucy Chicken Sandwich Combo\n(Chicken Sandwich/Side/Drink - Digital Exclusive)",
    price: 9.99,
    isVegetarian: false,
    url: "https://www.kfc.com",
    requiresMembership: false,
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/5/57/KFC_logo-image.svg",
  },
];
