import AsyncStorage from '@react-native-community/async-storage';

export const saveHistory = async (history) => {
  return AsyncStorage.setItem('history', JSON.stringify(history))
}

export const fetchHistory = async () => {
  return AsyncStorage.getItem('history').then(result => {
    if (result === null) {
      return result;
    }
    return JSON.parse(result);
  });
}

export const updateHistory = (placeName) => new Promise(
  (resolve, reject) => {
    fetchHistory()
      .then(result => {
        var items;
        if (!result) {
          items = [placeName];
        } else {
          items = result.items;
          if (items.filter(i => i === placeName).length === 0) {
            if (items.length > 4) {
              let spliced = items.slice(1, 5);
              items = [...spliced, placeName];
            } else {
              items.push(placeName);
            }
          } else {
            let index = items.indexOf(placeName);
            items.splice(index, 1);
            items.push(placeName);
          }
        }
        saveHistory({ items })
          .then(() => {
            resolve(items);
          })
      })
  })