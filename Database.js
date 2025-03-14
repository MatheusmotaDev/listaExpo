import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveItem(listItem){
    listItem.id = new Date().getTime();
    let savedItems = [];
    const response = await AsyncStorage.getItem('items');

    if(respone) savedItems = JSON.parse(response);
    savedItems.push(listItem);
    
    return AsyncStorage.setItem('items', JSON.stringify(savedItems))
}

function getItems(){
    return AsyncStorage.getItem('items')
    .then(response => {
        if(response)
            return Promise.resolve(JSON.parse(response));
        else
            return Promise.resolve([])
    })
}

module.exports = { 
    saveItem, getItems }