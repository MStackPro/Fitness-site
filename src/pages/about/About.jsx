import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil provident animi numquam natus nobis temporibus, dicta autem enim?
    </Header>

    <section className='about-story'>
      <div className="container about-story-container">
        <div className="about-section-image">
          <img src={StoryImage} alt="about story image" />
        </div>
        <div className="about-section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quia? Beatae laudantium rerum explicabo asperiores sunt quis incidunt eaque enim, magni, sit tenetur corrupti illum placeat unde quod atque dolorum amet nam laborum. Repellendus, quae.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique beatae ducimus nisi maiores tenetur animi obcaecati quas natus provident neque accusantium, tempore dolorem rerum ea iure odit perspiciatis aperiam vel sed fugit laudantium? Expedita sint ipsum corporis impedit nisi at!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor modi rerum dolorem pariatur natus qui esse excepturi voluptatem consequatur?
          </p>
        </div>
      </div>
    </section>

    <section className='about-vision'>
      <div className="container about-vision-container">

        <div className="about-section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quia? Beatae laudantium rerum explicabo asperiores sunt quis incidunt eaque enim, magni, sit tenetur corrupti illum placeat unde quod atque dolorum amet nam laborum. Repellendus, quae.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique beatae ducimus nisi maiores tenetur animi obcaecati quas natus provident neque accusantium, tempore dolorem rerum ea iure odit perspiciatis aperiam vel sed fugit laudantium? Expedita sint ipsum corporis impedit nisi at!
          </p>
        </div>

        <div className="about-section-image">
          <img src={VisionImage} alt="about vision image" />
        </div>
      </div>
    </section>

    <section className='about-mission'>
      <div className="container about-mission-container">
        <div className="about-section-image">
          <img src={MissionImage} alt="about mission image" />
        </div>
        <div className="about-section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quia? Beatae laudantium rerum explicabo asperiores sunt quis incidunt eaque enim, magni, sit tenetur corrupti illum placeat unde quod atque dolorum amet nam laborum. Repellendus, quae.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique beatae ducimus nisi maiores tenetur animi obcaecati quas natus provident neque accusantium, tempore dolorem rerum ea iure odit perspiciatis aperiam vel sed fugit laudantium? Expedita sint ipsum corporis impedit nisi at!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor modi rerum dolorem pariatur natus qui esse excepturi voluptatem consequatur?
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About