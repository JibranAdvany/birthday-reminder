import styles from './ListItem.module.css';

const ListItem = ({fullName, age, headShot}) => {
  return (
    <li className={styles.list_item}>
      <div className={styles.main_information}>
        <img src={headShot} alt={fullName} className={styles.image} />
        <h2 className={styles.name}>{fullName}</h2>
      </div>

      <div className={styles.secondary_information}>
        <p>{`Celebrating ${age + 1} years today!`}</p>
      </div>
    </li>
  )
}

export default ListItem
