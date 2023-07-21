import { React, useState } from "react";
import "./FormDesign.css";
import Input from "../Input";
import { Button } from "../../Button/Button";
import Form from "../Form";
import { Link } from "react-router-dom";
import "./Card.css";

const ResumeType = (props) => {
  let arr = [];
  for (let i = 0; i < props.values.porRef.length; i++) {
    arr.push(i + 1);
  }
  const [index, setIndex] = useState(arr);

  const continueForm = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const backForm = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const handleType = (e) =>{
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <form onSubmit={props.formSubmitted}>
      <div className="title">{props.title}</div>

      <div className="card type">
        <div className="card-inner">
          <div className="card-front">
            <p className="title">{"Select Resume Type"}</p>
          </div>
          <div className="card-back">
            <span className="btn-left">
              <button
                className="add-btn"
                value="1"
                onClick={props.type}
              >
                Type 1 : Multi Column Resume
              </button>
            </span>
            <span className="btn-right">
              <button
                className="add-btn"
                value="2"
                onClick={props.type}
              >
                Type 2 : Single Column Resume
              </button>
            </span>
          </div>
        </div>
      </div>

      <div className="buttons">
        <span className="btn-left" onClick={backForm}>
          <Button content="Previous" />
        </span>
        <span className="btn-right">
          <button className="add-btn" type="submit">
            Submit
          </button>
        </span>
      </div>
    </form>
  );
};

export default ResumeType;
