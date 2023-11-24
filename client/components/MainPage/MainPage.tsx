'use client'

import { useState } from 'react'
import { Form } from './Form/Form'
import s from './MainPage.module.scss'
import { IUser, UserList } from './UserList/UserList'

export const MainPage = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [currentEmail, setCurrentEmail] = useState('')

  const handleAddUsers = (users: IUser[]) => {
    setUsers(users)
  }

  const changeCurrentEmail = (email: string) => {
    setCurrentEmail(email)
  }

  return (
    <section className={s.section}>
      <h2 className={s.section__title}>Введите данные</h2>
      <Form handleAddUsers={handleAddUsers} changeCurrentEmail={changeCurrentEmail} />
      <UserList users={users} currentEmail={currentEmail} />
    </section>
  )
}
