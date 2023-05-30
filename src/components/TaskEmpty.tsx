import { ClipboardText } from '@phosphor-icons/react';
import styles from './TaskEmpty.module.css';

export function TaskEmpty() {
	return (
		<div className={styles.container}>
			<ClipboardText size={56} />
			<article>
				<p>
					<strong>Você ainda não tem tarefas cadastradas </strong>
				</p>
				<p>Crie tarefas e organize seus itens a fazer</p>
			</article>
		</div>
	);
}
