const STORAGE_KEY = 'warehouseItems';

export function getItems() {
    const items = localStorage.getItem(STORAGE_KEY);
    return items ? JSON.parse(items) : [];
}

export function saveItem(item) {
    const items = getItems();
    items.push(item);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function deleteItem(index) {
    const items = getItems();
    items.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}



