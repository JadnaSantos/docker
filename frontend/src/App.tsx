import { useEffect, useState } from 'react'
import api from './service/api';
import styles from './app.module.css';

type InstructorsProps = {
  name: string;
  creator: string;
}

function App() {
  const [instructors, setInstructors] = useState<InstructorsProps[]>([]);

  const loadInstructor = async () => {
    try {
      const response = await api.get('/')

      console.log(response)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadInstructor()
  }, [loadInstructor])

  return (
    <div className={styles.app}>
      <div className={styles['app-header']}>
        <p>Proggraming Languages</p>
        {instructors.length > 0 ?
          instructors.map(p => (
            <span>{p.name} - {p.creator}</span>
          )) : `Empty database`}
      </div>
    </div>
  )
}

export default App
