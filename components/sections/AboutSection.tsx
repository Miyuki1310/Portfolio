import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { title } from 'process'
import { aboutTitle } from '@/data/About'
import { SubAbout } from '@/data/SubAbout'

const AboutSection = () => {
  return (
    <section id='about' className='bg-contaner text-white '>
        <BentoGrid className='text-white'>
            {
                aboutTitle.map((item, index) => (
                    <BentoGridItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        contentClassName={item.contentClassName}
                        img={item.img}
                    />
                ))
            }
        </BentoGrid>
        <BentoGrid className='mt-10 md:auto-rows-[12rem] text-white'>
            {SubAbout.map((item) => (
                <BentoGridItem
                    key={item.id}
                    id = {item.id}
                    title={item.title}
                    className={item.className}
                    squareImg={item.squareImg}
                    contentClassName={item.contentClassName}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default AboutSection