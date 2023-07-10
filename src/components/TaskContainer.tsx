import styles from './TaskContainer.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';
import { TaskEmpty } from './TaskEmpty';
import { Task } from './Task';

export interface TaskType {
	id: number;
	description: string;
	completed: boolean;
	deletedAt?: Date;
}

export function TaskContainer() {
	const [tasks, setTasks] = useState<TaskType[]>([]);
	const [newTaskDescription, setNewTaskDescription] = useState('');
	const activeTasks = tasks.filter(task => task.deletedAt === undefined)

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();
		setTasks([...tasks, { id: tasks.length + 1, description: newTaskDescription, completed: false }]);
		setNewTaskDescription('');
	}

	function handleNewTaskDescriptionChange(event: ChangeEvent<HTMLTextAreaElement>) {
		setNewTaskDescription(event.target.value);
	}

	function handleNewTaskDescriptionInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('Este campo é obrigatório!');
	}

	function handleDeleteTask(id: number) {
		const deletedTask = tasks.map((task) =>
			task.id === id
				? {
						...task,
						deletedAt: new Date(),
					}
				: task
		);

		setTasks(deletedTask);
	}

	function handleToggleTaskCompletion(id: number) {
		const completeTask = tasks.map((task) =>
			task.id === id
				? {
						...task,
						completed: !task.completed,
					}
				: task
		);

		setTasks(completeTask);
	}

	const isNewTaskDescription = newTaskDescription.length == 0;

	const isTasksEmpty = activeTasks.length == 0;

	const tasksAmount = activeTasks.length;

	const completedTasksAmount = activeTasks.filter((task) => task.completed).length;

	return (
		<>
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

			<header className={styles.header}>
				<div>
					<strong className={styles.createdTaskText}>Taferas criadas </strong>
					<span>{tasksAmount}</span>
				</div>
				<div>
					<strong className={styles.concludedTaskText}>Concluídas </strong>
					<span>{tasksAmount ? `${completedTasksAmount} de ${tasksAmount}` : 0}</span>
				</div>
			</header>

			{isTasksEmpty ? (
				<TaskEmpty />
			) : (
				<>
					{activeTasks.map((task) => (
						<Task
							key={task.id}
							task={task}
							handleDeleteTask={handleDeleteTask}
							handleToggleTaskCompletion={handleToggleTaskCompletion}
						/>
					))}
				</>
			)}
		</>
	);
}
