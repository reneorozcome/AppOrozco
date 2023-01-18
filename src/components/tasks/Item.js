import styles from './styles'
import { useState } from 'react'
import { colors } from '../../constants/theme'
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons.js'

const ListTasksItem = ({task, action}) => {
	const [checked, setChecked] = useState(false)
	const check = () => setChecked(!checked)
	
	return <View style={checked ? [styles.item, styles.itemChecked] : styles.item}>
		<TouchableOpacity onPress={check} style={styles.check}>
			<MaterialIcons name={checked ? 'radio-button-checked' : 'radio-button-unchecked'} size={20} color={checked ? colors.accent : 'white'} />
			<Text style={styles.text}>{task.name}</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress={action} style={styles.delete}>
			<MaterialIcons name="delete" size={20} color="white" />
		</TouchableOpacity>
	</View>
}
export default ListTasksItem