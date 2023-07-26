import { useState, useEffect } from "react";

import axios from "axios";

const MyAccountForm = () => {
  const [country, setCountry] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [name, setName] = useState(""); // Kullanıcının adını tutacak state
  const [email, setEmail] = useState(""); // Kullanıcının e-posta adresini tutacak state

  useEffect(() => {
    getCountry();
  }, []);
  const API_KEY =
    "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";
  const COUNTRY_API = `https://tr-yös.com/api/v1/location/allcountries.php?token=${API_KEY}`;
  const CITY_API = `https://tr-yös.com/api/v1/location/citiesbycountry.php?country_id=${selectedCountry}&token=${API_KEY}`;

  const getCountry = async () => {
    try {
      const { data } = await axios.get(COUNTRY_API);
      setCountry(data);
    } catch (error) {}
  };
  const selectedCountres = async (e) => {
    setSelectedCountry(e.target.value);
    try {
      const { data } = await axios.get(CITY_API);
      setCities(data);
    } catch (error) {}
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Formun gönderim davranışını engelledik
    // 'name' ve 'email' state'leri kullanarak ilgili işlem yapıldı
    console.log("Ad:", name);
    console.log("E-posta:", email);

    const userData = {
      name: name,
      email: email,
      country: selectedCountry,
    };
    try {
      // axios POST isteği kullanarak kullanıcı verilerini sunucuya gönderin
      const response = await axios.post("https://tr-yös.com/api/v1/users/user.php?id=${id}&token=${API_KEY}", userData);
  
      console.log("Server Response:", response.data); // gelen yanıt 
  
    } catch (error) {
      // POST isteği sırasında oluşan hata
      console.error("Error:", error);
      // hata mesajı 
    }
  };
   return (

    <div>
      <div className=" block max-w-lg rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <form onSubmit={handleSubmit}>
          {/* form gönderildiğinde handleSubmit fnk çağrıldı*/}
          <div className="text-xl text-darkBlue font-bold mb-2 mx-3">
            <h3>My Account</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* //? birinci input */}
            {/*Your Name input*/}
            <div className=" relative mb-6" data-te-input-wrapper-init>
              <h2>Your Name*</h2>
              <input
                type="text"
                className="border border-gray-100 peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="First name"
                value={name} // Input değerini 'name' state ile bağladık
                onChange={(e) => setName(e.target.value)} // Inputtaki değişiklikleri alıp 'name' state'i güncelliyoruz
              />
            </div>
            {/*email input*/}
            <div className=" relative mb-6" data-te-input-wrapper-init>
              <h2>Email Adres*</h2>
              <input
                type="email"
                className="border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput125"
                placeholder="Email address"
                value={email} // Input değerini 'email' state ile bağladık
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* //?ikinci input */}
            {/* Country input*/}
            <div className=" relative mb-6" data-te-input-wrapper-init>
              <h2>Country*</h2>

              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-auto">
                <i className="fas fa-chevron-down text-gray-500"></i>
              </div>

              <select
                className="border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                data-te-select-init
                onChange={selectedCountres}
              >
                <option value="">Select a country</option>
                {country.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.tr}
                  </option>
                ))}
              </select>

              <label
                htmlFor="emailHelp123"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
              ></label>
            </div>
            {/*City input*/}
            <div className=" relative mb-6" data-te-input-wrapper-init>
              <h2>City*</h2>

              <select className="border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0">
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.en}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/*Pone input*/}
          <div className="  relative mb-6" data-te-input-wrapper-init>
            <h2>Phone</h2>
            <input
              type="tel"
              className="border peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInputTel"
              placeholder="Example label"
            />
            <label
              htmlFor="exampleFormControlInputTel"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
            ></label>
          </div>
          {/*Password input*/}
          <div className=" relative mb-6" data-te-input-wrapper-init>
            <h2>About</h2>
            <textarea
              className="border peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea1"
              rows={4}
              placeholder="Your message"
              defaultValue={""}
            />
            <label
              htmlFor="exampleFormControlTextarea1"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  "
            ></label>
          </div>
          {/*Submit button*/}
          <button
            type="submit"
            className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
  };

 

export default MyAccountForm;
