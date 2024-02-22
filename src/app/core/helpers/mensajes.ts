import Swal from "sweetalert2";

export function generarMensajeError(textoMensaje: string) {
  Swal.fire({
    title: 'Error',
    text: textoMensaje,
    icon: 'error',
    timer: 1000,
    showConfirmButton: false,
  })

}
export function generarMensajeExito(textoMensaje: string) {
  Swal.fire({
    title: textoMensaje,
    icon: 'success',
    timer: 2000,
    showConfirmButton: false,
  })
}