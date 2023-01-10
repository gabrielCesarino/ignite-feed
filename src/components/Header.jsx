import styles from './Header.module.scss'
import IgniteLogo from '../assets/ignite-logo.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <img src={IgniteLogo} alt="Ignite Feed" />
        </header>
    )
}