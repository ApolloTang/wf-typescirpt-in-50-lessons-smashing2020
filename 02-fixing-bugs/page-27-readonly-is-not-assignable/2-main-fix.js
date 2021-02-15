//@ts-check

const storage = {
  max: undefined,
  items: [],
};

// Object.defineProperty(
//   storage, "max", { readonly: true, val: 5000 });
    //                ^^^^^^^^^^^^^^^^^^^^^^^^^
    //  Argument of type '{ readonly: boolean; val: number; }' is
    //  not assignable to parameter of type 'PropertyDescriptor
    //  & ThisType<any>'

Object.defineProperty(
  storage, "max", { writable: true, value: 5000 });

let currentStorage = "undefined";

function storageUsed() {
  if (currentStorage) {
    return currentStorage;
  }
  currentStorage = 0;

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
