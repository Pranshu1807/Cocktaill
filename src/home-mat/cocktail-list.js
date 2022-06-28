import React from "react";
import { useGlobalContext } from "../context.js";
import Loading from "./loading";
import { Link } from "react-router-dom";
const CocktailList = () => {
  const { loading, cocktl } = useGlobalContext();
  if (loading) {
    return (
      <>
        <Loading></Loading>
      </>
    );
  }
  if (cocktl.length < 1) {
    return (
      <div className="section-title">
        <p>no cocktails matched ur list</p>
      </div>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktl.map((item) => {
          const { id, name, img, alch, glass } = item;
          return (
            <div className="cocktail">
              <div className="img-container">
                <img src={img} alt="" srcset="" />
              </div>
              <div className="cocktail-footer">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{alch}</p>
              </div>
              <Link to={`/singlecocktail/${id}`} className="btn btn-primary">
                details
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CocktailList;
