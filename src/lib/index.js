export function getStorage(key) {
  try {
    const getKey = localStorage.getItem(key);

    if (!getKey) return undefined;

    return JSON.parse(getKey);
  } catch (e) {
    return undefined;
  }
}

export function setStorage(key, state) {
  try {
    const newValue = JSON.stringify(state);

    localStorage.setItem(key, newValue);
  } catch (e) {}
}

export function removeStorage(key) {
  localStorage.removeItem(key);
}
