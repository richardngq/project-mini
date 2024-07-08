'use client'
import { FC, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Img01 from '@/assets/img/img-logo-01.png';
import Img02 from '@/assets/img/img-logo-02.png';
import Img03 from '@/assets/img/img-logo-03.png';
import useEmblaCarousel from 'embla-carousel-react';
import Link from "next/link";

const carousel = [
  {
    imglist: [Img01, Img02, Img03]
  },
  {
    imglist: [Img02, Img03, Img01]
  },
  {
    imglist: [Img03, Img01, Img02]
  }
]
export const CTA: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })


  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  });


  return (
    <div className="w-full py-1.5 px-3 flex gap-2">
      <div className="flex lg:flex-row items-center border border-[#fdfcfc] rounded-3xl">
        {
          carousel.map((o, i) => (
            <div className={`grid-1 overflow-hidden w-full ${i === 1 && 'border-l border-r border-[#4A5358]'}`} key={i}>
              <div className={`embla`} ref={emblaRef}>
                <div className={`embla__container`}>
                  {
                    o.imglist.map((o, j) => (
                      <div key={j} className={`embla__slide`}><Image src={o} alt="" /></div>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <Link href={'#'} className="w-[45vw] bg-yellow text-theme whitespace-nowrap text-3xl inline-flex items-center justify-center gap-3 py-8 rounded-3xl group">
        Request Access
        <div className="w-4">
          <div className={`bg-theme rounded-full w-8 h-8 p-2 group-hover:w-12 transition-all duration-300`}>
            <div className="w-4 h-4 ms-auto transition-all">
              <svg viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.086 0.424667L32.4375 15.8262L17.0847 31.2277L8.37224 31.2277L20.6941 18.9058L0.408366 18.9058L0.408367 12.7452L20.6941 12.7452L8.37361 0.424666L17.086 0.424667Z" fill="#F9A600"></path></svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}