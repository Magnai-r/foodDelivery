"use client";
import Image from "next/image";
import { Categories } from "./_component/Categories";
import axios from "axios";
import { ImageUpload } from "../components/imageUpload";
import { FoodCard } from "./foodCard";

export default function Home() {
  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`http:/localhost:8000/food`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <div className="flex w-full h-fit gap-2 flex-col bg-[#404040] ">
      <div className="w-full h-167 relative">
        <Image
          src="/BG.png"
          alt="background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <Categories />
      <FoodCard />
    </div>
  );
}
