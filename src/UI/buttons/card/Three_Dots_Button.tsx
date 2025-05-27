"use client";

type Button = {
  onClick: () => void;
};

export default function Three_Dots_Button({ onClick }: Button) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`absolute right-0 top-[10px] z-1 rotate-90 cursor-pointer`}
    >
      <svg
        width="28px"
        height="28px"
        viewBox="0 0 24 24"
        id="_24x24_On_Light_Dots"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <rect
            id="view-box"
            width="24"
            height="24"
            fill="#141124"
            opacity="0"
          ></rect>{" "}
          <path
            id="Shape"
            d="M12,1.5A1.5,1.5,0,1,1,13.5,3,1.5,1.5,0,0,1,12,1.5Zm-6,0A1.5,1.5,0,1,1,7.5,3,1.5,1.5,0,0,1,6,1.5Zm-6,0A1.5,1.5,0,1,1,1.5,3,1.5,1.5,0,0,1,0,1.5Z"
            transform="translate(4.5 11)"
            fill="#141124"
          ></path>{" "}
        </g>
      </svg>
    </button>
  );
}
