"use client";

export const Footer = () => {
  return (
    <div className="w-full h-[755px] bg-[#18181B] relative overflow-hidden ">
      <div className="flex w-fit bg-[#EF4444] left-0 top-14 mt-15">
        <div className="flex w-full px-[98px] gap-[34px] py-7 items-center animate-slideLeft">
          {Array.from({ length: 6 }).map((_, index) => (
            <h2
              key={index}
              className="text-3xl leading-9 font-semibold text-nowrap"
            >
              Fresh fast delivered
            </h2>
          ))}
        </div>
      </div>
      <div className="flex w-full gap-[220px] pt-19 pb-26 px-22">
        <div className="flex flex-col gap-3">
          <img src="logo.png" alt="logo" />
          <div className="flex flex-col items-start">
            <div className="flex">
              <h4 className="text-[#FAFAFA] text-xl leading-7 font-semibold ">
                Nom
              </h4>
              <h4 className="text-[#EF4444] text-xl leading-7 font-semibold">
                Nom
              </h4>
            </div>
            <p className="leading-4 text-xs font-normal text-[#F4F4F5]">
              Swift delivery
            </p>
          </div>
        </div>
        <div className="flex items-start gap-28">
          <div className="flex w-[122px] flex-col items-start gap-4">
            <p className="text-base font-normal leading-7 text-[#71717A]">
              NOMNOM
            </p>
            <p className="text-base font-normal leading-7 text-[#FAFAFA]">
              Home
            </p>
            <p className="text-base font-normal leading-7 text-[#FAFAFA]">
              Contact us
            </p>
            <p className="text-base font-normal leading-7 text-[#FAFAFA]">
              Delivery zone
            </p>
          </div>
          <div className="flex items-start gap-14">
            <div className="flex w-33 flex-col items-start gap-4">
              <p className="text-base font-normal leading-7 text-[#71717A]">
                MENU
              </p>
              <p className="text-base font-normal leading-7 text-[#FAFAFA]">
                Appitizers
              </p>
              <p className="text-base font-normal leading-7 text-[#FAFAFA]">
                Salads
              </p>
              <p className="text-base font-normal leading-7 text-[#FAFAFA]">
                Pizzas
              </p>
              <p className="text-base font-normal leading-7 text-[#FAFAFA]">
                Main dishes
              </p>
              <p className="text-base font-normal leading-7 text-[#FAFAFA]">
                Desserts
              </p>
            </div>
            <div className="flex w-33 flex-col justify-end items-start gap-4 self-stretch">
              <p className="text-base font-normal leading-7 text-[#71717A]"></p>
              <p className="text-base font-normal leading-7 text-[#FAFAFA]">
                Appitizers
              </p>
              <p className="text-base font-normal leading-7 text-[#FAFAFA]">
                Salads
              </p>
              <p className="text-base font-normal leading-7 text-[#FAFAFA]">
                Pizzas
              </p>
              <p className="text-base font-normal leading-7 text-[#FAFAFA]">
                Main dishes
              </p>
              <p className="text-base font-normal leading-7 text-[#FAFAFA]">
                Desserts
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end items-start gap-4">
            <p className="text-base font-normal leading-7 text-[#71717A]">
              FOLLOW US
            </p>
            <div className="flex p-[5px] justify-center items-start gap-4">
              <img src="Facebook.png" alt="FB" />
              <img src="Instagram.png" alt="Insta" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center py-8 gap-12 border-t-1 border-[#71717A] px-22">
        <div className="flex items-end gap-1">
          <p className="text-[#71717A] text-sm font-normal leading-7">
            Copy right 2024
          </p>
          <p className="text-[#71717A] text-sm font-normal leading-7">©</p>
          <p className="text-[#71717A] text-sm font-normal leading-7">
            Nomnom LLC
          </p>
        </div>
        <p className="text-[#71717A] text-sm font-normal leading-7">
          Privacy policy
        </p>
        <p className="text-[#71717A] text-sm font-normal leading-7">
          Terms and condition
        </p>
        <p className="text-[#71717A] text-sm font-normal leading-7">
          Cookie policy
        </p>
      </div>
    </div>
  );
};
