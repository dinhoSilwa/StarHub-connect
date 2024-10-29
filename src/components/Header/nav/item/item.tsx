import { ChevronRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

interface ItemNavProfileProps extends ComponentProps<"li"> {
  title: string;
  subtitle: string;
  icon : ReactNode
}

export const ItemNavProfile = ({
  title,
  subtitle,
  icon,
  ...props
}: ItemNavProfileProps) => {
  return (
    <li
      className="flex items-center gap-4 py-4 border-b-2 mx-4 cursor-pointer"
      {...props}
    >
      <span className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center ">
        {icon}
      </span>
      <div className="flex flex-col -space-y-0">
        <span className="text-xs font-semibold">{title}</span>
        <span className="text-xs text-gray-700">{subtitle}</span>
      </div>
      <span className="flex-1 px-8">
        <ChevronRight className="ml-auto" />
      </span>
    </li>
  );
};
