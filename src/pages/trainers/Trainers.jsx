import './trainers.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';
import { trainers } from '../../data';
import Trainer from '../../components/Trainer'


const Trainers = () => {
  return (
    <>
    <Header title="Our Trainers"  image={HeaderImage}>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil provident animi numquam natus nobis temporibus, dicta autem enim?
    </Header>
    <section className='trainers'>
      <div className="container trainers-container">
        {
          trainers.map(({id, image, name, job, socials}) => {
            return <Trainer key={id} image={image} name={name} job={job} socials={
              [
                {icon: <BsInstagram/>, link: socials[0]},
                {icon: <AiOutlineTwitter/>, link: socials[1]},
                {icon: <FaFacebookF/>, link: socials[2]},
                {icon: <FaLinkedin/>, link: socials[3]},
              ]
            } />
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers