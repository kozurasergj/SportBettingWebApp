import cn from 'classnames'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { toggleLanguageDropdown } from '../../store/slices/languageDropdownSlice'
import styles from './Header.module.scss'

const pages = [
  { label: 'HOMEPAGE', href: '/' },
  { label: 'LIVE BETS', href: '/livebets' },
  { label: 'SPORTS', href: '/sports' },
  { label: 'HIGHLIGHTS', href: '/highlights' },
  { label: 'TOP MATCHES', href: '/topmatches' },
]

export const Header = () => {
  const location = useLocation()
  const { pathname } = location
  const isOpen = useAppSelector((state) => state.languageDropdown.isOpen)
  const dispatch = useAppDispatch()

  const toggleDropdown = () => {
    dispatch(toggleLanguageDropdown())
  }

  return (
    <header>
      <div className={styles.header}>
        <img
          src='./header/logo.png'
          alt='logo'
          className={styles.header__logo}
        />
        <nav className={styles.header__menu}>
          {pages.map(({ label, href }, index) => (
            <a
              href={href}
              key={index}
              className={cn(
                styles.header__link,
                href === pathname && styles['header__link-active']
              )}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className={styles.header__icons}>
          <a href='/' className={styles.header__icon}>
            <img src='./header/search_litle.svg' alt='image' />
          </a>
          <a href='/' className={styles.header__icon}>
            <img src='./header/list.svg' alt='image' />
          </a>
          <a href='/' className={styles.header__icon}>
            <img src='./header/time.svg' alt='image' />
          </a>
        </div>
        <div className={styles['header__user-info']}>
          <p className={styles.header__value}>800,000.00CFD</p>
          <p className={styles.header__username}>testuser12</p>
        </div>
        <button className={styles.header__withdrawal}>WITHDRAWAL</button>
        <div
          className={`${styles.header__languages} ${
            isOpen ? styles['header__languages-active'] : ''
          }`}
        >
          <button onClick={toggleDropdown}>
            <img
              className={cn(
                styles.header__language,
                styles['header__language-first']
              )}
              src='./header/English.png'
              alt='image'
            />
          </button>
          <div className={styles['header__languages-list']}>
            <a href='/'>
              <img
                className={styles.header__language}
                src='./header/Germany.png'
                alt='image'
              />
            </a>
            <a href='/'>
              <img
                className={styles.header__language}
                src='./header/Canada.png'
                alt='image'
              />
            </a>
            <a href='/'>
              <img
                className={styles.header__language}
                src='./header/Ukraine.png'
                alt='image'
              />
            </a>
          </div>
        </div>
        <button className={styles['header__sign-out']}>
          <img src='./header/sign-out.svg' alt='image' />
        </button>
      </div>
    </header>
  )
}
