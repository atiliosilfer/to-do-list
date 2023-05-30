import { Header } from './components/Header';
import { TaskContainer } from './components/TaskContainer';

import styles from './App.module.css';
import './global.css';

function App() {
	return (
		<>
			<Header />

			<div className={styles.container}>
				<TaskContainer />
			</div>
		</>
	);
}

export default App;
