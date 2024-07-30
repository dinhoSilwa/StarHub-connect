import clsx from "clsx";
import { ComponentProps } from "react";

interface LiItemsProps extends ComponentProps<"li"> {
  icon: React.ReactNode;
  favoriteData: number | string | undefined;
  itemType: "star" | "Archive" | "followers" | "stack";
}
export const FavoriteIconsItems = ({
  icon,
  favoriteData,
  itemType,
  ...props
}: LiItemsProps) => {
  return (
    <>
      <li role="item-de-lista"
        className={clsx(
          "flex px-2 py-1 rounded-full gap-[6px] tems-center",
          { "bg-yellow-100": itemType === "star" },
          { "bg-red-100": itemType === "Archive" },
          { "bg-green-100": itemType === "followers" },
          { "bg-purple-100": itemType === "stack" }
        )}
        {...props}
      >
        <div
          className={clsx(
            "font-LexendFont text-[12px] font-normal",
            { "text-yellow-800": itemType === "star" },
            { "text-red-800": itemType === "Archive" },
            { "text-green-800": itemType === "followers" },
            { "bg-purple-100": itemType === "stack" }
          )}
        >
          <figure role="icone dos items">{icon}</figure>
        </div>

        <p role="texto do item"
          className={clsx(
            "font-LexendFont text-[12px] font-semibold",
            { "text-yellow-700": itemType === "star" },
            { "text-red-700": itemType === "Archive" },
            { "text-green-700": itemType === "followers" },
            { "text-purple-700": itemType === "stack" }
          )}
        >
          {favoriteData}
        </p>
      </li>
    </>
  );
};
