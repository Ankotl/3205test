import { Button } from '@/components/UI/Button/Button'
import { InputEmail } from '@/components/UI/InputEmail/InputEmail'
import { InputPhone } from '@/components/UI/InputPhone/InputPhone'
import { SubmitHandler, useForm } from 'react-hook-form'

import s from './Form.module.scss'

interface IFormFields {
  email: string
  phone: string
}

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
  } = useForm<IFormFields>({ mode: 'onBlur' })

  const onSubmit: SubmitHandler<IFormFields> = async (data) => {
    const req = { email: data.email, phone: data.phone.replace(/[^A-Za-zА-Я0-9]/g, '') }

    console.info(req)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <InputEmail error={errors?.email?.message} register={register} watch={watch} />
      <InputPhone control={control} error={errors?.phone?.message} />
      <Button className={s.form__btn} type="submit">
        Отправить
      </Button>
    </form>
  )
}
