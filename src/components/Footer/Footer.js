import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Practice portfolio project using the basic concept state and props</p>
      <small>Created in Dubai on 13 August 2021.</small>
      <small>Visit <a href="https://github.com/JibranAdvany/birthday-reminder">Github Repository</a></small>
    </footer>
  )
}

export default Footer
