"use client";
import Link from "next/link";
import scss from "./Header.module.scss";
import { useEffect, useState } from "react";
import CustomModal from "../customModal/CustomModal";
import ReactModal from "react-modal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    ReactModal.setAppElement("#__next");
  }, []);

  return (
    <header className={scss.header}>
      <div className={scss.left}>
        <div className={scss.logo}>
          <img src="/Logo.svg" />
          <div className={scss.line}></div>
        </div>
        <div className={scss.navigate}>
          <div className={scss.rent}>
            <a onMouseEnter={openModal} onMouseLeave={closeModal}>
              Аренда
            </a>
            <CustomModal
              isOpen={isModalOpen}
              closeModal={closeModal}
              content={<div>что-то что-то</div>}
            />
          </div>
          <Link href="/">Покупка</Link>
          <Link href="/">Продажа</Link>
          <Link href="/">Риелторы</Link>
          <Link href="/">Застройщики</Link>
        </div>
      </div>
      <div className={scss.right}>
        <button className={scss.btn}>Войти</button>
      </div>
    </header>
  );
}
