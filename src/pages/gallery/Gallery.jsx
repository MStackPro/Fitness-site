import './gallery.css'
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg'


const Gallery = () => {
  const galleryLength = 15;
  const images = []

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
    
  }
  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil provident animi numquam natus nobis temporibus, dicta autem enim?
    </Header>
    <section className='gallery'>
      <div className="container gallery-container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery image ${index + 1}`} />
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery