import styles from './Task.module.css';
import { TaskType } from './TaskContainer';
import { Trash } from '@phosphor-icons/react';

interface TaskProps {
	task: TaskType;
	handleDeleteTask: (id: number) => void;
	handleToggleTaskCompletion: (id: number) => void;
}

export function Task({ task, handleDeleteTask, handleToggleTaskCompletion }: TaskProps) {
	return (
		<div className={styles.taskContainer}>
			<label className={styles.container}>
				<span className={task.completed ? styles.descriptionTaskCompleted : styles.descriptionTask}>
					{task.description}
				</span>
				<input
					type="checkbox"
					defaultChecked={task.completed}
					readOnly
					onClick={() => handleToggleTaskCompletion(task.id)}
				/>
				<span className={styles.checkmark}></span>
			</label>
			<button onClick={() => handleDeleteTask(task.id)}>
				<Trash size={16} />
			</button>
		</div>
	);
}
