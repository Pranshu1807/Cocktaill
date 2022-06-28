import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../home-mat/loading";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const Singlecocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState();
  const [cocktail, setCocktail] = useState();
  const Fetch = async () => {
    try {
      const resp = await fetch(`${url}${id}`);
      const data = await resp.json();
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: img,
          strAlcoholic: alch,
          strCategory: category,
          strInstructions: instruction,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const Ingredient = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          img,
          alch,
          category,
          instruction,
          Ingredient,
        };
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    Fetch();
  }, [id]);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!cocktail) {
    return <h2 className="section=title">No Cocktail to display</h2>;
  }
  const { name, img, alch, category, instruction, Ingredient } = cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
      <div className="drink">
        <img src={img} alt="" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name:{name}</span>
          </p>
          <p>
            <span className="drink-data">Is alcoholic:{alch}</span>
          </p>
          <p>
            <span className="drink-data">Category:{category}</span>
          </p>
          <p>
            <span className="drink-data">Important points:{instruction}</span>
          </p>
          <p>
            <span className="drink-data">
              Ingredients:{Ingredient[0]},{Ingredient[1]},{Ingredient[2]},
              {Ingredient[3]},{Ingredient[4]}
            </span>
          </p>
          {/* </p> */}
        </div>
      </div>
    </section>
  );
};

export default Singlecocktail;
