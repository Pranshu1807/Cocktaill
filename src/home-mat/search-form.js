import React, { useRef } from "react";
import { useGlobalContext } from "../context";
const SearchForm = () => {
  const { setSearchc } = useGlobalContext();
  const Value = useRef("");
  return (
    <section className="section search">
      <form action="" className="search-form" >
        <div className="form-control">
          <label htmlFor="name">Search Your Favorite Cocktail</label>
          <input
            type="text"
            id="name"
            ref={Value}
            onChange={() => {
              setSearchc(Value.current.value);
            }}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
