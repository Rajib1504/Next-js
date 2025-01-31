"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const services = () => {
  const router = useRouter();
  const [items, setItems] = useState(null);
  const isLogin = true;
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(items);
  const handleDetails = (id) => {
    if (isLogin) {
      router.push(`/Services/${id}`);
      // router.push('/Services/')
    } else {
      router.push("/");
    }
  };
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
            <button
              onClick={() => handleDetails(item.service_id)}
              className="w-36 bg-gray-400 hover:bg-gray-600 hover:scale-110 p-2 rounded-full mt-2 hover:duration-150"
            >
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default services;
