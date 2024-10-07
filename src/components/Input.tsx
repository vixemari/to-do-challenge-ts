import styles from './Input.module.css'
export function Input({
  ...rest
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      type="text"
      placeholder="Adicione uma nova tarefa"
      className={styles.input}
      {...rest}
    />
  )
}
