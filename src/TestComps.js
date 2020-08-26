import React, { Component, useState, useEffect } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

function GIFShow(props) {
  const [gifdata, setGifsData] = useState([]);
  const [buttonvalue, setBtnValue] = useState("pressButton");
  const [hoverdiv, setHoverDiv] = useState(true);

  const style_gif = StyleSheet.create({
    gifelems: {
      backgroundColor: "coral",
      padding: "5px"
    }
  });

  useEffect(() => {
    console.log("button value changed ", buttonvalue);
    const fetch_data = async (query) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
        // `https://api.giphy.com/v1/gifs/search?api_key=ySGo48L37OkJ0cGH1zAfrGr8yobgFMQt&q=${query}&limit=10&offset=0&rating=G&lang=en`
      );

      const json = await response.json();

      setGifsData(json.splice(0, +Math.floor(Math.random() * 10)));
      console.log("json retrieved ", json);
    };
    fetch_data(buttonvalue);
  }, [buttonvalue]);

  useEffect(() => {
    console.log("gifdata updates ", gifdata);
  }, [gifdata]);

  const mouseover = (e) => {
    e.preventDefault();
    e.persist();
    // console.log(" e mouse over ", e);
    // setHoverDiv(false);
  };

  const mouseout = (e) => {
    e.preventDefault();
    e.persist();
    // console.log(" e mouse out ", e);
    // setHoverDiv(true);
  };

  // console.log("context testing ", state);
  return (
    <div className="gif_container">
      <span> Shall show gifs here</span>
      <button
        onClick={() =>
          setBtnValue(`${Math.floor(Math.random() * 100)}_Valueset`)
        }
      >
        {/* {buttonvalue} */}
        Press this button
      </button>
      <div className="gifcontainer">
        {gifdata.map((m) => {
          return (
            <div
              // style={style_gif.gifelems}
              className={hoverdiv ? "div_jsonelems" : "div_jsonelems_hover"}
              key={`${m.id}_divelems`}
              onMouseEnter={(e) => mouseover(e)}
              onMouseLeave={(e) => mouseout(e)}
            >
              <span className="gif_elems">{m.id}</span>;
              <span className="gif_elems">{m.title}</span>;
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Welcome(props) {
  const [value, setValue] = useState("press button");
  const DataGen = (num) => {
    return Array(num)
      .fill(1)
      .map((m, i) => {
        return {
          name: "item_" + i,
          val: +Math.floor(Math.random() * 100)
        };
      });
  };

  const styles_wel = StyleSheet.create({
    ulclass: {
      padding: "5px"
      // borderBottom: 1 + "px solid gray"
    }
  });
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <p style={{ height: 10, fontSize: "1.5em" }}> {props.something} </p>
      <button
        onClick={() => setValue(`${Math.floor(Math.random() * 100)}_Valueset`)}
      >
        {value}
      </button>
      <ul
        className="ulclass"
        // style={styles_wel.ulclass}
        style={{ padding: "5px", borderBottom: "1px solid gray" }}
      >
        {DataGen(2).map((m, i) => (
          <li key={i}>
            <h2 key={`${i}_key`}> {m.val} </h2>
            <h3 key={`${i}_keyname`}> {m.name} </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { GIFShow, Welcome };
