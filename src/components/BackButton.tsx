import React from "react";
import ArrowBackIcon from "./ArrowBackIcon";

type Props = {
  onClick?: () => void;
};

export default function BackButton({ onClick }: Props) {
  return (
    <a onClick={onClick}>
      <ArrowBackIcon />
    </a>
  );
}
