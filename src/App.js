import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import UsersList from './components/UsersList/UsersList'
import UserProfile from './components/UserProfile/UserProfile'

import styles from './App.module.scss'

function App() {
	const [openProfile, setOpenProfile] = useState(false)
	const [id, setId] = useState(null)
	const [users, setUsers] = useState(null)

	const openProfileHandler = () => {
		setOpenProfile(!openProfile)
	}

	function sortByField(first, second) {
		if (second) {
			return (a, b) => (a[first][second] > b[first][second] ? 1 : -1)
		}
		return (a, b) => (a[first] > b[first] ? 1 : -1)
	}

	const sortByCity = () => {
		if (users) {
			setUsers([...users.sort(sortByField('address', 'city'))])
		}
	}

	const sortByCompany = () => {
		if (users) {
			setUsers([...users.sort(sortByField('company', 'name'))])
		}
	}

	const sortByName = () => {
		if (users) {
			setUsers([...users.sort(sortByField('name'))])
		}
	}

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				setUsers(data)
			})
	}, [])

	return (
		<div className={styles.App}>
			<Navbar
				sortByCity={sortByCity}
				sortByCompany={sortByCompany}
				sortByName={sortByName}
			/>
			{!openProfile && (
				<UsersList
					setOpenProfile={setOpenProfile}
					openProfileHandler={openProfileHandler}
					setId={setId}
					users={users}
				/>
			)}
			{openProfile && (
				<UserProfile
					setOpenProfile={setOpenProfile}
					openProfileHandler={openProfileHandler}
					id={id}
				/>
			)}
		</div>
	)
}

export default App
