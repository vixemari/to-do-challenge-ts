import { Header } from './components/Header'
import styles from './App.module.css'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Task as Item} from './components/List/Task'
import Empty from './components/List/Empty'
import { Header as TaskHeader } from './components/List/Header'
import { useState } from 'react'

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [input, setInput] = useState('')

  const addNewTask = () => {

    if(input === '') {
      return
    }

    const newTask = {
      id: Math.random(),
      text: input,
      isChecked: false
    }

    setTasks([...tasks, newTask])
    setInput('')

  }

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  const countTasks = tasks.reduce((acc, task) => {
    if(task.isChecked) {
      return acc + 1
    }
    return acc
  }, 0)

  const handleChangeCheck = (id: number) => {
    const newTasks = tasks.map((task) => {
      if(task.id === id) {
        return {
          ...task,
          isChecked: !task.isChecked
        }
      }
      return task
    })
    setTasks(newTasks)
  }


  return (
    <main>
      <Header />
      <section className={styles.container}>
        <div className={styles.taskInfoContainer}>
        <Input
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button
          onClick={addNewTask}
        />
        </div>
      <div className={styles.list}>
        <TaskHeader
          tasksLength={tasks.length}
          countTasks={countTasks}
        />
          {
            tasks.length > 0 ? (
              tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  onDelete={deleteTask}
                  handleChangeCheck={handleChangeCheck}
                  />
              ))
            ) : (
              <Empty />
            )
          }
      </div>
      </section>
    </main>
  )
}

export default App
