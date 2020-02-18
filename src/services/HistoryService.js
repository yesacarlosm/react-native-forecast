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
    // first we bring the history from async storage.
    fetchHistory()
      .then(result => {
        var items;
        if (!result) {
          // if the array is null, it means there was nothing saved. Starts an empty array.
          items = [placeName];
        } else {
          items = result.items;
          if (items.filter(i => i === placeName).length === 0) {
            // if the searched place doesn't exists on the history array,
            // we push it to the last position given the amount of items in the array.
            if (items.length > 4) {
              let spliced = items.slice(1, 5);
              items = [...spliced, placeName];
            } else {
              items.push(placeName);
            }
          } else {
            // if the searched place already exists, we just update his position on the array to the last.
            let index = items.indexOf(placeName);
            items.splice(index, 1);
            items.push(placeName);
          }
        }
        // updates the async storage.
        saveHistory({ items })
          .then(() => {
            resolve(items);
          })
      })
  })