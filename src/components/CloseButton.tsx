import React from "react";
import CloseIcon from "./CloseIcon";

type Props = {
  onClick: () => void;
};

export default function CloseButton({ onClick }: Props) {
  return (
    <button onClick={onClick}>
      <CloseIcon />
    </button>
  );
}
