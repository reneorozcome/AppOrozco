import styles from './styles'
import { useState } from 'react'
import { Button } from '../../utils'
import { View, TextInput } from 'react-native'

const AddTask = ({placeholder, buttonText = "Agendar", send}) => {
	const [value, setValue] = useState('')
	const updateValue = v => setValue(v)
	const sendValue = () => {
		send(value)
		setValue('')
	}

	return <View style={styles.inputContainer}>
		<TextInput style={styles.input} value={value} autoComplete="off" autoCorrect={false} autoCapitalize="none" onChangeText={updateValue} placeholder={placeholder} />
		<Button action={sendValue} disabled={!value}>{buttonText}</Button>
	</View>
}
export default AddTask