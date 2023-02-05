import { useDispatch } from "react-redux";
import {
  filterByName,
  filterByPrice,
  filterByWeight,
  setCurrent,
  setPage,
  getProducts
} from "../../redux/actions/actionIndex.js";

// --Importo styles-- //
import style from "./filters.module.css";
import reloader from './img/reload.png'

export default function Filters() {
  const dispatch = useDispatch();

  // --Handels-- //

  function handleClick(e) {
    e.preventDefault(); 
    dispatch(getProducts()); 
  }


  function handleFilterByName(e) {
    e.preventDefault();
    dispatch(filterByName(e.target.value));
    dispatch(setCurrent(1));
    dispatch(setPage(1));
  }
  function handleFilterByPrice(e) {
    e.preventDefault();
    dispatch(filterByPrice(e.target.value));
    dispatch(setCurrent(1));
    dispatch(setPage(1));
  }
  function handleFilterByWeight(e) {
    e.preventDefault();
    dispatch(filterByWeight(e.target.value));
    dispatch(setCurrent(1));
    dispatch(setPage(1));
  }

  return (
    <div className={style.content}>
      <div className={style.filterContainer}>
        <h2>Filters</h2>
        {/* -- BY NAME-- */}
        <select
          className={style.filters}
          onChange={(e) => handleFilterByName(e)}
        >
          <option hidden>By Name</option>
          <option value="A-Z">By A-Z</option>
          <option value="Z-A">By Z-A</option>
        </select>
        {/* --BY PRICE-- */}
        <select
          className={style.filters}
          onChange={(e) => handleFilterByPrice(e)}
        >
          <option hidden>By Price</option>
          <option value="maxPrice">Max-Min</option>
          <option value="minPrice">Min-Max</option>
        </select>
        {/* --BY WEIGHT*/}
        <select
          className={style.filters}
          onChange={(e) => handleFilterByWeight(e)}
        >
          <option hidden>By Weight</option>
          <option value="maxWeight">Max-Min</option>
          <option value="minWeight">Min-Max</option>
        </select>
        <button
            className={style.refreshButton}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <img className={style.reloader} src={reloader} alt="reload_BTN" />
          </button>
      </div>
    </div>
  );
}
