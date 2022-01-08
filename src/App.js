/* eslint-disable */
import React, { useState, Suspense, lazy } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Classcompo from "./remeber/Class";
import Intro from "./Life cycle/Intro";
import ChildCompo from "./Life cycle/ChildCompo";
import List from "./Life cycle/List";
import UseEffect from "./Life cycle/UseEffect";
import Form from "./remeber/Form";
import Listing from "./remeber/Listing with map()";
import Api from "./remeber/Api";
import Portal from "./ZLearning/24.Portal";
import Refs from "./ZLearning/25.Refs";
import Bootstrap from "./ZLearning/26.Bootstrap";
import ErrorBoundary from "./ZLearning/28.ErrorBoundary";
import EBhelper from "./ZLearning/28.EBhelper";
import PureComponents from "./ZLearning/31.PureComponents";
import Memo from "./ZLearning/32.Memo";
// import UncontrolledCompo from "./ZLearning/34.UncontrolledCompo";
// import ControlledCompo from "./ZLearning/35.ControlledCompo";
import LazyLoading from "./ZLearning/36.LazyLoading";
const UncontrolledCompo = lazy(() =>
  import("./ZLearning/34.UncontrolledCompo")
);
const ControlledCompo = lazy(() => import("./ZLearning/35.ControlledCompo"));
import UploadFile from "./ZLearning/37.UploadFile";
import TypecheckWITHproptype from "./ZLearning/38.TypecheckWITHproptype";
import CustomHooks from "./ZLearning/39.CustomHooks";
import InterviewQS from "./40.InterviewQS";

// Kailash
import MultipleState from "./Kialash_React/1.MultipleState";

function App() {
  return (
    <div className="main">
      {/* <Intro/> */}
      {/* <ChildCompo /> */}
      {/* <List /> */}
      {/* <UseEffect /> */}
      {/* <Form /> */}
      {/* <Listing /> */}
      {/* <Api /> */}
      {/* <Portal /> */}
      {/* <Refs /> */}
      {/* <Bootstrap /> */}
      {/* <EBhelper><ErrorBoundary /> </EBhelper> */}
      {/* <PureComponents /> */}
      {/* <Memo data={data} /> */}
      {/* <UncontrolledCompo /> */}
      {/* <ControlledCompo /> */}
      {/* <LazyLoading /> */}
      {/* <h1>Lazy Loading</h1>
      <Suspense fallback={<div>Please wait...</div>}>
        <UncontrolledCompo />
        <ControlledCompo />
      </Suspense> */}
      {/* <UploadFile /> */}
      {/* <TypecheckWITHproptype age={'20'} /> */}
      {/* <CustomHooks /> */}
      {/* <InterviewQS /> */}
      <MultipleState />
    </div>
  );
}

export default App;
