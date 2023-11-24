import { FC } from 'react'

import s from './UserList.module.scss'

export interface IUser {
  email: string
  number: string
}

export const UserList: FC<{
  users: IUser[]
  currentEmail: string
}> = ({ users, currentEmail }) => {
  if (!users.length && currentEmail) {
    return (
      <section className={s.section}>
        <h4>Нет совпадений</h4>
      </section>
    )
  }

  return (
    <section className={s.section}>
      {users.map((user, i) => (
        <div key={i}>
          <h4>Email: {user.email}</h4>
          <p>Number: {user.number}</p>
        </div>
      ))}
    </section>
  )
}
