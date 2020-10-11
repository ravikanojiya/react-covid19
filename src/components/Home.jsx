import React, { useEffect, useState } from "react";
import Covid_Url from "./Config";

const Home = () => {
  const [sumdata, setsumdata] = useState([]);
  useEffect(() => {
    fetch(Covid_Url)
      .then((res) => res.json())
      .then((res) => {
        setsumdata(res.data.summary);
      })
      .catch((e) => {
        console.log(e);
      });
  });
  return (
    <div>
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">Covid19-Summary</h1>
        {/* <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p> */}
      </div>
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Total-Cases</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">
              {sumdata.total} <small class="text-muted"></small>
            </h1>
            {/* <ul class="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul> */}
            {/* <button
              type="button"
              class="btn btn-lg btn-block btn-outline-primary"
            >
              Sign up for free
            </button> */}
          </div>
        </div>
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Confirmed-Cases</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">
             {sumdata.confirmedCasesIndian} <small class="text-muted"></small>
            </h1>
            
          </div>
        </div>
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Discharged</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">
              {sumdata.discharged} <small class="text-muted"></small>
            </h1>
            
          </div>
        </div>
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Deaths</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">
             {sumdata.deaths} <small class="text-muted"></small>
            </h1>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
