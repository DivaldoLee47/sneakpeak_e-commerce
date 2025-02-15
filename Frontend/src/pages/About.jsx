import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t mt-14'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            SneakPeak was born from a deep passion for sneakers and streetwear culture. Our mission is to bring sneakerheads and fashion enthusiasts the latest and most sought-after kicks and apparel from top brands worldwide.
          </p>
          <p>
            From limited-edition drops to timeless classics, we carefully curate our collection to ensure that every sneaker and piece of apparel we offer meets the highest standards of style, comfort, and quality.
          </p>
          <b className='text-gray-800'>
            Our Mission
          </b>
          <p>At SneakPeak, we strive to be the go-to destination for sneaker lovers. Our goal is to make it easier for you to find, buy, and enjoy your favorite sneakers and apparel, whether you're into high-performance athletic shoes or the latest streetwear trends.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exclusive Collections</b>
          <p className='text-gray-600'>We offer a curated selection of the hottest sneaker releases and premium apparel from top brands.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Authenticity Guaranteed</b>
          <p className='text-gray-600'>Every product we sell is 100% authentic, sourced directly from verified suppliers and brands.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Our dedicated team is always here to assist you, making sure your shopping experience is smooth and enjoyable.</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About
