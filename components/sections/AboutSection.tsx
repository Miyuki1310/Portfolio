import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { title } from 'process'
import { aboutTitle } from '@/data/About'

const AboutSection = () => {
  return (
    <section id='about' className='bg-contaner text-white '>
        <BentoGrid className='text-white'>
            {
                aboutTitle.map((item, index) => (
                    <BentoGridItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        img={item.img}
                    />
                ))
            }
        </BentoGrid>
    </section>
  )
}

export default AboutSection