import React from "react";
import style from "./styles/header.module.css";

const Header = ({state, setState}) => {

  const handleInput = (e) =>{
    setState(e.target.value)
  }

  return (
    <div className={style.header}>
      <h1 className={style.heading}>SOLAR VIEW</h1>
      <div className={style.form}>
        <input className={style.input} onChange={handleInput}/>
        <a className={style.button} href="/solar-view/calculator">
          Check My Roof
        </a>
      </div>
      <div className={style.description}>
        <p>Search for your home. Discover your solar savings potential.</p>
        <hr />
        <p>See what’s possible with solar in your community.</p>
      </div>
    </div>
  );
};

export default Header;
