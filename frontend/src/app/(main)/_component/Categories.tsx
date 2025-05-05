import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

type foodCategoryDataType = {
  name: string;
  _id: string;
};

export const Categories = () => {
  const [foodCategoryData, setFoodCategoryData] = useState<
    foodCategoryDataType[]
  >([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleOnClick = (categoryId: string) => {
    router.push(`/foodsByCategory?categoryId=${categoryId}`);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/category`
      );
      setFoodCategoryData(response.data.categories);
    } catch (error) {
      console.error("cannot fetch data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += amount;
    }
  };

  return (
    <div className="w-full flex flex-col gap-9 px-8 py-12">
      <p className="text-[30px] text-white font-semibold">Categories</p>
      <div className="flex gap-2 items-center">
        <button
          onClick={() => handleScroll(-600)}
          className="flex size-10 justify-center items-center rounded-md bg-[#404040]"
        >
          <ChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto max-w-full no-scrollbar"
        >
          {foodCategoryData?.map((food, index) => (
            <Badge
              key={index}
              className="bg-white text-black rounded-full text-[18px] font-normal min-w-[151px] h-9 cursor-pointer whitespace-nowrap"
              onClick={() => handleOnClick(food._id)}
            >
              {food.name}
            </Badge>
          ))}
        </div>
        <button
          onClick={() => handleScroll(600)}
          className="flex size-10 justify-center items-center rounded-md bg-[#404040]"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
