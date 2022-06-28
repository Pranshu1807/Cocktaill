import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchc, setSearchc] = useState("");
  const [cocktl, setCocktl] = useState([]);

  useEffect(() => {
    const fetchDrink = async () => {
      setLoading(true);
      try {
        const drinkss = await fetch(`${url}${searchc}`);
        const data = await drinkss.json();
        // console.log(data);
        const { drinks } = data;
        if (drinks) {
          const newDrinks = drinks.map((item) => {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
              item;
            return {
              id: idDrink,
              name: strDrink,
              img: strDrinkThumb,
              alch: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktl(newDrinks);
        } else {
          setCocktl([]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDrink();
    // setSearchc("c");
  }, [searchc]);
  return (
    <AppContext.Provider
      value={{ loading, searchc, cocktl, setSearchc, setLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
