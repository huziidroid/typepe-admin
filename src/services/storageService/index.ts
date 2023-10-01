const setItem = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
};

const getItem = (key: string) => {
  return sessionStorage.getItem(key);
};
const removeItem = (key: string) => {
  return sessionStorage.removeItem(key);
};

const clearStorage = () => sessionStorage.clear();

export default {setItem, getItem, removeItem, clearStorage};
