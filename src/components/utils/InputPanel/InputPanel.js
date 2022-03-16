import InputArea from '../InputArea/InputArea'

import styles from './InputPanel.module.scss'

function InputPanel({ errors, touched, values, type, status, label }) {
	return (
		<>
			<div className={styles.title}>{label}</div>

			<InputArea
				error={errors}
				touched={touched}
				values={values}
				type={type}
				status={status}
			/>
		</>
	)
}

export default InputPanel
