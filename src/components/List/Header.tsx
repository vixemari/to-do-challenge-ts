import styles from "./Header.module.css";

export interface HeaderProps {
  tasksLength: number;
  countTasks: number;
}
export function Header({ tasksLength, countTasks }: HeaderProps) {
  return (
    <div className={styles.header}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{tasksLength}</span>
      </aside>
      <aside>
        <p>Concluídas</p>
        <span>
          {
            tasksLength === 0 ? tasksLength : `${countTasks} de ${tasksLength}`
          }
        </span>
      </aside>
    </div>
  );
}
