import Swal, { SweetAlertResult } from "sweetalert2"

export const swalAlert = async (title: string, text: string): Promise<SweetAlertResult> => {
  return await Swal.fire({
    title,
    text,
    width: '400px',
    icon: 'info',
    timer: 5000,
    timerProgressBar: true,
    confirmButtonText: 'Aceptar'
  })
}