import Link from "next/link";
import React from "react";
import * as UI from "../../../components";
import * as helper  from "../../../helpers";
import Cookies from "../../../helpers/Cookies";

const Cart = () => {
  return (
    <div className="car flex items-center">
      <img src="/assets/icon-cart.png" alt="cart" />
      <div className="cart-count">
        <span>0</span>
      </div>
    </div>
  );
};

const Auth = () => {
  const logout = () => {
    if (helper.isAuthenticated("user_token")) {
      Cookies.remove("user_token");
      localStorage.removeItem("user_token");
      window.location.href = "/";
    }
  };

  return helper.isAuthenticated("user_token" || "admin") ? (
    <li className="welcome-msg">
      <button onClick={logout}>
        <a className="cursor-pointer text-paragraph-color">Logout</a>
      </button>
    </li>
  ) : (
    <li className="welcome-msg">
      <Link href="/login">
        <a className="cursor-pointer text-paragraph-color">Login</a>
      </Link>
    </li>
  );
};

const Search = () => {
  return (
    <div className="search border-t-[1px] border-b-[1px] border-[#bbbbbb] flex justify-between mt-4">
      <div className="input-search-btn w-[100%]">
        <UI.Search
          className="bg-white text-sm p-3 border-0 hover:border-0 focus:border-0 hover:outline-none focus:outline-none w-full"
          placeholder="Search entire store here"
          onChange={() => {}}
          value={""}
        />
      </div>
      <div className="search-btn">
        <UI.Button
          text="Search"
          className="bg-bg-color-main py-4 rounded-none cursor-pointer opacity-[1] pl-[20px] pr-[21px] text-white font-serif hover:bg-gray-500 transition-[background-color] duration-500 ease-in-out font-[400]"
          disabled={false}
        />
      </div>
    </div>
  );
};

const TopNavRightBar = () => {
  return (
    <div className="w-[60%] border-2 border-[#d7d7d7] bg-white">
      <div className="body flex justify-between p-3">
        <div className="list-items">
          <ul className="topest--header flex items-center">
            <li className="currency mr-3">
              <UI.DropDown
                apperance={true}
                className="bg-white text-sm text-[#383838] hover:bg-none rounded-none cursor-pointer"
                items={[
                  { text: "USD", value: "USD" },
                  { text: "EUR", value: "EUR" },
                ]}
                onChange={(value) => console.log(value)}
                value="USD"
              />
            </li>
            <li className="language mr-3">
              <UI.DropDown
                apperance={true}
                className="bg-white text-sm text-[#383838] hover:bg-none rounded-none cursor-pointer"
                items={[
                  { text: "English", value: "English" },
                  { text: "Deutsch", value: "Deutsch" },
                  { text: "Français", value: "Français" },
                ]}
                onChange={(value) => console.log(value)}
                value="English"
              />
            </li>
            <li className="welcome-msg mr-3">
              <UI.Paragraphs
                text="Welcome to our store"
                fontSize="text-[16px]"
                color="text-black font-[300]"
              />
            </li>
          </ul>
          <ul className="topest--header flex mt-2">
            <li className="currency">
              <UI.Paragraphs
                text="Compare Products"
                fontSize="text-[13px]"
                color="text-paragraph-color"
                className="mr-3 cursor-pointer"
              />
            </li>
            <li className="language">
              <UI.Paragraphs
                text="My Account"
                fontSize="text-[13px]"
                color="text-paragraph-color"
                className="mr-3 cursor-pointer"
              />
            </li>
            <li className="welcome-msg">
              <UI.Paragraphs
                text="My Wish List"
                fontSize="text-[13px]"
                color="text-paragraph-color"
                className="mr-3 cursor-pointer"
              />
            </li>
            <Auth />
          </ul>
        </div>
        {/* cart */}
        <Cart />
      </div>
      {/* search */}
      <Search />
    </div>
  );
};

const TopNavBar = () => {
  return (
    <div className="flex justify-between">
      {/* logo */}
      <div className="logo p-2">
        <img src="/assets/logo.png" alt="logo" />
      </div>
      {/* topNavRightBar */}
      <TopNavRightBar />
    </div>
  );
};

export default TopNavBar;
