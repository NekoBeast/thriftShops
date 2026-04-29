"use client";
import axios from "axios";
import { useEffect, useState } from "react";
// import Link from "next/link";
import { Nav } from "./container/nav/nav";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});
export default function Home() {
  const [output, setOutput] = useState();
  useEffect(() => {
    const apiData = async () => {
      try {
        const resp = await api.get("/api/data");
        console.log(resp.data);
        setOutput(resp.data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    apiData();
  }, []); // The empty array [] ensures this only runs ONCE when the page loads
  return (
    <>
      <Nav />
      <h1>{output}</h1>
    </>
  );
}
