import axios from "axios";
import React, { useState } from "react";

function AddToCard() {
  // initalvalues

  const initialValues = {
    name: "",
    description: "",
    price: 0,
  };

  // state

  const [formValues, setFormValues] = useState(initialValues);

  // onhandlechange

  function handleOnchange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  // onsubmit  value={formValues.email} onChange={handleOnchange}

  function onHandleSubmit(e) {
    e.preventDefault();

    // api post request

    axios
      .post("http://localhost:1337/products", {
        name: formValues.name,
        description: formValues.description,
        price: formValues.price,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // 11.00

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <form
            method="post"
            className="mt-8 space-y-6"
            onSubmit={onHandleSubmit}
          >
            <div>
              <label for="email-address" className="sr-only">
                Product Name{" "}
              </label>
              <input
                id="email-address"
                value={formValues.name}
                onChange={handleOnchange}
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="product name"
              />
            </div>

            <div>
              <label for="email-address" className="sr-only">
                Product Description{" "}
              </label>
              <input
                id="email-address"
                value={formValues.description}
                onChange={handleOnchange}
                name="description"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Description"
              />
            </div>

            <div>
              <label for="email-address" className="sr-only">
                Product price{" "}
              </label>
              <input
                id="email-address"
                value={formValues.price}
                onChange={handleOnchange}
                name="price"
                type="number"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="price"
              />
            </div>

            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Add product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddToCard;
