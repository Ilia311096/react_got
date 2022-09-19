import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./randomChar.css";
import { loadRandomChar } from "../../store/randomChar/action";
import { Spiner } from "../spiner/spiner";
import { DivError } from "../eroor/eroor";
import { selectRandomCharModule } from "../../store/randomChar/selector";

export function RandomChar() {
  const randomChar = useSelector(selectRandomCharModule);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = Math.floor(Math.random() * 140);
    const load = () => dispatch(loadRandomChar(id));
    load();
    const timerId = setInterval(load, 10000);
    return () => clearInterval(timerId);
  }, []);
  const eroor = randomChar.error ? <DivError /> : null;
  const spiner = randomChar.loading ? <Spiner /> : null;
  const content = !(randomChar.loading || eroor) ? (
    <View char={randomChar.char} />
  ) : null;

  return (
    <div className="random-block rounded">
      {spiner}
      {eroor}
      {content}
    </div>
  );
}
const View = ({ char }) => {
  const keys = Object.keys(char).filter(
    (val) => val !== "id" && val !== "name"
  );
  return (
    <>
      <h4>Random Character: {char.name}</h4>
      <ul className="list-group list-group-flush">
        {keys.map((value) => {
          return (
            <li
              key={char.id + value}
              className="list-group-item d-flex justify-content-between"
            >
              <span className="term">{value.toUpperCase()} </span>
              <span>{char[value]}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
