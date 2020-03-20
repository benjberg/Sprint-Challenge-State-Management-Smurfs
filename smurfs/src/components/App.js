import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux"
import SmurfForm from "./SmurfForm";
import SmurfList from './SmurfList';
import {getSmurf} from '../actions/actions';
import styled from 'styled-components';

const Sform = styled(SmurfForm)`
border:1px solid balck;
`
const App= (props)=>   {
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Sform/>
        <SmurfList/>
      </div>
    );
  
}
const mapStateToProps = state=> {
  return {
    message:state.message,
    smurfs: state.smurfs
  }
}
export default connect(
  mapStateToProps,
  { getSmurf }
)(App);
