import React from 'react'

const HomeFooter = () => {
  return (
    <>
    <div className="bg-myBgColor flex justify-start h-96 ">
        <div className='p-11'>
            <p className='text-myTextColor pb-2 text-sm'>Adress</p>
            <p className="bg-myblue text-white rounded-full italic font-bold w-52 py-2 px-4 mb-3"><span>P</span> +90 555 333 55 33</p>
            <p className="bg-myblue text-white rounded-full font-bold w-52 py-2 px-4"><span>M</span> info@tryös.com</p>
        </div>


        <div className='p-11'>
            <p className='text-white pb-2 font-semibold'>Navigations</p>
            <p className='pb-2'><a className='text-myTextColor text-sm' href="">About Us</a></p>
            <p className='pb-2'><a className='text-myTextColor text-sm' href="">FAQs Page</a></p>
            <p className='pb-2'><a className='text-myTextColor text-sm' href="">Checkout</a></p>
            <p className='pb-2'><a className='text-myTextColor text-sm' href="">Contact</a></p>
            <p className='pb-2'><a className='text-myTextColor text-sm' href="">Blog</a></p>
        </div>


        <div className='p-11'>
            <p className='text-white pb-2 font-semibold'>My Acoount</p>
            <p className='pb-2'><a className='text-myTextColor pb-2 text-sm' href="">My Profile</a></p>
            <p className='pb-2'><a className='text-myTextColor pb-2 text-sm' href="">My Account</a></p>
            <p className='pb-2'><a className='text-myTextColor pb-2 text-sm' href="">Favorites</a></p>
        </div>
    </div>


        <p className='text-center bg-myBgColor text-white text-sm font-medium pb-4'><span>&</span> 2023. All Rights Reserved</p>
    </>
  )
}

export default HomeFooter