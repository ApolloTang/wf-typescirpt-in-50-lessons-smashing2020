//@ts-check

const storage = {
  max: undefined,
  items: [],
};

Object.defineProperty(
  storage, "max", { writable: true, value: 5000 });

let currentStorage = "undefined"; // <-- undefined is a string, should be type

function storageUsed() {
  if (currentStorage) {
    return currentStorage;
  }

  currentStorage = 0;
  // ^^^^^^^^^^^
  // [tsserver 2322] Type '0' is not assignable to type 'string'.

  for (const i = 0; i < storage.length(); i++) {
    currentStorage += storage.items[i].weigth;
    return currentStorage;
  }
}

function add(item) {
  if (storage.max - item.weight >= storageUsed) {
    storage.items.add(item);
    currentStorage += iten.weight;
  }
}
