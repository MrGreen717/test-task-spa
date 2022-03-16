import UserCard from '../UserCard/UserCard'
import Header from '../Header/Header'
import Footer from './../Footer/Footer'

import styles from './UsersList.module.scss'

function UsersList({ setOpenProfile, setId, openProfileHandler, users }) {
	return (
		<div className={styles.UsersList}>
			<Header>
				<div className={styles.title}>Список пользователей</div>
			</Header>

			{!users && <div>Загрузка...</div>}

			{users && (
				<>
					{users.map((user) => (
						<UserCard
							openProfileHandler={openProfileHandler}
							setId={setId}
							id={user.id}
							name={user.name}
							city={user.address.city}
							company={user.company.name}
							key={user.id}
							setOpenProfile={setOpenProfile}
						/>
					))}
					<Footer>Найдено {users.length} пользователей</Footer>
				</>
			)}
		</div>
	)
}

export default UsersList
