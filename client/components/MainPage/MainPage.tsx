'use client'

import { Form } from './Form/Form'
import s from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <section className={s.section}>
      <h2 className={s.section__title}>Введите данные</h2>
      <Form />
    </section>
  )
}
