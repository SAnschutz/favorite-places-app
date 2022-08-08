import * as SQLite from 'expo-sqlite';

const database = SQLite.openDatabase('places.db'); // if the places.db database doesn't exist, SQLite will create it -- when app is opened again if places.db already exists, SQLite will open it

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        //tx stands for transaction, REAL means a number with decimal places (a float)
        `CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
      )`,
        [],
        () => {
          //success callback -- it table already exists it will be a success
          resolve();
        },
        (_, error) => {
          //SQLite gives you two parameters -- the transaction parameter (which in this case we don't need os we're calling it _) and the error parameter
          //error callback
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function insertPlace(place) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.lat,
          place.location.lng,
        ],
        (_, result) => {
          //first param is transaction (tx) which we don't need
          console.log(result);
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      ); //id will be assigned automatically byu SQLite
    });
  });
  return promise;
}
