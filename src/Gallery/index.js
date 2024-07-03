import './gallery.scss'
import Image1 from '../assets/img/img-landscape.jpeg'
import Image2 from '../assets/img/img-portrait.png'

const ImageList = [
  Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2, Image1, Image2,
]

export const Gallery = () => {
  return (
    <section className="gallery container">
      <div className="gallery-cover">
        {
          ImageList.map((o, i) => (
            <div key={i} className=''>
              <div className='ratio'>
                <img src={o} alt="This is Alt" />
              </div>
              <p>Product name is quite long in some cases.</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}