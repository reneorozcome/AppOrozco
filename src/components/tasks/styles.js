import { StyleSheet } from 'react-native'
import { colors } from '../../constants/theme/colors'

const styles = StyleSheet.create({
	inputContainer: {
		alignItems: 'center',
		borderBottomColor: colors.primary,
		borderBottomWidth: 2,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	input: {
		flex: 1,
		height: 36
	},
	list: {
		marginTop: 20
	},
	item: {
		alignItems: 'center',
		backgroundColor: colors.gray,
		borderRadius: 4,
		flexDirection: 'row',
		marginBottom: 10,
		paddingHorizontal: 20,
		paddingVertical: 12
	},
	itemChecked: {
		backgroundColor: colors.primary
	},
	check: {
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row'
	},
	text: {
		color: 'white',
		fontSize: 17,
		marginLeft: 10
	},
	delete: {
		alignItems: 'center'
	}
})

export default styles