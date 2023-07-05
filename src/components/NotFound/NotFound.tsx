import { FC } from 'react'
import './notFound.css'
interface NotFoundProps { }
const NotFound: FC<NotFoundProps> = ({ }) => {
  return (
    <div className='notFound'>
      404 | Página no encontrada
    </div>
  )
}
export default NotFound