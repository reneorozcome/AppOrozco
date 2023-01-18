import styles from './styles'
import { View, Text } from 'react-native'
import AppModal from './components/modal'
import { useState, useEffect } from 'react'
import { storeData, getData } from './utils'
import { AddTask, ListTasks } from './components/tasks'

const App = () => {
	const [tasks, setTasks] = useState(null)
	const [modalVisible, setModalVisible] = useState(false)
	const [selectedTask, setSelectedTask] = useState(null)
	
	const saveData = task => {
		let _id = Math.ceil((Math.random() * 999) + 100)
		while(tasks.some(t => t.id === _id))
			_id = Math.ceil((Math.random() * 999) + 100)
		setTasks([...tasks, { id: _id, name: task }])
	}
	const deleteTask = id => {
		setSelectedTask(tasks.find(t => t.id === id))
		setModalVisible(!modalVisible)
	}
	const cancelDeleteTask = () => {
		setSelectedTask(null)
		setModalVisible(!modalVisible)
	}
	const confirmDeleteTask = id => {
		setTasks(tasks.filter(t => t.id !== selectedTask.id))
		setSelectedTask({})
		setModalVisible(!modalVisible)
	}

	useEffect(() => {
		if(!tasks)
			getData('tasks', true, setTasks)
		else
			storeData('tasks', tasks, true)
	}, [tasks])
	
	return <View style={styles.screen}>
		<View style={styles.header}>
			<Text style={styles.headerText}>TAREAS DIARIAS</Text>
		</View>
		<View style={styles.body}>
			<AddTask placeholder="Pon un nombre a tu tarea." send={saveData} />
			<ListTasks tasks={tasks} action={deleteTask} />
			<AppModal visible={modalVisible} title="Eliminar tarea" description={`¿Está seguro que desea borrar la tarea "${selectedTask?.name}"?`} accept={confirmDeleteTask} decline={cancelDeleteTask} />
		</View>
	</View>
}

export default App