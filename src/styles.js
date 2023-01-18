import { StyleSheet } from 'react-native'
import { colors } from './constants/theme'

const styles = StyleSheet.create({
	header: {
		backgroundColor: colors.primary,
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10,
		paddingTop: 40
	},
	headerText: {
		color: 'white',
		fontSize: 16,
		fontWeight: '900'
	},
	body: {
		padding: 20
	}
})
export default styles