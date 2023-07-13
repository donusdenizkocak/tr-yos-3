import React from 'react'

export const SubmitReview = () => {
  return (
    
   <div className="block  rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
  <form>
    {/*E-mail input*/}
    <div className='flex'>
    <div className=" mb-6 me-3 flex-1" data-te-input-wrapper-init="">
    <label
        htmlFor="exampleInputEmail1"
        className="pointer-events-none  mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-slate-600 transition-all duration-200 ease-out peer-focus:-translate-y-[1.2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-slate-700 dark:peer-focus:text-primary"
      >
        Email address
      </label>
      <input
        type="text"
        className="peer block min-h-[auto] w-full rounded border-2  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-50 data-[te-input-state-active]:placeholder:opacity-50 motion-reduce:transition-none text-gray-500 dark:placeholder:text-neutral-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:border-blue-500"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
    
      
    </div>
     {/*Password input*/}
     <div className=" mb-6 flex-1" data-te-input-wrapper-init="">
     <label
        htmlFor="exampleInputPassword2"
        className="pointer-events-none  mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-slate-700 dark:peer-focus:text-primary"
      >
        Email
      </label>
      <input
        type="email"
        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-50 data-[te-input-state-active]:placeholder:opacity-50 motion-reduce:transition-none text-gray-500 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:border-blue-500"
        id="exampleInputPassword2"
        placeholder="Password"
      />
     
    </div>

    </div>
    <div className='flex '>
    <div className=" mb-6 me-3 flex-1" data-te-input-wrapper-init="">
    <label
        htmlFor="exampleInputEmail3"
        className="pointer-events-none  mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-slate-700 dark:peer-focus:text-primary"
      >
        Phone No
      </label>
      <input
        type="email"
        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-50 data-[te-input-state-active]:placeholder:opacity-50 motion-reduce:transition-none text-gray-500 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:border-blue-500"
        id="exampleInputEmail3"
        aria-describedby="emailHelp"
        placeholder="Your Contact"
      />
     
    </div>
     {/*Password input*/}
     <div className=" mb-6 flex-1" data-te-input-wrapper-init="">
    
     <label
        htmlFor="exampleInputEmail3"
        className="pointer-events-none  mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-slate-700 dark:peer-focus:text-primary"
      >
       Ratting
      </label>
  <select
    id="exampleInputEmail3"
    className="bg-transparent     focus:ring-slate-300 focus:border-blue-500     dark:placeholder-gray-400 dark:focus:ring-slate-200 dark:focus:border-blue-500
    
    peer block min-h-[auto] w-full rounded border-2  px-3 py-[0.55rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-50 data-[te-input-state-active]:placeholder:opacity-50 motion-reduce:transition-none text-gray-500 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    
    
  >
    <option selected="" className='p-2'>1: Very Poor</option>
    <option value="US" className='p-2'>2: Poor</option>
    <option value="CA" className='p-2'>3: Good</option>
    <option value="FR" className='p-2'>4: Very Good</option>
    <option value="DE" className='p-2'>5: Super</option>
  </select>
    </div>
    </div>

   
         {/*Message textarea*/}
      <div className=" mb-6" data-te-input-wrapper-init="">
          <label
              htmlFor="exampleFormControlTextarea13"
              className="pointer-events-none  mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-800 transition-all duration-200 ease-out peer-focus:-translate-y-[1.2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-slate-700 dark:peer-focus:text-primary"
            >
            Your Message
            </label>
            <textarea
              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-50 data-[te-input-state-active]:placeholder:opacity-50 motion-reduce:transition-none text-gray-500  dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:border-blue-500"
              id="exampleFormControlTextarea13"
              rows={3}
              placeholder="Messages"
              defaultValue={""}
            />     
      </div>
   
    
   
   
    {/*Submit in button*/}
    <div className='text-center'> 
    <button
      type="submit"
      className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block  rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init=""
      data-te-ripple-color="light"
    >
      Submit Review
    </button>
    </div>
  </form>
</div>

  )
}
