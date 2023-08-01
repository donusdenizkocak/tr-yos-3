import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";
const MyAccountForm = ({
  userData,
  setUpdatedUser,
  updatedUser,
  getUserData,
}) => {
  const { currentUser } = useContext(HomeContext);
  const { user } = userData;
  const [country, setCountry] = useState([]);

  const [selectedCity, setSelectedCity] = useState("");

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryName, setSelectedCountryName] = useState("");
  const [cities, setCities] = useState([]);
  const [isLoadingCities, setIsLoadingCities] = useState(false);

  const [isCountrySelected, setIsCountrySelected] = useState(false);
  // const [updatedUser, setUpdatedUser] = useState({
  //   name: user?.name || "",
  //   country: user?.country || "",
  //   city: user?.city || "",
  //   phone: user?.phone || "",
  //   about: user?.about || "",
  // });
  const [userDetail, setUserDetail] = useState(userData);
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
      // console.log(data)
      setCountry(data);
    } catch (error) {}
  };

  // console.log(user?.name);

  // const selectedCountres = async (e) => {
  //   setSelectedCountry(e.target.value);
  //   setSelectedCountryName ( e.target.options[e.target.selectedIndex].text);
  //   setIsLoadingCities(true);
  //   setCities([]);
  //   console.log(selectedCountryName)
  //   try {
  //     const { data } = await axios.get(CITY_API);
  //     setCities(data);
  //     console.log(cities)
  //   } catch (error) {}finally{
  //     setIsLoadingCities(false);
  // }

  // };
  const getCitiesByCountry = async () => {
    if (selectedCountry) {
      setIsLoadingCities(true);
      try {
        const { data } = await axios.get(CITY_API);
        setCities(data);
        // console.log(data);
      } catch (error) {
        // Handle error
      } finally {
        setIsLoadingCities(false);
      }
    } else {
      setCities([]); // Reset cities if no country is selected
    }
  };

  const selectedCountres = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCountryName(e.target.options[e.target.selectedIndex].text);
    setUpdatedUser({
      ...updatedUser,
      country: e.target.options[e.target.selectedIndex].text,
    });
    setIsCountrySelected(true); // Set the flag to indicate that a country has been selected
  };
  // console.log(selectedCountryName);
  // console.log(selectedCountry);

  const selectedCities = (e) => {
    setSelectedCity(e.target.value);
    setUpdatedUser({ ...updatedUser, city: e.target.value });
    // console.log(selectedCity)
    // console.log(prevSelectedCity)
  };
  //Trigger getCitiesByCountry whenever isCountrySelected changes
  useEffect(() => {
    if (isCountrySelected) {
      getCitiesByCountry();
    }
  }, [isCountrySelected, selectedCountry]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Formun gönderim davranışını engelledik
    // 'name' ve 'email' state'leri kullanarak ilgili işlem yapıldı
    // const updatedUser = { ...user, name: e.target.value };
    // setUser(updatedUser);
    // console.log("name:", name);
    // console.log("e-mail:", email);
    //    const updatedUser = {
    //   ...user,
    //    name,

    //   country: selectedCountryName,
    //   city: selectedCity,
    // };

    try {
      // axios POST isteği kullanarak kullanıcı verilerini sunucuya gönderin
      const { data } = await axios.post(
        `https://tr-yös.com/api/v1/users/updateuser.php?user_id=${currentUser}&token=${API_KEY}`,
        updatedUser,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      getUserData();
      console.log(data);

      setUserDetail(data);
    } catch (error) {
      // POST isteği sırasında oluşan hata
      console.error("Error:", error);
      // hata mesajı
    }
  };

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  // console.log(updatedUser);
  // const handleChangeEmail = (e) => {
  //   setUpdatedUser({ ...updatedUser, email: e.target.value });
  // };
  // console.log(userData);
  // console.log(updatedUser);

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
            <div className=" relative mb-6">
              <h2>Your Name*</h2>
              <input
                type="text"
                className="border border-gray-100 peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                id="name"
                name="name"
                required
                defaultValue={user?.name}
                // value={user?.name} // Input değerini 'name' state ile bağladık
                onChange={handleChange} // Inputtaki değişiklikleri alıp 'name' state'i güncelliyoruz
              />
            </div>
            {/*email input*/}
            <div className=" relative mb-6">
              <h2>Email Adres*</h2>
              <input
                name="email"
                type="email"
                className="border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="email"
                required
                defaultValue={user?.email || ""}
                // onChange={handleChangeEmail}
              />
            </div>
            {/* //?ikinci input */}
            {/* Country input*/}
            <div className=" relative mb-6">
              <h2>Country*</h2>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-auto">
                <i className="fas fa-chevron-down text-gray-500"></i>
              </div>
              <select
                className="border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                onChange={selectedCountres}
                id="country"
                name="country"
              >
                <option value="">{user?.country || "Select a country"}</option>
                {country.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.tr}
                  </option>
                ))}
              </select>
            </div>
            {/*City input*/}
            <div className=" relative mb-6">
              <h2>City*</h2>
              <select
                className="border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                onChange={selectedCities}
                id="city"
                name="city"
              >
                <option value="">{user?.city || "Select a city"}</option>
                {isLoadingCities ? (
                  <option disabled>Loading cities...</option>
                ) : (
                  cities.map((city) => (
                    <option key={city.id} value={city.en}>
                      {city.en}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
          {/*Pone input*/}
          <div className="  relative mb-6">
            <h2>Phone</h2>
            <input
              type="tel"
              className="border peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
              id="phone"
              name="phone"
              placeholder="Example label"
              onChange={handleChange}
              defaultValue={user?.phone}
            />
          </div>
          {/*about input*/}
          <div className=" relative mb-6">
            <h2>About</h2>
            <textarea
              className="border peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
              id="about"
              name="about"
              rows={4}
              placeholder="Your message"
              defaultValue={user?.about}
              onChange={handleChange}
            />
          </div>
          {/*Submit button*/}
          <button
            type="submit"
            className="inline-block w-full rounded bg-[#3b71ca] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyAccountForm;
