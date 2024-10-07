import { PlusCircle } from 'phosphor-react'
import styles from './Buttton.module.css'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
export function Button({ ...rest }: Props) {
  return (
    <button
      className={styles.button}
      {...rest}>
      Criar
      <PlusCircle size={20}
      />
    </button>
  )
}
