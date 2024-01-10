"use client";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import Signup from "./Sign/page";
import Login from "./Login/page";
import Waiting from "./wait/page";
import Test from "@/components/Login";
import Finish from "./third/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <Login/>
  )
}
