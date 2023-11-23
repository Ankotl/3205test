import { FC, ReactNode } from 'react'
import s from './InputWrap.module.scss'
import clsx from 'clsx'

interface PropsWrapper {
  children: ReactNode
  className?: string
  isLabel?: boolean
  isFilled?: boolean | string
}

interface Props extends PropsWrapper {
  title?: string
  error?: string | boolean
}

const InputWrapper: FC<PropsWrapper> = ({ isLabel, children, className }) => {
  return isLabel ? <label className={className}>{children}</label> : <div className={className}>{children}</div>
}

export const InputWrap: FC<Props> = ({ children, className, title, isLabel = true, error, isFilled }) => {
  return (
    <InputWrapper isLabel={isLabel} className={clsx(s.inputWrap, className, error && s['inputWrap--is-error'])}>
      {title && <p className={clsx('input-wrap__title', s.title)}>{title}</p>}
      <div className={clsx('input-wrap__inner-wrap', s.innerWrap)}>
        {children} {error && typeof error === 'string' && <span className={s.error}>{error}</span>}
      </div>
    </InputWrapper>
  )
}
