import Button from '../utils/Button/Button'

import styles from './Navbar.module.scss'

function Navbar({ sortByCity, sortByCompany, sortByName }) {
	return (
		<div className={styles.navbar}>
			<div className={styles.title}>Сортировка</div>
			<Button label="по городу" onClick={sortByCity} />
			<Button label="по компании" onClick={sortByCompany} />
			<Button label="по имени" onClick={sortByName} />
		</div>
	)
}

export default Navbar
