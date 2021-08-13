import people from './../../data';
import ListItem from './ListItem';
import styles from './List.module.css';
import { useState } from 'react';

const List = () => {
  const [cards, setCards] = useState(people);

  const handleRemoveAll = () => {
    setCards([])
  }

  const handleRegenerateAll = () => {
    setCards(people)
  }
  
  return (
    <ul className={styles.people_list}>

      {cards.map(person => (
        <ListItem key={person.id} fullName={person.name} age={person.age} headShot={person.image} />
      ))}

      {cards.length > 0 ? <button className={styles.button} onClick={handleRemoveAll}>Remove all</button> : <button className={styles.button} onClick={handleRegenerateAll}>Regenerate list</button>}
      
      
    </ul>
  )
}

export default List
