import { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import InputPanel from './../utils/InputPanel/InputPanel'
import Button from '../utils/Button/Button'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import styles from './UserProfile.module.scss'

function UserProfile({ id, openProfileHandler }) {
	const [status, setStatus] = useState(true)
	const [user, setUser] = useState(null)

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				setUser(data)
			})
	}, [id])

	const ValidationSchema = Yup.object().shape({
		name: Yup.string().trim().required('Обязательное поле'),
		username: Yup.string().trim().required('Обязательное поле'),
		email: Yup.string().trim().required('Обязательное поле'),
		street: Yup.string().trim().required('Обязательное поле'),
		city: Yup.string().trim().required('Обязательное поле'),
		zipcode: Yup.string().trim().required('Обязательное поле'),
		phone: Yup.string().trim().required('Обязательное поле'),
		website: Yup.string().trim().required('Обязательное поле'),
		comment: Yup.string().trim()
	})

	const onSubmit = (data) => {
		openProfileHandler()
		console.log(data)
	}

	return (
		<>
			<div className={styles.UserProfile}>
				<Header>
					<div className={styles.title}>Профиль пользователя</div>
					<Button label="Редактировать" onClick={() => setStatus(!status)} />
				</Header>

				{!user && <div>Загрузка...</div>}

				{user && (
					<Formik
						initialValues={{
							name: user.name,
							username: user.username,
							email: user.email,
							street: user.address.street,
							city: user.address.city,
							zipcode: user.address.zipcode,
							phone: user.phone,
							website: user.website,
							comment: ''
						}}
						validationSchema={ValidationSchema}
						onSubmit={onSubmit}
					>
						{({ errors, touched, values }) => (
							<Form>
								<div className={styles.userInfo}>
									<InputPanel
										errors={errors.name}
										touched={touched.name}
										values={values.name}
										type="name"
										status={status}
										label="Name"
									/>
									<InputPanel
										errors={errors.username}
										touched={touched.username}
										values={values.username}
										type="username"
										status={status}
										label="User name"
									/>
									<InputPanel
										errors={errors.email}
										touched={touched.email}
										values={values.email}
										type="email"
										status={status}
										label="E-mail"
									/>
									<InputPanel
										errors={errors.street}
										touched={touched.street}
										values={values.street}
										type="street"
										status={status}
										label="Street"
									/>
									<InputPanel
										errors={errors.city}
										touched={touched.city}
										values={values.city}
										type="city"
										status={status}
										label="City"
									/>
									<InputPanel
										errors={errors.zipcode}
										touched={touched.zipcode}
										values={values.zipcode}
										type="zipcode"
										status={status}
										label="Zip code"
									/>
									<InputPanel
										errors={errors.phone}
										touched={touched.phone}
										values={values.phone}
										type="phone"
										status={status}
										label="Phone"
									/>
									<InputPanel
										errors={errors.website}
										touched={touched.website}
										values={values.website}
										type="website"
										status={status}
										label="Website"
									/>
									<div className={styles.row}>
										<div className={styles.titleComment}>Comment</div>
										<Field
											className={styles.inputComment}
											id="comment"
											name="comment"
											type="comment"
											disabled={status}
										/>
									</div>
								</div>

								<Footer>
									<button
										className={styles.button}
										type="submit"
										disabled={
											errors.name ||
											errors.city ||
											errors.email ||
											errors.phone ||
											errors.street ||
											errors.username ||
											errors.website ||
											errors.zipcode
										}
									>
										Отправить
									</button>
								</Footer>
							</Form>
						)}
					</Formik>
				)}
			</div>
		</>
	)
}

export default UserProfile
