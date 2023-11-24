import { Button } from '@/components/UI/Button/Button'
import { InputEmail } from '@/components/UI/InputEmail/InputEmail'
import { InputPhone } from '@/components/UI/InputPhone/InputPhone'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUser } from '../UserList/UserList'

import s from './Form.module.scss'

interface IFormFields {
  email: string
  phone: string
}

export const Form: FC<{
  handleAddUsers: (users: IUser[]) => void
  changeCurrentEmail: (email: string) => void
}> = ({ handleAddUsers, changeCurrentEmail }) => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
  } = useForm<IFormFields>({ mode: 'onBlur' })

  const onSubmit: SubmitHandler<IFormFields> = async (data) => {
    const req = { email: data.email, number: data.phone?.replace(/[^A-Za-zА-Я0-9]/g, '') || '' }
    setIsLoading(true)

    const res = await fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...req }),
    })

    const content = await res.json()
    setIsLoading(false)
    changeCurrentEmail(req.email)
    handleAddUsers(content)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <InputEmail error={errors?.email?.message} register={register} watch={watch} />
      <InputPhone control={control} error={errors?.phone?.message} />
      <Button className={s.form__btn} type="submit">
        {!isLoading ? 'Отправить' : 'Загрузка...'}
      </Button>
    </form>
  )
}
