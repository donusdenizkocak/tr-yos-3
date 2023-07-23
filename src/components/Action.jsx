import axios from "axios";
import { useState } from "react";


//***********************! */ HATALI  BURASI ( SADECE POST ATILMADI 404 hata alınıyor) ************************


const Action = () => {
  const [emailPost, setEmailPost] = useState({ email: "" });
  const API_KEY =
    "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";
  const API_ADDEMAİL = `https://tr-yös.com/api/v1/record/addemail.php?token=${API_KEY}`;

  const handleSumbit = (e) => {
    e.preventDefault();
    postEmailAdd(emailPost);
  };

  const postEmailAdd = async (info) => {
    const formData = new FormData();
    formData.append("email", info.email);
    try {
      await axios.post(`${API_ADDEMAİL}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center  bg-[#6398CA] py-20">
      <div className="flex flex-col px-10 md:px-0 gap-3 justify-center items-center text-white">
        <h1 className="font-extrabold text-center text-xl">
          Are You Already Working With Us?
        </h1>
        <p className="text-center text-lg ">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias
        </p>
      </div>

      <div className="rounded-full border w-[25rem]   bg-white px-4 pt-4 mt-10">
        <form onSubmit={handleSumbit}>
          <div className="rounded-full relative  mb-4 flex flex-wrap items-stretch">
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-full relative m-0 -mr-0.5 mx-5 block w-[1px] min-w-0 flex-auto border-solid border-neutral-300 bg-transparent bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
              placeholder="Enter Your email"
              value={emailPost.email || ""}
              onChange={(e) =>
                setEmailPost({ ...emailPost, [e.target.name]: e.target.value })
              }
            />

            <button
              className="w-[120px] h-[52px] z-[2] inline-block rounded-full bg-darkBlue px-6 pb-2 pt-2.5 mx-3 text-xs font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]"
              type="Submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Action;
