"use client";
import React from "react";
import InfoModal from "./InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

const Modal = () => {
  const { isOpen, closeModal } = useInfoModal();
  return (
    <div>
      <InfoModal visible={isOpen} onClose={closeModal} />
    </div>
  );
};

export default Modal;
