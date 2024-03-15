import React, { useState } from "react";
import axios from "axios";

function CustomerForm({getCustomers}) {
  const [customerName, setCustomerName] = useState("");

  async function saveCustomer(e) {
    e.preventDefault();
    try {
      const customerData = {
        name: customerName,
      };
      await axios.post("http://localhost:2020/api/customer", customerData);
      getCustomers()
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={saveCustomer}>
        <input
          type="text"
          placeholder="customer name"
          onChange={(e) => {
            setCustomerName(e.target.value);
          }}
          value={customerName}
        />
        <button type="submit">Save new customer</button>{" "}
      </form>
    </div>
  );
}

export default CustomerForm;
