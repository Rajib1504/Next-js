"use client";
import React, { useEffect, useState } from "react";

const services = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(items);
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto ">
      {items?.map((item, idx) => (
        <div
          key={idx}
          className=" flex flex-col border-2 p-3 bg-gray-50 rounded-md border-red-600 gap-3"
        >
          <img
            className="rounded-md w-full bg-cover h-64"
            src={item.image_url}
            alt=""
          />
          <div>
            <h2 className="text-2xl text-black font-bold ">{item.name}</h2>
            <div className="flex items-center justify-between">
              <p className="text-gray-400">{item.price} $</p>
              <p className="text-gray-400">{item.duration}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default services;
