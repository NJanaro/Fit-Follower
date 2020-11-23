import React from "react";
import {connect} from "react-redux";
import Routes from "./route_form";

const mSTP = state => ({
    newOrEdit:"new",
})

const mDTP = dispatch => ({
    
})

export default connect(mSTP,null)(Routes);