import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

type productData = {
  _id: string;
  name: string;
  price: string;
  ingredients: string;
  category: string;
  image: string;
};
export const ProductCard = ({ product }: { product: productData }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="flex flex-col p-4 h-[342px] items-start gap-5 self-stretch rounded-[20px] bg-[#FFF] max-w-[397px]">
          <div className="relative">
            <img
              className="w-[365px] h-[210px] rounded-[12px]"
              src={product.image}
              alt="foodImage"
            />
            <div className="flex absolute right-19 top-40">
              <Button className="flex size-11 justify-center items-center py-2 px-4 rounded-full bg-white absolute">
                <Plus color="red" size={16} className="flex absolute" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-2 w-full items-center">
              <p className="text-[#EF4444] font-semibold leading-8 text-2xl">
                {product.name}
              </p>
              <p className="text-lg leading-7 font-semibold ">
                ${product.price}
              </p>
            </div>
            <p className="text-black text-sm font-normal leading-5 text-wrap">
              {product.ingredients}
            </p>
          </div>
        </DialogTrigger>
        <DialogContent className="flex flex-col !w-fit !h-fit !max-w-fit">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex gap-6">
            <img
              className="rounded-[12px] w-[377px] !h-[364px] object-cover"
              src={product.image}
              alt="foodImage"
              width={367}
              height={364}
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col  gap-3">
                <p className="text-red-600 text-3xl font-semibold leading-9">
                  {product.name}
                </p>
                <p className="text-[#09090B] text-base font-normal leading-6">
                  {product.ingredients}
                </p>
              </div>
              <div className="flex flex-col  gap-6">
                <div className="flex justify-between items-center self-stretch">
                  <div className="flex flex-col items-start">
                    <p className="text-base font-normal leading-6 text-black">
                      Total price
                    </p>
                    <p className="text-2xl leading-8 font-semibold text-black">
                      ${product.price}
                    </p>
                  </div>
                </div>
                <Button className="flex h-11 w-fit-[377px] py-2 px-8 justify-center items-center self-stretch rounded-full">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
