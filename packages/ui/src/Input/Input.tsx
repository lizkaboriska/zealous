import { ChangeEvent, HTMLAttributes, useState } from 'react'
import styled from 'styled-components'

import { themePalette, themeSpacing, themeBorderRadius, themeColor, themeTypography } from '../Theme/themeAccessor'

export const INPUT_SELECTOR = 'zl-input'
export const INPUT_ERR = 'zl-input-err'
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const StyledInput = styled.input`
  background-color: ${themePalette('neutral', 300)};
  border: none;
  border-radius: ${themeBorderRadius('base')};
  padding: ${themeSpacing('small')};
  width: 400px;

  :focus {
    outline: none;
    outline: 2px solid ${themePalette('primary', 500)};
  }
`

const ErrorMessage = styled.div`
  color: ${themeColor('red')};
  width: 400px;
  font-size: ${themeTypography('small')};
  margin: ${themeSpacing('extraSmall')};
`

type InputAttributes = Omit<HTMLAttributes<HTMLInputElement>, 'onChange'>

export enum InputType {
  TEXT = 'TEXT',
  EMAIL = 'EMAIL'
}

export interface InputProps extends InputAttributes {
  value?: string
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void
  type?: InputType
}

export const Input = ({ onChange, type, ...props }: InputProps) => {
  const [errText, setErrText] = useState<string | undefined>()
  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    onChange && onChange(value, e)
    validate(value)
  }

  const validate = (value: string | undefined): void  => {
    if (value && type === InputType.EMAIL) {
      const isValid = EMAIL_REGEX.test(value)
      setErrText(isValid ? undefined : 'Invalid email address.')
    }
  }

  const renderErr = (): React.ReactNode => {
    return errText && <ErrorMessage data-testid={INPUT_ERR}> {errText} </ErrorMessage>
  }

  return (
    <>
    <StyledInput
      data-testid={INPUT_SELECTOR} 
      {...props} 
      onChange={inputOnChange} />
      {renderErr()}
    </>
  )
}
