import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();
console.log("hello", Context);
export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]); //initialize as null
  const [selectCategories, setSelectCategories] = useState("news");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSelectCategories,
        selectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

// *************************
// import React, { createContext, useState, useEffect } from "react";
// import { fetchDataFromAPI } from "../utils/api";

// export const Context = createContext();

// export const AppContext = (props) => {
//   const [loading, setLoading] = useState(false);
//   const [searchResults, setSearchResults] = useState(null); // Initialize as null
//   const [selectCategories, setSelectCategories] = useState("music");
//   const [mobileMenu, setMobileMenu] = useState(false);

//   useEffect(() => {
//     fetchDataFromAPI(`search?part=snippet&q=${selectCategories}`).then((data) =>
//       console.log(data)
//     );
//   }, [selectCategories]);

//   return (
//     <Context.Provider
//       value={{
//         loading,
//         setLoading,
//         searchResults,
//         setSelectCategories,
//         selectCategories,
//         mobileMenu,
//         setMobileMenu,
//       }}
//     >
//       {props.children}
//     </Context.Provider>
//   );
// };
