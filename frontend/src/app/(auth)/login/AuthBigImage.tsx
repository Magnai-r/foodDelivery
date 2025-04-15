import Image from "next/image";

export const AuthBigImage = () => {
  return (
    <div className="relative overflow-hidden h-screen w-[60%] rounded-2xl p-5">
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <Image
          alt="Big_pic"
          src="/bigImage.jpeg"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  );
};
