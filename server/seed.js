import { db } from './src/config/db/connection.js';

const products = [
  // =========================
  // DAIRY
  // =========================
  {
    name: 'Milk',
    category: 'Dairy',
    price: 60,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150',
  },
  {
    name: 'Butter',
    category: 'Dairy',
    price: 120,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d',
  },
  {
    name: 'Cheese',
    category: 'Dairy',
    price: 180,
    stock: 60,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d',
  },
  {
    name: 'Yogurt',
    category: 'Dairy',
    price: 45,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1571212515416-fca88b972f61',
  },
  {
    name: 'Paneer',
    category: 'Dairy',
    price: 110,
    stock: 70,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7',
  },
  {
    name: 'Cream',
    category: 'Dairy',
    price: 95,
    stock: 75,
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da',
  },
  {
    name: 'Curd',
    category: 'Dairy',
    price: 40,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa9f8f',
  },
  {
    name: 'Mozzarella Cheese',
    category: 'Dairy',
    price: 220,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7',
  },
  {
    name: 'Flavoured Milk',
    category: 'Dairy',
    price: 35,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b',
  },

  // =========================
  // BAKERY
  // =========================
  {
    name: 'White Bread',
    category: 'Bakery',
    price: 40,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
  },
  {
    name: 'Brown Bread',
    category: 'Bakery',
    price: 55,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec',
  },
  {
    name: 'Burger Buns',
    category: 'Bakery',
    price: 50,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1550317138-10000687a72b',
  },
  {
    name: 'Croissant',
    category: 'Bakery',
    price: 45,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1555507036-ab794f4ade0a',
  },
  {
    name: 'Muffin',
    category: 'Bakery',
    price: 40,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa',
  },
  {
    name: 'Cake',
    category: 'Bakery',
    price: 350,
    stock: 35,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
  },
  {
    name: 'Donut',
    category: 'Bakery',
    price: 45,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b',
  },
  {
    name: 'Garlic Bread',
    category: 'Bakery',
    price: 90,
    stock: 65,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73',
  },
  {
    name: 'Bagel',
    category: 'Bakery',
    price: 60,
    stock: 70,
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c',
  },

  // =========================
  // BEVERAGES
  // =========================
  {
    name: 'Coffee',
    category: 'Beverages',
    price: 250,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
  },
  {
    name: 'Tea',
    category: 'Beverages',
    price: 180,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574',
  },
  {
    name: 'Soft Drink',
    category: 'Beverages',
    price: 50,
    stock: 150,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97',
  },
  {
    name: 'Orange Juice',
    category: 'Beverages',
    price: 120,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba',
  },
  {
    name: 'Green Tea',
    category: 'Beverages',
    price: 200,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c',
  },
  {
    name: 'Energy Drink',
    category: 'Beverages',
    price: 110,
    stock: 110,
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7',
  },
  {
    name: 'Lemonade',
    category: 'Beverages',
    price: 70,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1523371683702-cfc4b8c6e5e7',
  },
  {
    name: 'Mango Juice',
    category: 'Beverages',
    price: 120,
    stock: 95,
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4',
  },
  {
    name: 'Cold Coffee',
    category: 'Beverages',
    price: 150,
    stock: 85,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
  },

  // =========================
  // SNACKS
  // =========================
  {
    name: 'Potato Chips',
    category: 'Snacks',
    price: 30,
    stock: 200,
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b',
  },
  {
    name: 'Nachos',
    category: 'Snacks',
    price: 70,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d',
  },
  {
    name: 'Chocolate Cookies',
    category: 'Snacks',
    price: 80,
    stock: 110,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
  },
  {
    name: 'Popcorn',
    category: 'Snacks',
    price: 60,
    stock: 140,
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f',
  },
  {
    name: 'Salted Peanuts',
    category: 'Snacks',
    price: 50,
    stock: 160,
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32',
  },
  {
    name: 'Chocolate Bar',
    category: 'Snacks',
    price: 40,
    stock: 180,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b',
  },
  {
    name: 'Candy Pack',
    category: 'Snacks',
    price: 25,
    stock: 220,
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f',
  },
  {
    name: 'Crackers',
    category: 'Snacks',
    price: 55,
    stock: 140,
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f',
  },
  {
    name: 'Trail Mix',
    category: 'Snacks',
    price: 95,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
  },

  // =========================
  // BREAKFAST
  // =========================
  {
    name: 'Cornflakes',
    category: 'Breakfast',
    price: 220,
    stock: 75,
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f',
  },
  {
    name: 'Oats',
    category: 'Breakfast',
    price: 180,
    stock: 65,
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc',
  },
  {
    name: 'Muesli',
    category: 'Breakfast',
    price: 280,
    stock: 70,
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f',
  },
  {
    name: 'Peanut Butter',
    category: 'Breakfast',
    price: 240,
    stock: 75,
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60',
  },
  {
    name: 'Jam',
    category: 'Breakfast',
    price: 160,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1576186726115-4d51596775d1',
  },
  {
    name: 'Honey',
    category: 'Breakfast',
    price: 220,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924',
  },
  {
    name: 'Pancake Mix',
    category: 'Breakfast',
    price: 180,
    stock: 70,
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93',
  },
  {
    name: 'Maple Syrup',
    category: 'Breakfast',
    price: 260,
    stock: 60,
    image: 'https://images.unsplash.com/photo-1514996937319-344454492b37',
  },
  {
    name: 'Granola',
    category: 'Breakfast',
    price: 210,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f',
  },

  // =========================
  // GROCERIES
  // =========================
  {
    name: 'Rice',
    category: 'Groceries',
    price: 450,
    stock: 150,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c',
  },
  {
    name: 'Wheat Flour',
    category: 'Groceries',
    price: 320,
    stock: 140,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5',
  },
  {
    name: 'Sugar',
    category: 'Groceries',
    price: 55,
    stock: 200,
    image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635',
  },
  {
    name: 'Salt',
    category: 'Groceries',
    price: 25,
    stock: 220,
    image: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442f',
  },
  {
    name: 'Cooking Oil',
    category: 'Groceries',
    price: 180,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5',
  },
  {
    name: 'Tomato Ketchup',
    category: 'Groceries',
    price: 110,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
  },
  {
    name: 'Pasta',
    category: 'Groceries',
    price: 90,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141',
  },
  {
    name: 'Pasta Sauce',
    category: 'Groceries',
    price: 120,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9',
  },
  {
    name: 'Black Pepper',
    category: 'Groceries',
    price: 90,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38',
  },
  {
    name: 'Red Chilli Powder',
    category: 'Groceries',
    price: 80,
    stock: 110,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d',
  },

  // =========================
  // PERSONAL CARE
  // =========================
  {
    name: 'Shampoo',
    category: 'Personal Care',
    price: 220,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f',
  },
  {
    name: 'Conditioner',
    category: 'Personal Care',
    price: 240,
    stock: 70,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be',
  },
  {
    name: 'Body Wash',
    category: 'Personal Care',
    price: 180,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883',
  },
  {
    name: 'Soap',
    category: 'Personal Care',
    price: 45,
    stock: 180,
    image: 'https://images.unsplash.com/photo-1584305574647-acf8069a3d21',
  },
  {
    name: 'Face Wash',
    category: 'Personal Care',
    price: 150,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137',
  },
  {
    name: 'Toothpaste',
    category: 'Personal Care',
    price: 90,
    stock: 150,
    image: 'https://images.unsplash.com/photo-1559591937-abc4b8f7f6c0',
  },
  {
    name: 'Toothbrush',
    category: 'Personal Care',
    price: 40,
    stock: 170,
    image: 'https://images.unsplash.com/photo-1559591937-c6f2f3a5d4c8',
  },
  {
    name: 'Hand Sanitizer',
    category: 'Personal Care',
    price: 80,
    stock: 130,
    image: 'https://images.unsplash.com/photo-1584483720412-ce931f4aefa8',
  },
  {
    name: 'Deodorant',
    category: 'Personal Care',
    price: 200,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1626784215021-2e39ccf971cd',
  },

  // =========================
  // FRUITS
  // =========================
  {
    name: 'Apple',
    category: 'Fruits',
    price: 180,
    stock: 150,
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
  },
  {
    name: 'Banana',
    category: 'Fruits',
    price: 60,
    stock: 200,
    image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e37f',
  },
  {
    name: 'Orange',
    category: 'Fruits',
    price: 120,
    stock: 140,
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f',
  },
  {
    name: 'Mango',
    category: 'Fruits',
    price: 220,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078',
  },
  {
    name: 'Grapes',
    category: 'Fruits',
    price: 140,
    stock: 130,
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f',
  },
  {
    name: 'Pineapple',
    category: 'Fruits',
    price: 90,
    stock: 110,
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba',
  },
  {
    name: 'Strawberry',
    category: 'Fruits',
    price: 260,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6',
  },
  {
    name: 'Watermelon',
    category: 'Fruits',
    price: 100,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1563114773-84221bd62daa',
  },
  {
    name: 'Kiwi',
    category: 'Fruits',
    price: 300,
    stock: 70,
    image: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71',
  },

  // =========================
  // VEGETABLES
  // =========================
  {
    name: 'Tomato',
    category: 'Vegetables',
    price: 40,
    stock: 180,
    image: 'https://images.unsplash.com/photo-1546470427-e5f5d53f3a8b',
  },
  {
    name: 'Potato',
    category: 'Vegetables',
    price: 35,
    stock: 220,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655',
  },
  {
    name: 'Onion',
    category: 'Vegetables',
    price: 50,
    stock: 200,
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510',
  },
  {
    name: 'Carrot',
    category: 'Vegetables',
    price: 60,
    stock: 160,
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979',
  },
  {
    name: 'Broccoli',
    category: 'Vegetables',
    price: 120,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc',
  },
  {
    name: 'Capsicum',
    category: 'Vegetables',
    price: 80,
    stock: 110,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83',
  },
  {
    name: 'Spinach',
    category: 'Vegetables',
    price: 45,
    stock: 140,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb',
  },
  {
    name: 'Cucumber',
    category: 'Vegetables',
    price: 50,
    stock: 150,
    image: 'https://images.unsplash.com/photo-1604977046802-8b0d6c5a5f64',
  },
  {
    name: 'Cauliflower',
    category: 'Vegetables',
    price: 70,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1510627498534-cf7e9002facc',
  },

  // =========================
  // FROZEN FOODS
  // =========================
  {
    name: 'Frozen Pizza',
    category: 'Frozen Foods',
    price: 320,
    stock: 60,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
  },
  {
    name: 'French Fries',
    category: 'Frozen Foods',
    price: 180,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877',
  },
  {
    name: 'Ice Cream',
    category: 'Frozen Foods',
    price: 220,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
  },
  {
    name: 'Frozen Nuggets',
    category: 'Frozen Foods',
    price: 280,
    stock: 70,
    image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92',
  },
  {
    name: 'Frozen Veg Mix',
    category: 'Frozen Foods',
    price: 190,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
  },
  {
    name: 'Frozen Paratha',
    category: 'Frozen Foods',
    price: 140,
    stock: 110,
    image: 'https://images.unsplash.com/photo-1512058564366-c9e3e0467f66',
  },
  {
    name: 'Frozen Burger Patty',
    category: 'Frozen Foods',
    price: 250,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  },
  {
    name: 'Frozen Momos',
    category: 'Frozen Foods',
    price: 170,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb',
  },
  {
    name: 'Frozen Garlic Bread',
    category: 'Frozen Foods',
    price: 150,
    stock: 85,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73',
  },
];

const seedDB = async () => {
  try {
    console.log('Starting upload of 91 products to Firestore...');

    // We get a fresh batch object to upload everything efficiently
    const batch = db.batch();
    const productsRef = db.collection('products');

    products.forEach((product) => {
      // Create a reference with an automatically generated ID
      const newDocRef = productsRef.doc();

      // We removed your hardcoded IDs so Firestore handles indexing properly.
      // We also add a timestamp so the frontend sort works!
      const productData = {
        ...product,
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'jHcFThV5XugSAiwNJvO4EXsk0ke2',
      };

      batch.set(newDocRef, productData);
    });

    // Commit the batch to the database
    await batch.commit();

    console.log('✅ Successfully uploaded all products to Firestore!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error uploading products:', error);
    process.exit(1);
  }
};

seedDB();
