import React from "react";
import { resolvePath } from "react-router-dom";

const Policies = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        width: "992px",
        height: "676px",
        // border: "1px solid red",
        margin: "auto",
        textAlign: "left",
      }}
    >
      <div>
        <h3>Polices</h3>
      </div>

      <div>
        <h3>Che3ck-in</h3>
        <p>
          Check-in from 3 PM - 3 PM
          <br />
          Minimum check-in age - 18
        </p>
        <div style={{ boxSizing: "inherit", width: "330px" }}>
          <h4> Special check-in instructions </h4>
          <p>
            This property offers transfers from the train station (surcharges
            may apply); to arrange pick-up, guests must contact the property 24
            hours prior to arrival, using the contact information on the booking
            confirmation This property doesn't offer after-hours check-in Front
            desk staff will greet guests on arrival
          </p>
        </div>
        <div>
          <h4>Access methods</h4>
          <p> Staffed front desk</p>
        </div>
        <div>
          <h4> Pets</h4>
          <p>No pets or service animals allowed</p>
        </div>
        <div>
          <h4>Children and extra beds</h4>
          <p>
            Children are welcome Rollaway/extra beds are available for INR
            1500.0 per night Free cribs (infant beds)
          </p>
        </div>
        <div>
            <h4>Property payment types</h4>
        </div>
      </div>
      <div>
        <div>
          <h3>Check-Out</h3>
          <p>Check-out before noon</p>
        </div>
      </div>
    </div>
  );
};

export default Policies;
