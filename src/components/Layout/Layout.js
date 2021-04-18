import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './Layout.module.css'
import Image from 'next/image'
import Brightness6Rounded from '@material-ui/icons/Brightness6Rounded'

const Layout = ({ children, title = 'World Ranks' }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('theme')
    )
    setTheme(localStorage.getItem('theme'))
  }, [])

  const switchTheme = () => {
    if (theme === 'light') {
      saveTheme('dark')
    } else {
      saveTheme('light')
    }
  }
  const saveTheme = (theme) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <Link href='/'>
          <Image
            src='/images/Love.png'
            height={144}
            width={144}
            alt='The owner of it.'
          />
        </Link>
        <button className={styles.themeSwitcher} onClick={switchTheme}>
          <Brightness6Rounded />
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Hey! I'm Surafel Melese</footer>
    </div>
  )
}

export default Layout
