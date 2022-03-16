import styles from './Footer.module.scss'

function Footer(props) {
	return <div className={styles.footer}>{props.children}</div>
}

export default Footer
