import { Header } from './components/Header';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './App.module.css';
import './global.css';
import { PlusCircle } from '@phosphor-icons/react';

function App() {
	const [tasks, setTasks] = useState<string[]>([]);
	const [newTaskDescription, setNewTaskDescription] = useState('');

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();
		setTasks([...tasks, newTaskDescription]);
		setNewTaskDescription('');
	}

	function handleNewTaskDescriptionChange(event: ChangeEvent<HTMLTextAreaElement>) {
		setNewTaskDescription(event.target.value);
	}

	function handleNewTaskDescriptionInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('Este campo é obrigatório!');
	}

	const isNewTaskDescription = newTaskDescription.length == 0;

	return (
		<>
			<Header />

			<form
				onSubmit={handleCreateNewTask}
				className={styles.form}>
				<textarea
					name="task-description"
					placeholder="Adicione uma nova tarefa"
					value={newTaskDescription}
					onChange={handleNewTaskDescriptionChange}
					onInvalid={handleNewTaskDescriptionInvalid}
					required
				/>

				<button
					type="submit"
					disabled={isNewTaskDescription}>
					Criar <PlusCircle size={20} />
				</button>
			</form>
		</>
	);
}

export default App;
