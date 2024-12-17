import * as SQLite from 'expo-sqlite';



const init = () => {
  const db = SQLite.openDatabaseSync('productsDB');
  // db.execSync(`
  //   PRAGMA journal_mode = WAL;
  //   CREATE TABLE IF NOT EXISTS products (
  //     id INTEGER PRIMARY KEY NOT NULL,
  //     name TEXT NOT NULL,
  //     image TEXT NOT NULL,
  //     price INTEGER NOT NULL,
  //     description TEXT NOT NULL
  //   );
  // `);
  // db.execSync(`
  //   PRAGMA journal_mode = WAL;
  //   CREATE TABLE IF NOT EXISTS cart (
  //     id INTEGER PRIMARY KEY NOT NULL,
  //     name TEXT NOT NULL,
  //     image TEXT NOT NULL,
  //     price INTEGER NOT NULL,
  //     description TEXT NOT NULL
  //   );
  // `);
  // fetch('https://fakestoreapi.com/products')
  //   .then(res => res.json())
  //   .then(data => {
  //     data.map((product) => {
  //       const values = `(${product.title}, ${product.image}, ${product.price}, ${product.description})`;
  //       return `INSERT INTO products (name, image, price, description) VALUES ${values}`
  //     });
  //   })
  //   .then((insertQuery => {
  //     insertQuery.forEach((insert) => saveProduct(insert))
  //   }));
  // getAllProducts().forEach((p) => console.log(p));
  // await db.execAsync('DELETE FROM products;')
};

  
// const saveProduct = (insert) => {
//   db.runSync(insert);
// }

// const addProductToCart = async (name, image, price, description) => {
//   db.runAsync(
//     'INSERT INTO cart (name, image, price, description) VALUES (?, ?, ?, ?)',
//     name,
//     image,
//     price,
//     description
//   );
// }

// const getAllProducts = () => {
//   const allRows = db.getAllSync('SELECT * FROM products');
//   return allRows;
// }

// const getAllCart = async () => {
//   const allRows = await db.getAllAsync('SELECT * FROM cart');
//   return allRows;
// }

const test = () => {
  console.log('/////////////');
  console.log('PROCESSING...');
  console.log('/////////////');
}

export { init, test };