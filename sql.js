import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('productsDB');

const init = () => {
  db.execSync(`
    DROP TABLE IF EXISTS products;
  `)
  db.execSync(`
    DROP TABLE IF EXISTS cart;
  `)
  db.execSync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      image TEXT NOT NULL,
      price INTEGER NOT NULL,
      description TEXT NOT NULL
    );
  `);
  db.execSync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS cart (
      id INTEGER PRIMARY KEY NOT NULL,
      productId INTEGER NOT NULL
    );
  `);
  return updateDatabase();
};

const updateDatabase = () => {
  db.runSync('DELETE FROM products');
  db.runSync('DELETE FROM cart');
  return fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      data.forEach((product) => {
        const id = db.runSync(
          'INSERT INTO products (name, image, price, description) VALUES (?, ?, ?, ?)',
          product.title,
          product.image,
          product.price,
          product.description
        ).lastInsertRowId;
        console.log(id)
      });
    });
};

const addProductToCart = (id) => () => {
  const inser = db.runSync('INSERT INTO cart (productId) VALUES (?)', id).lastInsertRowId;
  console.log('ADDED: ' + inser)
};

const removeProductFromCart = (id) => {
  db.runSync('DELETE FROM cart WHERE id = (?)', id);
};

const getAllProducts = () => {
  const allRows = db.getAllSync('SELECT * FROM products');
  return allRows;
};

const getAllCart = () => {
  const allRows = db.getAllSync(`
    SELECT * FROM products
    JOIN cart ON products.id = cart.productId;
  `);
  return allRows;
};

export { init, getAllProducts, getAllCart, addProductToCart, removeProductFromCart, updateDatabase };