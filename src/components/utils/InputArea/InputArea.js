import { Field } from 'formik'

import styles from './InputArea.module.scss'

function InputArea({ error, touched, values, type, status }) {
	return (
		<>
			{error && (touched || values) ? (
				<Field
					className={styles.inputError}
					id={type}
					name={type}
					type={type}
					disabled={status}
				/>
			) : (
				<Field
					className={styles.input}
					id={type}
					name={type}
					type={type}
					disabled={status}
				/>
			)}
		</>
	)
}

export default InputArea
