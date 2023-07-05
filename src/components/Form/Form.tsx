import { Field, Form, Formik } from 'formik'
import { FC, useContext } from 'react'
import { personalInformationSchema } from '../../utils/yup'
import { FormDataContext, IFormData } from '../../context/formState'
import { swalAlert } from '../../utils/swal'
import './form.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit'

const ContactForm: FC = ({ }) => {
  const { dispatch } = useContext(FormDataContext)

  const initialValues: IFormData = {
    fullName: '',
    phoneNumber: '',
    contactPreference: ''
  }

  const handleSubmit = (values: IFormData) => {
    const swalText = `Full Name: ${values.fullName} Phone Number: ${values.phoneNumber} Preference Contact: ${values.contactPreference}`
    dispatch({
      type: 'updateFormData',
      payload: values
    })
    swalAlert('Form Data', swalText)
  }

  return (
    <main className='form'>
      <Formik
        initialValues={initialValues}
        validationSchema={personalInformationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values)
          resetForm()
        }}
      >
        {
          ({ errors, touched, isValid, dirty }) => (
            <Form className='formWrapper'>
              <div className='inputsContainer'>
                <ErrorMessage error={errors.fullName && touched.fullName ? errors.fullName : null} />
                <Field id='fullName' name='fullName' className={errors.fullName && touched.fullName && 'campoObligatorio'} spellCheck="false" />
                <label htmlFor='fullName' className='label'>Full Name</label>
              </div>
              <div className='inputsContainer'>
                <ErrorMessage error={errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : null} />
                <Field id='phoneNumber' name='phoneNumber' className={errors.phoneNumber && touched.phoneNumber && 'campoObligatorio'} spellCheck="false" />
                <label htmlFor='phoneNumber' className='label'>Phone</label>
              </div>
              <div className='inputsContainer'>
                <ErrorMessage error={errors.contactPreference && touched.contactPreference ? errors.contactPreference : null} />
                <Field
                  as="select"
                  id="contactPreference"
                  name="contactPreference"
                  className={errors.contactPreference && touched.contactPreference && 'campoObligatorio'}
                >
                  <option value="">Select an option</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                </Field>
                <label htmlFor='contactPreference' className='label'>Contact Preference</label>
              </div>
              <ButtonSubmit  {...{ isValid, dirty }} />
            </Form>
          )
        }
      </Formik>
    </main>
  )
}
export default ContactForm