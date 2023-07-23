import axios from "axios";
import { createContext, useState } from "react";

export const CompareContext =createContext()

const CompareContextProvider=({children}) =>{
    const API_KEY =
  "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";
  const COMPARE_API =`https://tr-yös.com/api/v1/users/addcompare.php?`

  const [compares, setCompares] = useState([])
  



  const postCompares = async (userID,departmentID) =>{
  try {
    await axios.post(`${COMPARE_API}id=${departmentID}&user_id=${userID}&token=${API_KEY}`);
    console.log("dene1")
    console.log("dene2")
   getCompares()
  } catch (error) {
    console.log(error)
  }
}

const getCompares = async (userID,departmentID) =>{
  try {
    const { data } =await axios.get(`${COMPARE_API}id=${departmentID}&user_id=${userID}&token=${API_KEY}`);
    setCompares(data)
   console.log(data)
  } catch (error) {
    console.log(error)
  }
}
const values={getCompares,postCompares,compares,};
return  (
    <CompareContext.Provider value={values}>{children}</CompareContext.Provider>
)

}
export default CompareContextProvider;