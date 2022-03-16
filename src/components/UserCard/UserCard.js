import styles from './UserCard.module.scss'

function UserCard({ openProfileHandler, setId, id, name, city, company }) {
	const handleClick = () => {
		openProfileHandler()
		setId(id)
	}

	return (
		<div className={styles.UserCard}>
			<div className={styles.row}>
				<div className={styles.title}>ФИО:</div>
				<div className={styles.data}>{name}</div>
			</div>
			<div className={styles.row}>
				<div className={styles.title}>Город:</div>
				<div className={styles.data}>{city}</div>
			</div>
			<div className={styles.row}>
				<div className={styles.title}>Компания:</div>
				<div className={styles.data}>{company}</div>
				<div className={styles.button} onClick={handleClick}>
					Подробнее
				</div>
			</div>
		</div>
	)
}

export default UserCard
