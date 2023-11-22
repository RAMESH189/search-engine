"use client";

import React, { useEffect, useState } from "react";

export default function CountryLookUp() {
  const [country, setCountry] = useState("India");
  
    useEffect(() => {
        fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.NEXT_PUBLIC_API_KEY}`, {method:'GET'})
            .then((response) => response.json())
            .then((data) => setCountry(data.country || 'India'))
            .catch((err) => console.error(err));
  },[]);

  return <div>{country}</div>;
}
