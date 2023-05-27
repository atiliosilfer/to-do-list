import styles from './Header.module.css';
import rocketLogo from '../assets/rocket-logo.svg';

export function Header() {
	return (
		<header className={styles.header}>
			<img
				src={rocketLogo}
				alt="Logotipo do todo"
			/>
			<div>
				<strong className={styles.titleTo}>to</strong>
				<strong className={styles.titleDo}>do</strong>
			</div>
		</header>
	);
}
