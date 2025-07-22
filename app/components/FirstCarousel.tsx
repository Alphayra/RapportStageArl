import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const CarouselPics = 
[
		'../dist/images/slider-rapport/image001.png',
		'../dist/images/slider-rapport/image002.png',
		'../dist/images/slider-rapport/image003.png',
		'../dist/images/slider-rapport/image004.png',
		'../dist/images/slider-rapport/image005.png',
		'../dist/images/slider-rapport/image006.png',
		'../dist/images/slider-rapport/image007.png',
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
				<img src={ CarouselPics[index] } alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
