import React, { useEffect, useState } from "react";
import Common from "./Common";
import Covid_Url from "./Config";

const Data = () => {
  const [rdata, setrdata] = useState([]);
  useEffect(() => {
    fetch(Covid_Url)
      .then((res) => res.json())
      .then((res) => {
        setrdata(res.data.regional)
      })
      .catch((e) => {
        console.log(e);
      });
  });
  return(
<div>
    <h3>States-Cases</h3>
<div class="row" >
    {rdata.map((res)=>{
   return <Common loc={res.loc} cfcs={res.confirmedCasesIndian}/>
    })}
 
    </div>
</div>
  )
  
};

export default Data;
