import styles from './Header.module.scss'

function Header(props) {
	return <div className={styles.header}>{props.children}</div>
}

export default Header
