import React from "react";

const ImportantInfo = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        width: "992px",
        height: "676px",
        // border: "1px solid red",
        margin: "auto",
        textAlign: "left",
      }}
    >
      <div>
        <h3>Important information</h3>
      </div>
      <div>
        <div>
          <h4>Optional extras</h4>
          <p>
            The following fees and deposits are charged by the property at time
            of service, check-in, or check-out.
            <br />
            <ul>
              <li>
                Fee for buffet breakfast: INR 549 per person (approximately)
              </li>
              <li>
                Airport shuttle fee: INR 1500 per vehicle (one-way, maximum
                occupancy 4)
              </li>
              <li>Rollaway bed fee: INR 1500.0 per night</li>
            </ul>
            <br />
            The above list may not be comprehensive. Fees and deposits may not
            include tax and are subject to change.
          </p>
        </div>
        <div>
          <h4>You need to know</h4>{" "}
          <p>
            Extra-person charges may apply and vary depending on property policy
            Government-issued photo identification and a credit card, debit
            card, or cash deposit may be required at check-in for incidental
            charges Special requests are subject to availability upon check-in
            and may incur additional charges; special requests cannot be
            guaranteed This property accepts credit cards, debit cards, and cash
          </p>
        </div>
        <div>
          <h4>We should mention</h4>
          <p>
            The property has connecting/adjoining rooms, which are subject to
            availability and can be requested by contacting the property using
            the number on the booking confirmation No pets and no service
            animals are allowed at this property
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportantInfo;
