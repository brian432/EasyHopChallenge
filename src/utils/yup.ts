import * as yup from 'yup'

const required = 'Required field'

export const personalInformationSchema = yup.object().shape({
  fullName: yup.string().matches(/^[a-zA-ZÀ-ÿ]{2,}(?:\s[a-zA-ZÀ-ÿ]+)+$/, 'Enter a valid full name.').required(required),
  phoneNumber: yup.string().min(10).matches(/^\+?\d{1,3}[-\s]?\d{3,4}[-\s]?\d{4}$/, 'Enter a valid phone number').required(required),
  contactPreference: yup.string().oneOf(["Email", "Phone"]).required(required)
})
