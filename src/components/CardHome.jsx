import React from 'react'

 const CardHome = () => {
  return (
    <div className='container'>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
  <a href="#">
    <img className="rounded-t-lg w-96" src="https://cdn.pixabay.com/photo/2022/07/10/12/44/large-leaved-lupine-7312789_1280.jpg" alt="" />
  </a>
  <div className='flex '>
  <div className="p-5 basis-2/3">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-sky-400">
       Sosyoloji 
      </h5>
    </a>
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-sky-400">
        Fen Edebiyat Fakültesi
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-800">
    HACETTEPE UNİVERSTY
    </p>
    <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Universty
      <svg
        aria-hidden="true"
        className="w-4 h-4 ml-2 -mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  </div>
    <div ><svg className=" w-44 h-10 my-5 -mr-1 text-orange-400" aria-hidden="true"
        fill="currentColor"
          viewBox="0 0 576 512">
  {/*! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY  4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
  <path d="M256 368C256 403.7 266.6 436.9 284.9 464.6L279.4 470.3C266.4 483.2 245.5 483.2 233.5 470.3L39.71 270.5C-16.22 212.5-13.23 116.6 49.7 62.68C103.6 15.73 186.5 24.72 236.5 75.67L256.4 96.64L275.4 75.67C325.4 24.72 407.3 15.73 463.2 62.68C506.1 100.1 520.7 157.6 507 208.7C484.3 198 458.8 192 432 192C334.8 192 256 270.8 256 368zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM476.7 324.7L416 385.4L387.3 356.7C381.1 350.4 370.9 350.4 364.7 356.7C358.4 362.9 358.4 373.1 364.7 379.3L404.7 419.3C410.9 425.6 421.1 425.6 427.3 419.3L499.3 347.3C505.6 341.1 505.6 330.9 499.3 324.7C493.1 318.4 482.9 318.4 476.7 324.7H476.7z" />
</svg></div>
  </div>
  <hr/>
  <div className='flex justify-between p-3 '>
    <div className='flex'> 
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"> <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/> </svg>
       <p className=''>Ankara</p> 
    </div>
    <div >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="50" height="50" fill="none"/><rect x="16" y="64" width="224" height="128" rx="8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="168" y1="64" x2="240" y2="128" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="168" y1="192" x2="240" y2="128" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="88" y1="64" x2="16" y2="128" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="88" y1="192" x2="16" y2="128" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
        30000/year
    </div>
  </div>
  </div>
</div>

  )
}
export default CardHome;