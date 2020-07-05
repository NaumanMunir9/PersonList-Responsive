import React from "react";
import "./PersonList.css";

const Person = ({ name, job, img, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

export const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="muhammad" job="software engineer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas
          laboriosam illum corporis minus possimus.
        </p>
      </Person>
      <Person img="22" name="nauman" job="App/Web developer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          nesciunt!
        </p>
      </Person>
      <Person img="24" name="munir" job="DevOps engineer">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
          blanditiis nulla eos aut odit voluptatem.
        </p>
      </Person>
    </section>
  );
};
