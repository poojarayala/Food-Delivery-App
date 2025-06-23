const hotels = [
  {
    id: 1,
    name: "Delight Dhaba",
    cuisine: "North Indian, Andhra",
    location: "Mangalagiri, Vijayawada",
    rating: 3.8,
    deliveryTime: "30 MINS",
    price: "₹400 for two",
    image: "dd.jpeg",
    menu: {
      Biryani: [
          { 
              item: "Chicken Biryani", 
              price: 200,
            },
            
        { item: "Mutton Biryani", price: 320 }
      ],
      Veg: [
        { item: "Paneer Butter Masala", price: 180 },
        { item: "Dal Tadka", price:150 },
        { item: "Butter Naan", price: 40 },
        { item: "Garlic Naan", price: 50 },
        { item: "Tandoori Roti", price: 30 }
      ],
      NonVeg: [
        { item: "Butter Chicken", price: 280 },
        { item: "Chicken 65", price: 200 },
        { item: "Tandoori Chicken (Full)", price: 420 },
        { item: "Tandoori Chicken (Half)", price: 220 }
      ],
      Drinks: [
        { item: "Lassi", price: 60 },
        { item: "Soft Drinks", price: 40 }
      ]
    }
  },
  {
    id: 2,
    name: "Sharma Dhaba",
    cuisine: "North Indian",
    location: "Mangalagiri, Vijayawada",
    rating: 3.7,
    deliveryTime: "25 MINS",
    price: "₹400 for two",
    image: "sd.jpeg",
    menu: {
      Veg: [
        { item: "Dal Makhani", price: 150 },
        { item: "Butter Naan", price: 40 }
      ]
    }
  },
  {
      id: 3,
      name: "Mandakini Restaurant",
      cuisine: "Multi-Cuisine",
      location: "Mangalagiri, Vijayawada",
      rating: 4.1,
      deliveryTime: "40 MINS",
      price: "₹600 for two",
      image: "mandakini.jpeg",
      menu: {
        Biryani: [
          { item: "Chicken Biryani", price: 250 },
          { item: "Mutton Biryani", price: 350 },
          { item: "Egg Biryani", price: 200 },
          { item: "Prawn Biryani", price: 400 }
        ],
        Veg: [
          { item: "Paneer Butter Masala", price: 220 },
          { item: "Dal Tadka", price: 180 },
          { item: "Veg Kolhapuri", price: 200 },
          { item: "Malai Kofta", price: 230 },
          { item: "Aloo Gobi", price: 170 }
        ],
        NonVeg: [
          { item: "Butter Chicken", price: 320 },
          { item: "Chicken 65", price: 250 },
          { item: "Mutton Curry", price: 370 },
          { item: "Prawn Masala", price: 420 },
          { item: "Fish Curry", price: 350 }
        ],
        Drinks: [
          { item: "Lassi", price: 60 },
          { item: "Soft Drinks", price: 50 },
          { item: "Cold Coffee", price: 90 },
          { item: "Masala Chai", price: 40 }
        ]
      }
    },
    {
      id: 4,
      name: "Zam Zam Restaurant",
      cuisine: "Indian, Mughlai",
      location: "Mangalagiri, Vijayawada",
      rating: 4.2,
      deliveryTime: "35 MINS",
      price: "₹500 for two",
      image: "zam zam.jpeg",
      menu: {
        Biryani: [
          { item: "Chicken Biryani", price: 240 },
          { item: "Mutton Biryani", price: 350 },
          { item: "Egg Biryani", price: 190 },
          { item: "Special Chicken Biryani", price: 280 },
          { item: "Hyderabadi Biryani", price: 320 }
        ],
        Veg: [
          { item: "Paneer Tikka Masala", price: 230 },
          { item: "Veg Manchurian", price: 180 },
          { item: "Dal Makhani", price: 200 },
          { item: "Aloo Jeera", price: 160 },
          { item: "Mixed Veg Curry", price: 210 }
        ],
        NonVeg: [
          { item: "Butter Chicken", price: 300 },
          { item: "Chicken 65", price: 260 },
          { item: "Mutton Rogan Josh", price: 380 },
          { item: "Prawn Masala", price: 400 },
          { item: "Fish Fry", price: 320 }
        ],
        Starters: [
          { item: "Chicken Lollipop", price: 220 },
          { item: "Tandoori Chicken", price: 340 },
          { item: "Paneer Tikka", price: 260 },
          { item: "Hara Bhara Kabab", price: 180 },
          { item: "Crispy Corn", price: 150 }
        ],
        Drinks: [
          { item: "Sweet Lassi", price: 70 },
          { item: "Mango Shake", price: 80 },
          { item: "Cold Coffee", price: 100 },
          { item: "Masala Chai", price: 50 }
        ]
      }
    },
    {
      id: 5,
      name: "Bismillah Biryani",
      cuisine: "Biryani, Indian",
      location: "Mangalagiri, Vijayawada",
      rating: 4.0,
      deliveryTime: "40 MINS",
      price: "₹450 for two",
      image: "bis.jpg",
      menu: {
        Biryani: [
          { item: "Chicken Biryani", price: 250 },
          { item: "Mutton Biryani", price: 370 },
          { item: "Egg Biryani", price: 200 },
          { item: "Special Chicken Biryani", price: 290 },
          { item: "Hyderabadi Biryani", price: 330 }
        ],
        Veg: [
          { item: "Paneer Butter Masala", price: 240 },
          { item: "Dal Tadka", price: 180 },
          { item: "Aloo Gobi", price: 170 },
          { item: "Mix Veg Curry", price: 220 },
          { item: "Palak Paneer", price: 260 }
        ],
        NonVeg: [
          { item: "Butter Chicken", price: 320 },
          { item: "Chicken 65", price: 270 },
          { item: "Mutton Curry", price: 400 },
          { item: "Fish Fry", price: 350 },
          { item: "Prawns Masala", price: 420 }
        ],
        Starters: [
          { item: "Chicken Lollipop", price: 230 },
          { item: "Tandoori Chicken", price: 350 },
          { item: "Paneer Tikka", price: 280 },
          { item: "Crispy Corn", price: 160 },
          { item: "Spring Rolls", price: 140 }
        ],
        Drinks: [
          { item: "Mango Lassi", price: 90 },
          { item: "Cold Coffee", price: 110 },
          { item: "Masala Chai", price: 60 },
          { item: "Sweet Lassi", price: 80 }
        ]
      }
    },
    {
      id: 7,
      name: "Barkaas Arabic Restaurant",
      location: "Mangalagiri, Vijayawada",
      cuisine: "Arabic, Biryani, Grilled Chicken",
      rating: "4.5",
      deliveryTime: "30 mins",
      price: "₹400 for two",
      image: "barkas.jpeg",
      menu: {
        "Starters": [
          { item: "Chicken Shawarma", price: 180 },
          { item: "Mutton Shawarma", price: 220 },
          { item: "Hummus with Pita Bread", price: 150 },
          { item: "Falafel", price: 140 }
        ],
        "Biryani": [
          { item: "Mandi Biryani (Chicken)", price: 360 },
          { item: "Mandi Biryani (Mutton)", price: 480 },
          { item: "Majboos Biryani", price: 400 },
          { item: "Kabsa Biryani", price: 420 }
        ],
        "Grill & BBQ": [
          { item: "Grilled Chicken (Half)", price: 280 },
          { item: "Grilled Chicken (Full)", price: 520 },
          { item: "Mutton Kebab", price: 350 },
          { item: "Chicken Kebab", price: 300 }
        ],
        "Main Course": [
          { item: "Shish Taouk", price: 300 },
          { item: "Laham Mandi", price: 500 }
        ],
        "Beverages": [
          { item: "Lemon Mint Cooler", price: 120 },
          { item: "Arabic Tea", price: 60 },
          { item: "Fresh Pomegranate Juice", price: 180 }
        ],
        "Desserts": [
          { item: "Baklava", price: 160 },
          { item: "Kunafa", price: 200 }
        ]
      }
    },
    {
      id: 8,
      name: "Senapathi Military Hotel",
      location: "Mangalagiri, Vijayawada",
      cuisine: "Andhra, Military Style, Non-Veg Specials",
      rating: "4.3",
      deliveryTime: "35 mins",
      price: "₹350 for two",
      image: "s.jpeg",
      menu: {
        "Starters": [
          { item: "Mutton Pepper Fry", price: 320 },
          { item: "Paya Soup", price: 180 },
          { item: "Chicken Lollipop", price: 260 },
          { item: "Mutton Liver Fry", price: 300 },
          { item: "Andhra Chilli Chicken", price: 280 }
        ],
        "Biryani": [
          { item: "Mutton Biryani", price: 420 },
          { item: "Chicken Biryani", price: 320 },
          { item: "Natu Kodi Biryani", price: 450 },
          { item: "Kheema Biryani", price: 400 }
        ],
        "Curries": [
          { item: "Mutton Curry", price: 380 },
          { item: "Chicken Curry", price: 320 },
          { item: "Natu Kodi Pulusu", price: 400 },
          { item: "Mutton Keema Curry", price: 360 },
          { item: "Andhra Prawns Curry", price: 350 }
        ],
        "Tandoori & Grills": [
          { item: "Tandoori Chicken (Half)", price: 300 },
          { item: "Tandoori Chicken (Full)", price: 550 },
          { item: "Mutton Seekh Kebab", price: 400 },
          { item: "Andhra Spicy Kebab", price: 350 }
        ],
        "Beverages": [
          { item: "Buttermilk", price: 50 },
          { item: "Majjiga", price: 40 },
          { item: "Nannari Sharbat", price: 80 }
        ],
        "Desserts": [
          { item: "Double Ka Meetha", price: 140 },
          { item: "Gulab Jamun", price: 120 }
        ]
      }
    },
    {
      id: 9,
      name: "Country Cuisines",
      location: "Mangalagiri, Vijayawada",
      cuisine: "Indian, Chinese, Andhra, North Indian",
      rating: "4.5",
      deliveryTime: "30 mins",
      price: "₹300 for two",
      image: "c.jpeg",
      menu: {
        "Starters": [
          { item: "Chicken 65", price: 260 },
          { item: "Chilli Paneer", price: 220 },
          { item: "Apollo Fish", price: 320 },
          { item: "Ginger Chicken", price: 280 },
          { item: "Crispy Corn", price: 180 }
        ],
        "Biryani": [
          { item: "Hyderabadi Chicken Biryani", price: 340 },
          { item: "Hyderabadi Mutton Biryani", price: 420 },
          { item: "Prawn Biryani", price: 380 },
          { item: "Egg Biryani", price: 250 }
        ],
        "Main Course": [
          { item: "Butter Chicken", price: 360 },
          { item: "Paneer Butter Masala", price: 300 },
          { item: "Dal Tadka", price: 220 },
          { item: "Mutton Rogan Josh", price: 420 },
          { item: "Andhra Kodi Kura", price: 350 }
        ],
        "Chinese": [
          { item: "Chicken Noodles", price: 260 },
          { item: "Egg Fried Rice", price: 220 },
          { item: "Chilli Garlic Fried Rice", price: 250 },
          { item: "Schezwan Chicken", price: 290 }
        ],
        "Beverages": [
          { item: "Masala Chai", price: 50 },
          { item: "Fresh Lime Soda", price: 70 },
          { item: "Cold Coffee", price: 120 }
        ],
        "Desserts": [
          { item: "Chocolate Brownie", price: 160 },
          { item: "Gajar Ka Halwa", price: 140 }
        ]
      }
    },
    {
      id: 10,
      name: "Hotel Taj",
      location: "Mangalagiri, Vijayawada",
      cuisine: "Hyderabadi, North Indian, Chinese",
      rating: "4.6",
      deliveryTime: "25 mins",
      price: "₹350 for two",
      image: "taj.jpeg",
      menu: {
        "Starters": [
          { item: "Tandoori Chicken (Full)", price: 450 },
          { item: "Chicken Tikka", price: 280 },
          { item: "Chilli Prawns", price: 320 },
          { item: "Paneer Tikka", price: 260 },
          { item: "Crispy Baby Corn", price: 220 }
        ],
        "Biryani": [
          { item: "Taj Special Chicken Biryani", price: 380 },
          { item: "Mutton Dum Biryani", price: 420 },
          { item: "Prawn Biryani", price: 400 },
          { item: "Egg Biryani", price: 260 }
        ],
        "Main Course": [
          { item: "Butter Naan", price: 50 },
          { item: "Garlic Naan", price: 70 },
          { item: "Butter Chicken Masala", price: 360 },
          { item: "Paneer Butter Masala", price: 300 },
          { item: "Mutton Rogan Josh", price: 420 }
        ],
        "Chinese": [
          { item: "Chicken Fried Rice", price: 250 },
          { item: "Egg Schezwan Rice", price: 220 },
          { item: "Veg Hakka Noodles", price: 200 },
          { item: "Chilli Chicken", price: 280 }
        ],
        "Beverages": [
          { item: "Mango Lassi", price: 90 },
          { item: "Cold Coffee", price: 120 },
          { item: "Sweet Lime Juice", price: 80 }
        ],
        "Desserts": [
          { item: "Gulab Jamun", price: 100 },
          { item: "Rasmalai", price: 120 }
        ]
      }
    },
    {
      id: 11,
      name: "Alfa Arabian Restaurant",
      location: "Guntur",
      cuisine: "Arabian, Mughlai, North Indian",
      rating: "4.5",
      deliveryTime: "30 mins",
      price: "₹400 for two",
      image: "a.jpeg",
      menu: {
        "Arabian Starters": [
          { item: "Chicken Mandi", price: 420 },
          { item: "Mutton Mandi", price: 480 },
          { item: "Grilled Chicken (Full)", price: 550 },
          { item: "Shawarma Roll", price: 180 },
          { item: "Pita Bread with Hummus", price: 200 }
        ],
        "Biryani Specials": [
          { item: "Alfa Special Mutton Biryani", price: 460 },
          { item: "Chicken Dum Biryani", price: 380 },
          { item: "Prawn Biryani", price: 420 },
          { item: "Egg Biryani", price: 260 },
          { item: "Vegetable Biryani", price: 240 }
        ],
        "Tandoor & Kebabs": [
          { item: "Tandoori Chicken (Full)", price: 480 },
          { item: "Mutton Seekh Kebab", price: 420 },
          { item: "Chicken Tikka Kebab", price: 360 },
          { item: "Paneer Tikka", price: 300 },
          { item: "Afghani Chicken", price: 400 }
        ],
        "Main Course": [
          { item: "Butter Chicken Masala", price: 380 },
          { item: "Mutton Rogan Josh", price: 450 },
          { item: "Shahi Paneer", price: 340 },
          { item: "Dal Makhani", price: 280 },
          { item: "Tandoori Roti", price: 40 }
        ],
        "Chinese & Fast Food": [
          { item: "Chicken Fried Rice", price: 250 },
          { item: "Egg Schezwan Rice", price: 230 },
          { item: "Veg Manchurian", price: 220 },
          { item: "Chilli Chicken", price: 300 },
          { item: "Chicken 65", price: 320 }
        ],
        "Beverages": [
          { item: "Lassi (Sweet/Salted)", price: 100 },
          { item: "Mint Lemonade", price: 120 },
          { item: "Cold Coffee", price: 140 },
          { item: "Arabic Tea", price: 90 }
        ],
        "Desserts": [
          { item: "Baklava", price: 220 },
          { item: "Kunafa", price: 250 },
          { item: "Rasmalai", price: 150 },
          { item: "Gulab Jamun", price: 120 },
          { item: "Basbousa (Semolina Cake)", price: 180 }
        ]
      }
    },
    {
      id: 6,
      name: "Burger Babai",
      location: "Mangalagiri, Vijayawada",
      cuisine: "Fast Food, Burgers, Beverages",
      rating: "4.4",
      deliveryTime: "25 mins",
      price: "₹300 for two",
      image: "bb.jpeg",
      menu: {
        "Signature Burgers": [
          { item: "Classic Chicken Burger", price: 180 },
          { item: "Peri Peri Chicken Burger", price: 200 },
          { item: "Cheesy Beef Burger", price: 250 },
          { item: "Spicy Paneer Burger", price: 190 },
          { item: "Veg Loaded Burger", price: 170 }
        ],
        "Fries & Sides": [
          { item: "French Fries", price: 120 },
          { item: "Peri Peri Fries", price: 140 },
          { item: "Cheese Garlic Bread", price: 160 },
          { item: "Chicken Nuggets (6 pcs)", price: 200 },
          { item: "Veg Nuggets (6 pcs)", price: 180 }
        ],
        "Wraps & Rolls": [
          { item: "Chicken Shawarma Roll", price: 180 },
          { item: "Paneer Tikka Wrap", price: 190 },
          { item: "BBQ Chicken Wrap", price: 220 },
          { item: "Egg Cheese Wrap", price: 170 }
        ],
        "Beverages": [
          { item: "Cold Coffee", price: 140 },
          { item: "Oreo Shake", price: 160 },
          { item: "Strawberry Milkshake", price: 150 },
          { item: "Lemon Iced Tea", price: 120 },
          { item: "Mojito (Mint/Lemon)", price: 140 }
        ],
        "Desserts": [
          { item: "Chocolate Brownie", price: 180 },
          { item: "Oreo Cheesecake", price: 200 },
          { item: "Choco Lava Cake", price: 160 },
          { item: "Vanilla Soft Serve", price: 120 }
        ]
      }
    },
    {
      id: 12,
      name: "Little Village",
      cuisine: "Multi-cuisine",
      location: "Mangalagiri, Vijayawada",
      rating: 4.1,
      deliveryTime: "45 MINS",
      price: "₹600 for two",
      image: "little.jpeg",
      menu: {
        Biryani: [
          { item: "Veg Biryani", price: 220 },
          { item: "Paneer Biryani", price: 260 },
          { item: "Mushroom Biryani", price: 250 }
        ],
        Starters: [
          { item: "Crispy Baby Corn", price: 190 },
          { item: "Chilli Paneer", price: 240 },
          { item: "Spring Rolls", price: 180 },
          { item: "Paneer 65", price: 220 },
          { item: "Honey Chilli Potato", price: 200 }
        ],
        Desserts: [
          { item: "Gulab Jamun", price: 100 },
          { item: "Chocolate Brownie", price: 180 },
          { item: "Rasmalai", price: 150 },
          { item: "Ice Cream Sundae", price: 190 }
        ],
        Drinks: [
          { item: "Fresh Lime Soda", price: 90 },
          { item: "Cold Coffee", price: 120 },
          { item: "Mango Shake", price: 130 },
          { item: "Blue Lagoon Mocktail", price: 140 }
        ]
      }
    }
  ];
  
  // Add 28 more hotels here in a similar format
export default hotels;

// CSS Styles