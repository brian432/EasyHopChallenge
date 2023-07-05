import React, { FC } from 'react'
interface ErrorMessageProps {
  error: string | null
}
const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  return error
    ? <span className='errorColor'>{error}</span>
    : null;
}
export default ErrorMessage