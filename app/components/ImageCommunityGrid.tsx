import React from "react";

interface Props {
  name: string;
  styles: string;
  image: string;
}

export default function ImageCommunityGrid({ name, styles, image }: Props) {
  return (
    <div
      className={`flex flex-col overflow-hidden justify-center ${styles}  px-4 rounded-md h-full`}
    >
      <img src={image} alt={name} />
      {/* <p className="mb-2 font-semibold text-4xl">{name}</p> */}
    </div>
  );
}
