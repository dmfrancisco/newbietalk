import React from "react";

const Flag = props => (
  <svg
    width={120}
    height={180}
    viewBox="0 0 120 180"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <filter
        x="-3.1%"
        y="-1.9%"
        width="111.4%"
        height="107.7%"
        filterUnits="objectBoundingBox"
        id="a"
      >
        <feOffset dx={6} dy={7} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feComposite
          in="shadowOffsetOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowOffsetOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          in="shadowOffsetOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <path
        d="M10 0c5.523 0 10 4.477 10 10v173H0V10C0 4.477 4.477 0 10 0z"
        id="b"
      />
      <path
        d="M0 23c0 5.523 4.477 10 10 10h37c5.523 0 10 4.477 10 10s4.477 10 10 10h47v62H67c-5.523 0-10-4.477-10-10s-4.477-10-10-10H10C4.477 95 0 90.523 0 85V23z"
        id="c"
      />
      <ellipse id="d" cx={10} cy={7} rx={10} ry={7} />
    </defs>
    <g filter="url(#a)" fill="none" fillRule="evenodd">
      <use fill="#DDD" xlinkHref="#b" />
      <path
        stroke="#2C1B18"
        strokeWidth={3}
        d="M1.5 181.5h17V10a8.5 8.5 0 1 0-17 0v171.5z"
      />
      <use fill="#F6292E" xlinkHref="#c" />
      <path
        stroke="#2C1B18"
        strokeWidth={3}
        d="M1.5 30.746V85a8.5 8.5 0 0 0 8.5 8.5h37c6.351 0 11.5 5.149 11.5 11.5a8.5 8.5 0 0 0 8.5 8.5h45.5v-59H67c-6.351 0-11.5-5.149-11.5-11.5a8.5 8.5 0 0 0-8.5-8.5H10a11.47 11.47 0 0 1-8.5-3.754z"
      />
      <g>
        <use fill="#DDD" xlinkHref="#d" />
        <ellipse
          stroke="#2C1B18"
          strokeWidth={3}
          cx={10}
          cy={7}
          rx={8.5}
          ry={5.5}
        />
      </g>
    </g>
  </svg>
);

export default Flag;
