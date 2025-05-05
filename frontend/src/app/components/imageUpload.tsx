"use client";
import react, { ChangeEvent, useState } from "react";
import { uploadImage } from "../utils/image-upload";

export const ImageUpload = () => {
  const [file, setFile] = useState<File>();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };
  console.log(file);
  const handleOnClick = async (file?: File) => {
    if (!file) {
      console.log("file is not selected");
      return;
    }
    const imageURL = await uploadImage(file);
    console.log(imageURL);
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={() => handleOnClick(file)}
        className="bg-slate-200 font-semibold rounded-2xl"
      >
        Upload your file
      </button>
    </div>
  );
};
