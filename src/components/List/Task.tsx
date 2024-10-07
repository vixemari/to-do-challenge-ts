import styles from './Task.module.css'
import { Trash } from 'phosphor-react'
import { ITask } from "../../App"


interface Props {
  data: ITask,
  onDelete: (id: number) => void
  handleChangeCheck: (id: number) => void
}

export  function Task({ data , onDelete, handleChangeCheck }: Props) {
  return (
    <div className={styles.task}>
      <label className={styles.checkbox}>
        <input type="checkbox" checked={data.isChecked} onChange={() => handleChangeCheck(data.id)}/>
        <p>{data.text}</p>
      </label>
      <button onClick={() => onDelete(data.id)}>
        <Trash size={24} />
      </button>
    </div>
  )
}
