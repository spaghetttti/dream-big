// Импортируем компонент Link для быстрой навигации
import Link from "next/link";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className="self-center flex w-full max-w-[1199px] justify-center md:justify-between items-center gap-5 my-9 max-md:max-w-full max-md:flex-wrap">
      {/* Контейнер для всех ссылок.
        Я добавил классы 'flex-wrap' и 'justify-center', чтобы на мобильных устройствах 
        ссылки красиво переносились и центрировались.
      */}
      <div className="flex items-center justify-center flex-wrap gap-x-5 gap-y-2 px-5">
        {/*
          Каждый элемент теперь является компонентом Link, что является лучшей практикой в Next.js
        */}
        <Link
          href="/"
          className="text-red-800 text-base font-medium leading-5 hover:underline"
        >
          Home
        </Link>
        <Link
          href="/#services" // Пример ссылки на секцию на главной странице
          className="text-red-800 text-base font-medium leading-5 hover:underline"
        >
          Services
        </Link>
        <Link
          href="/application" // Пример ссылки на отдельную страницу
          className="text-red-800 text-base font-medium leading-5 hover:underline"
        >
          Application
        </Link>
        <Link
          href="/#about" // Пример ссылки на секцию
          className="text-red-800 text-base font-medium leading-5 hover:underline"
        >
          About Us
        </Link>

        {/* ----- Вот добавленные вами страницы ----- */}
        <Link
          href="/terms-and-conditions"
          className="text-red-800 text-base font-medium leading-5 hover:underline"
        >
          Terms and Conditions
        </Link>
        <Link
          href="/privacy-policy"
          className="text-red-800 text-base font-medium leading-5 hover:underline"
        >
          Privacy Policy
        </Link>
      </div>
      <div className="px-5">
        <Socials />
      </div>
    </footer>
  );
};