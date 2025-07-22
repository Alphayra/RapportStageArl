import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const diapo = [
  '../images/slider-final/scr38.png',
  '../images/slider-final/scr39.png',
  '../images/slider-final/scr41.png',
  '../images/slider-final/scr42.png',
  '../images/slider-final/scr43.png',
  '../images/slider-final/scr45.png',
  '../images/slider-final/scr48.png',
  '../images/slider-final/scr49.png'
]

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <img src={ diapo[index] } alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
