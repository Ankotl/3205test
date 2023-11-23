import s from './Button.module.scss'
import { clsx } from 'clsx'

const ButtonDefaultAsType = 'button' as const
type ButtonDefaultAsType = typeof ButtonDefaultAsType

type IButtonOwnProps<E extends React.ElementType> = {
  children: React.ReactNode
  className?: string
  as?: E
}
type IButtonProps<E extends React.ElementType> = IButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof IButtonOwnProps<E>>

export const Button = <E extends React.ElementType = ButtonDefaultAsType>({
  className,
  children,
  as,
  ...otherProps
}: IButtonProps<E>) => {
  const Component = as || ButtonDefaultAsType
  return (
    <Component className={clsx(s.button, className)} {...otherProps}>
      {children}
    </Component>
  )
}
