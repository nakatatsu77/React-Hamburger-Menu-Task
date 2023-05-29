import React, { useState } from "react";
import "./HamburgarMenu.css";

const HamburgarMenu = () => {
  // ハンバーガーメニューの開閉の状態管理。初期はfalse
  const [isOpen, setIsOpen] = useState(false);

  // ハンバーガーメニューの表示、非表示を切り替える
  const toggleMenu = () => {
    // isOpenをtrueに切り替える
    setIsOpen(!isOpen);
  };

  return (
    // isOpenがtrueならopenが、falseなら空文字列が追加される。
    <div className={`App ${isOpen ? "open" : ""}`}>
      <nav>
        <div className="inner">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

      <div className="toggleBtn" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default HamburgarMenu;
