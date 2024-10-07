import logoFPTU from "../../public/fpt-logo.png";
import logoGroup from "../../public/group-logo.png";
import "./style.scss";

export default function NavBar() {
  return (
    <div className="navbar grid px-14 py-2">
      <div className="logo-branch flex gap-1 items-center w-fit">
        <div
          className="logo"
          style={{ backgroundImage: `url(${logoFPTU})` }}
        ></div>
        <div className="branch text-3xl font-bold flex">
          Hola<div className="small text-base self-end">HandBook</div>
        </div>
        <div
          className="small-logo"
          style={{ backgroundImage: `url(${logoGroup})` }}
        ></div>
      </div>
      <div className="nav-list self-center justify-self-center">
        <ul className="flex gap-7 items-center justify-center w-fit text-xl font-bold">
          <li>Trang chủ</li>
          <li>Tuyến Xe</li>
          <li>Ăn uống</li>
          <li>Phòng Trọ</li>
          <li>Vui chơi</li>
        </ul>
      </div>
      <div className="right flex items-center justify-center gap-5 justify-self-end">
        <div className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="login font-bold text-xl">Đăng nhập</div>
        <div className="signup font-bold text-xl">Đăng ký</div>
      </div>
    </div>
  );
}