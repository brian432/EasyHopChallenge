import React, { Dispatch, createContext, useReducer, ReactNode, FC } from 'react'

interface Action {
  type: 'updateFormData'
  payload: IFormData
}

export interface AppContext {
  state: IFormData
  dispatch: Dispatch<Action>
}

export interface IFormData {
  fullName: string,
  phoneNumber: string,
  contactPreference: string
}

interface Props {
  children: ReactNode
}

const initialState: IFormData = {
  fullName: '',
  phoneNumber: '',
  contactPreference: ''
}

export const Reducer = (state: IFormData, action: Action): IFormData => {
  switch (action.type) {
    case 'updateFormData':
      return action.payload
    default:
      return state
  }
}

export const FormDataContext = createContext<AppContext>({
  state: initialState,
  dispatch: () => { }
})

export const FormDataProvider: FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <FormDataContext.Provider value={{ state, dispatch }}>
      {children}
    </FormDataContext.Provider>
  )
}