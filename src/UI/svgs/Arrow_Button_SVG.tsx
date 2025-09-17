"use client";

export default function Arrow_Button_SVG({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      className={`  ${className}`}
      width="32px"
      height="32px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
        className="stroke-blueCl dark:stroke-bgLight"
          d="M6 12H18M6 12L11 7M6 12L11 17"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
