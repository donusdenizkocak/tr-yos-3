const HomeAction = () => {
  return (
    <div className="border border-collapse bg-blue-600 px-80 py-20">
      <div>
        <div className="flex-1  justify-center items-center text-white ">
          <h1 className="font-extrabold text-center text-xl">
            Are You Already Working With Us?
          </h1>
          <p className="text-center text-lg mt-3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias
          </p>
        </div>

        <div className="rounded-full border bg-white px-4 pt-4 mt-10">
          <div className="rounded-full relative  mb-4 flex flex-wrap items-stretch">
            <input
              type="text"
              className="rounded-full relative m-0 -mr-0.5 mx-5 block w-[1px] min-w-0 flex-auto border-solid border-neutral-300 bg-transparent bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Enter Your email"
              aria-label="Enter Your email"
              aria-describedby="button-addon2"
            />

            <button
              className="z-[2] inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 mx-3 text-xs font-medium uppercase leading-normal text-white bg-blue-950 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              type="button"
              id="button-addon2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAction;
