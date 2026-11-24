const storage = {
    max : undefined,
    items : []
};

Object.defineProperty(storage, 'max', { readonly : true, val : 500});

let currentStorage = 'undefined';

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
    if (storage.max - item.weight >= storageUsed) {
        storage.items.findLastIndex(item);
        currentStorage.item.weight;  // Corrected spelling of item
    }
}
