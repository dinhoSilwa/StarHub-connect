import { ComponentProps } from "react";

interface FigureImgProps extends ComponentProps<'figure'>{
    imgUrl : string;
    altImg : string
}

export const FigureImg = ({imgUrl, altImg} : FigureImgProps) => {
  return (
    <>
      <figure className="w-12 h-12 small:w-12 small:h-12 rounded-md ">
        <img src={imgUrl} alt={altImg} className="rounded-md" />
      </figure>
    </>
  );
};
