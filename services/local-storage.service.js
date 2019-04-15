export default class LocalStorage {
    // listOfSuggestedQueries
    // listOfSuggestedQueries

    checkIfDataExistsInLocalStorageByKey(key) {
        return localStorage.getItem(key) !== null ? true : false
    }

    updateDataByKey(key, value) {
        let dataArray = [];
        dataArray = JSON.parse(localStorage.getItem(key))
        dataArray.push(value);
        localStorage.setItem(key, JSON.stringify(dataArray));
    }

    setDataByKey(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    deleteDataFromLocalStorageByKey(key) {
        localStorage.removeItem(key)
    }
}