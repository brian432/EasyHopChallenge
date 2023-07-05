import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import Form from './Form'

describe('Form', () => {
  const fields = ['Full Name', 'Phone', 'Contact Preference']

  it('displays error message for phoneNumber field', async () => {
    const phoneNumberField = screen.getByLabelText('Phone')

    fireEvent.change(phoneNumberField, { target: { value: 'abc' } }) //simular ingreso de caracteres que no sean numeros al phoneInput
    fireEvent.blur(phoneNumberField)

    await waitFor(() => {
      const errorText = screen.getByText('Enter only numbers')
      expect(errorText).toBeDefined()
    })
  })
  it('renders without errors', () => {
    render(<Form />)

    const fullNameField = screen.getByLabelText('Full Name')
    const phoneNumberField = screen.getByLabelText('Phone')
    const contactPreferenceField = screen.getByLabelText('Contact Preference')
    const buttonSubmit = screen.getAllByRole('button', { name: 'Submit' })

    expect(fullNameField).toBeDefined()
    expect(phoneNumberField).toBeDefined()
    expect(contactPreferenceField).toBeDefined()
    expect(buttonSubmit).toBeDefined()
  })

  it.each(fields)('displays error blur message for %s field', async (field) => {//mismo test para los 3 inputs
    render(<Form />)

    const input = screen.getByLabelText(field)
    fireEvent.blur(input)

    await waitFor(() => {
      const errorText = screen.queryAllByText('Required field')
      expect(errorText).toBeDefined()
    })
  })


  it('verifies presence and enabled/disabled state of submit button based on form validity', async () => {
    render(<Form />)

    const fullNameInput = screen.getByLabelText('Full Name')
    const phoneNumberInput = screen.getByLabelText('Phone')
    const contactPreferenceField = screen.getByLabelText('Contact Preference')
    const buttonSubmit = screen.getAllByRole('button', { name: 'Submit' })

    // Verificar que el botón de envío esté presente
    expect(buttonSubmit).toBeDefined()

    // Verificar que el botón de envío esté inicialmente deshabilitado
    expect(buttonSubmit).toBeDisabled()

    // Rellenar los campos requeridos
    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } })
    fireEvent.change(phoneNumberInput, { target: { value: '123456789' } })
    fireEvent.change(contactPreferenceField, { target: { value: 'Email' } })
    // Esperar a que se realicen las validaciones
    await waitFor(() => {
      // Verificar que el botón de envío ahora esté habilitado
      expect(buttonSubmit).toBeEnabled()
    })

    // Limpiar los campos
    fireEvent.change(fullNameInput, { target: { value: '' } });
    fireEvent.change(phoneNumberInput, { target: { value: '' } });
    fireEvent.change(contactPreferenceField, { target: { value: '' } })

    // Esperar a que se realicen las validaciones
    await waitFor(() => {
      // Verificar que el botón de envío esté nuevamente deshabilitado
      expect(buttonSubmit).toBeDisabled();
    });
  });
})