import { StyleSheet } from 'react-native'
import { colors } from '../../constants/theme'

const styles = StyleSheet.create({
	overlay: {
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.9)',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: '100%',
		justifyContent: 'center',
		width: '100%'
	},
	content: {
		backgroundColor: 'white',
		maxWidth: 320,
		paddingTop: 24,
		paddingBottom: 30,
		paddingHorizontal: 15,
		width: '90%'
	},
	title: {
		color: 'black',
		fontSize: 24,
		fontWeight: '900',
		marginBottom: 10,
		textAlign: 'center',
		textTransform: 'uppercase'
	},
	description: {
		color: colors.gray,
		fontSize: 16,
		marginBottom: 20,
		textAlign: 'center'
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%'
	}
})

export default styles