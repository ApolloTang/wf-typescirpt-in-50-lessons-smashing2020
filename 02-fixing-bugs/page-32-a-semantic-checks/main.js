//@ts-check

const storage = {
  max: undefined,
  items: [],
};

Object.defineProperty(
  storage, "max", { writable: true, value: 5000 });

let currentStorage = undefined;

function storageUsed() {
  if (currentStorage) {
    return currentStorage;
  }

  currentStorage = 0;

  for (const i = 0; i < storage.length(); i++) {
                                       // ^ [tsserver 2588] [E] Cannot assign to 'i' because it is a constant.
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
