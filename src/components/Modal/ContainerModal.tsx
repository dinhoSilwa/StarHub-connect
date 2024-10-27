import type { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
}
export const GlobalModalContainer: React.FC<ModalProps> = ({
  children,
}: ModalProps) => {
  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;
  return ReactDOM.createPortal(
    <section className="w-screen h-screen z-40 absolute flex justify-center items-center background inset-0 bg-slate-800/50 backdrop-blur-sm ">
      {children}
    </section>,
    modalRoot
  );
};
