import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center py-10 bg-gray-50 rounded-lg shadow-lg'>
        <p className='text-2xl font-semibold text-gray-800'>
            Subscribe for 20% Off Your Next Purchase
        </p>
        <p className='text-gray-500 mt-3 text-lg'>
            Stay updated on the latest sneaker drops and exclusive apparel collections at SneakPeak. Don’t miss out on special deals and offers!
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 p-2 border border-gray-300 rounded-full'>
            <input className='w-full p-4 text-lg rounded-full outline-none border-none focus:ring-2 focus:ring-indigo-500' type="email" placeholder="Enter your email" required/>
            <button type='submit' className='bg-black text-white text-xs px-8 py-4 rounded-full hover:bg-gray-800 transition duration-300'>
                SUBSCRIBE
            </button>
        </form>
    </div>
  )
}

export default NewsletterBox
