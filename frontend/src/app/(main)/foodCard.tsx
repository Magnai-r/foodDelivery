"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductCard } from "./_component/productCard";

type DishesDataType = {
  _id: string;
  name: string;
  price: string;
  ingredients: string;
  category: string;
  image: string;
};
type DataTypes = {
  name: string;
  foods: DishesDataType[];
};
export const FoodCard = ({ index, value }: any) => {
  const [foodData, setFoodData] = useState<DataTypes[]>([]);
  const router = useRouter();

  const handleOnClick = (categoryId: string) => {
    router.push(`/foodsByCategory?categoryId=${categoryId}`);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/food");
      console.log(response.data.food, "FROOM FUNCTION");

      setFoodData(response.data.food);
    } catch (error) {
      console.error("cannot fetch data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(foodData, "FROM FOOD USEFFF");

  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full pt-10 pb-20">
        {foodData.map((value, index: number) => {
          return (
            <div key={index}>
              <h1 className="text-3xl font-semibold leading-9 text-white">
                {value.name}
              </h1>

              <div className="flex w-full flex-wrap gap-5 pt-[54px] pb-[54px]">
                {value.foods?.map((value, index: any) => {
                  return <ProductCard key={index} product={value} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
