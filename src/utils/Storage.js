import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key, value, json = false) => {
	try {
		const toStore = json ? JSON.stringify(value) : value
		await AsyncStorage.setItem(key, toStore)
	} catch (e) { console.log(`Ocurrió un error al guardar "${key}".`) }
}
export const getData = async (key, json = false, callback) => {
	try {
		const value = await AsyncStorage.getItem(key)
		callback(json ? JSON.parse(value) : value)
	} catch(e) { console.log(`Ocurrió un error al leer "${key}".`) }
}