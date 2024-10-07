
import styles from './Empty.module.css'
import Clipboard from '../../assets/Clipboard.svg'
export default function Empty() {
  return (
    <div className={styles.container}>
      <img src={Clipboard} alt="clipboard" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
