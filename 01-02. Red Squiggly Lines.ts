//@ts-check

const storage = {
    max : undefined,
    items : []
};

Object.defineProperty(storage, 'max', { writable : false, value : 500});  // Replaced readonly with writable and val with value

let currentStorage = undefined;  // Removed '' to use the any type

function storageUsed () {
    if (currentStorage) {
        return currentStorage;
    }
    currentStorage = 0;
    for (let i = 0; i < storage.length(); i++) {  // Changed i from constant to variable
        currentStorage += storage.items[i].weight;  // Corrected spelling of weight
    }

    return currentStorage;
};

function add(item) {
    if (storage.max - item.weight >= storageUsed()) {  // Called storageUsed()
        storage.items.push(item);  // Replaced add with push
        currentStorage.item.weight;  // Corrected spelling of item
    }
}
