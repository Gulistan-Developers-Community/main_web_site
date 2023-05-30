import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useAuth } from '../context/AuthContext';
import EditPage from '../pages/cabinet/editing';

export default function Modal(props: { setOpenModal: any }) {
  const { setOpenModal } = props;
  const [_document, set_document] = useState({});
  const { logout } = useAuth();

  useEffect(() => {
    return set_document(document);
  }, []);

  if (!_document) {
    return null;
  }
  return ReactDom.createPortal(
    <div className="absolute inset-0 bg-white text-slate-900 text-lg mx-auto">
      <div className="flex items-center justify-between border-b border-solid border-slate-900 p-4">
        <h1 className="font-extrabold text-2xl sm:text-5xl select-none">
          MENU
        </h1>
        <i
          onClick={() => setOpenModal(false)}
          className="fa-solid fa-xmark duration-300 hover:rotate-90 text-lg sm:text-3xl cursor-pointer"
        ></i>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <h2
          onClick={() => {
            logout();
            setOpenModal(false);
          }}
          className="flex select-none duration-300 justify-center hover:pl-2 cursor-pointer"
        >
          Logout
        </h2>
      </div>
      <h2 className="flex select-none duration-300 justify-center hover:pl-2 cursor-pointer">
        <Link
          href="/cabinet/editing"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Edit Profile
        </Link>
      </h2>
    </div>,
    (document as Document).getElementById('portal') as HTMLElement
  );
}
