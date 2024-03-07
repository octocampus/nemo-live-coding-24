import { PropsWithChildren } from "react";
import style from "./card.module.css";
import clsx from "clsx";

interface CardProps {
  className?: string;
}

export const Card = ({ children, className }: PropsWithChildren<CardProps>) => {
  return <div className={clsx(style.wrapper, className)}>{children}</div>;
};
