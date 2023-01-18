import { colors } from './colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		paddingVertical: 8,
		paddingHorizontal: 20
	},
	buttonDisabled: {
		backgroundColor: colors.gray,
		opacity: 0.5
	},
	buttonColors: {
		gray: {
			backgroundColor: colors.gray
		}
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		textTransform: 'uppercase'
	}
})
export default styles