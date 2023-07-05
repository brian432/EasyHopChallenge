import * as yup from 'yup'

const required = 'Required field'

export const personalInformationSchema = yup.object().shape({
  fullName: yup.string().min(3, 'Ingrese mas de 2 caracteres').required(required),
  phoneNumber: yup.string().matches(/^\d+$/, 'Enter only numbers').required(required),
  contactPreference: yup.string().oneOf(["Email", "Phone"]).required(required)
})