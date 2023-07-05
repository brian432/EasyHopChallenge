import { FC } from 'react'
import ContactForm from '../components/Form/Form'
import './home.css'
interface HomeProps { }
const Home: FC<HomeProps> = ({ }) => {
  return (
    <main className='home'>
      <h1 className='title'>Personal Information</h1>
      <ContactForm />
    </main>
  )
}
export default Home