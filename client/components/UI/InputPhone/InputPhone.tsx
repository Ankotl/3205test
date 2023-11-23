'use client'

import { FC, useState } from 'react'
import { InputWrap } from '@/components/UI/InputWrap/InputWrap'
import clsx from 'clsx'

import { Control, Controller } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'

interface Props {
  control: Control<any>
  className?: string
  error?: string
  title?: string
  name?: string
}

export const InputPhone: FC<Props> = ({ control, className, title = 'Номер телефона', error, name = 'phone' }) => {
  const [showMask, setShowMask] = useState<boolean>(false)

  return (
    <InputWrap title={title} className={clsx(className)} error={error}>
      <Controller
        name={name}
        control={control}
        rules={{
          validate: (value) => {
            const telValue = value?.replace(/[^A-Za-zА-Я0-9]/g, '')

            return true
          },
        }}
        render={({ field }) => (
          <PatternFormat
            getInputRef={field.ref}
            onChange={field.onChange}
            name={field.name}
            format={'##-##-##'}
            mask="#"
            placeholder={'##-##-##'}
            allowEmptyFormatting={showMask}
            onBlur={(e) => {
              field.onBlur()
              const val = e.target.value.replace(/[^A-Za-zА-Я0-9]/g, '')
              setShowMask(val.length > 1)
            }}
            onFocus={() => {
              setShowMask(true)
            }}
          />
        )}
      />
    </InputWrap>
  )
}
