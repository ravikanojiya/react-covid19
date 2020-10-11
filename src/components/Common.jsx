import React from 'react'

const Common = (props) => {
    return (
        <>         
      <div class="p-3 col-lg-4 border rounded border-dark ">     
      <button className="btn btn-dark btn" ><h2>{props.cfcs}</h2></button>

        <h4>{props.loc}</h4>
      </div>
      <hr class="featurette-divider"/>
      
    </>
       
    )
}

export default Common
