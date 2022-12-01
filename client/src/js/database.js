import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  // TODO: Add logic to a method that accepts some content and adds it to the database
  const jateDB = await openDB('jate',1);
  const transaction = jateDB.transaction('jate','readwrite');
  const store = transaction.objectStore('jate');
  const request = store.put({jate:content});
  const result = await request;
  console.log('Data stored', result);
};

export const getDb = async () => {
  // TODO: Add logic for a method that gets all the content from the database
  const jateDB = await openDB('jate',1);

}

initdb();
