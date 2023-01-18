import styles from './styles'
import ListTasksItem from './Item.js'
import { FlatList } from 'react-native'

const ListTasks = ({tasks, action}) => {
	const render = ({item}) => <ListTasksItem task={item} action={() => action(item.id)} />

	return <FlatList data={tasks} style={styles.list} renderItem={render} keyExtractor={e => e.id} />
}
export default ListTasks