import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/actions";
import "./App.css";
import styled from 'styled-components';

const Sage = styled.input`
margin-left: .9rem;
`
const Sheight= styled.input`
margin-right: .2rem;
`
const Sform= styled.div`
border: 1px solid black;
border-radius: 5px;
margin: 0 auto;
padding: 2rem;
width: 75%;
`
const SmurfForm = props => {
  const [smurf, setsmurf] = useState({ name: "", age: "", height: "" });

  const changeHandler = e => {
    setsmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    props.addSmurf(smurf);
    setsmurf({ name: "", age: "", height: "" });
  };

  return (
    <Sform className="form">
      <form onSubmit={submitHandler}>
        <div className="formItem">
          <label htmlFor="name">Name: </label>
          <input
            onChange={changeHandler}
            name="name"
            type="text"
            placeholder="New Smurf Name"
            value={smurf.name}
          />
        </div>
        <div className="formitem">
          <label htmlFor="age">Age:  </label>
           <Sage
           className='age'
            onChange={changeHandler}
            name="age"
            type="text"
            placeholder="How old is the smurf?"
            value={smurf.age}
          />
        </div>
        <div className="formitem">
          <label htmlFor="height">Height: </label>
          <Sheight
            onChange={changeHandler}
            name="height"
            type="text"
            placeholder="Smurf Height"
            value={smurf.height}
          />
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </Sform>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);