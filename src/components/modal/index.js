import styles from './styles.js'
import { Button } from '../../utils'
import { Text, View, Modal } from 'react-native'

const AppModal = ({visible = true, animationType = 'fade', title = '', description = '', accept, decline}) => {
	return <Modal visible={visible} animationType={animationType} transparent={true}>
		<View style={styles.overlay}>
			<View style={styles.content}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.description}>{description}</Text>
				<View style={styles.buttonsContainer}>
					<Button action={decline} color="gray">Cancelar</Button>
					<Button action={accept}>Confirmar</Button>
				</View>
			</View>
		</View>
	</Modal>
}
export default AppModal