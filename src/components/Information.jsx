import React from "react";
import i1 from "../Images/i1.jpg";
import i2 from "../Images/i2.jpg";
import i3 from "../Images/i3.png";
const Information = () => {
  return (
    <>
      <div class="media">
        <img src={i3} alt="" class="align-self-center mr-3" />
        <div class="media-body">
          <h5 class="mt-0">Center-aligned media</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <p class="mb-0">
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
      </div>
      <hr className="divider"/>
      <div class="media">
        <img src={i2} alt="" class="align-self-center mr-3" />
        <div class="media-body">
          <h5 class="mt-0">Center-aligned media</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <p class="mb-0">
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
      </div>
      <hr className="divider"/>
      <div class="media">
        <img src={i1} alt="" class="align-self-center mr-3" />
        <div class="media-body">
          <h5 class="mt-0">Center-aligned media</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <p class="mb-0">
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
      </div>
    </>
  );
};

export default Information;
