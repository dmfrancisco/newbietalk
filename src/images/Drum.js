import React from "react";

const Drum = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={134}
    height={134}
    viewBox="0 0 134 134"
    {...props}
  >
    <defs>
      <path
        id="b"
        d="M128 41.6v56.8c-3.5 16-31 28.5-64 28.5S3.5 114.4 0 98.4V41.6c0-17.7 28.7-32 64-32s64 14.3 64 32z"
      />
      <filter
        id="a"
        width="110.2%"
        height="111.9%"
        x="-2.7%"
        y="-3%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dx={6} dy={7} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feComposite
          in="shadowOffsetOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowOffsetOuter1"
        />
        <feColorMatrix
          in="shadowOffsetOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        />
      </filter>
      <path
        id="c"
        d="M0 41.6c0-17.7 28.7-32 64-32s64 14.3 64 32v7c0 17.7-28.7 32-64 32S0 66.4 0 48.7v-7z"
      />
      <ellipse id="d" cx={64} cy={43.6} rx={58.4} ry={28.4} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#a)" xlinkHref="#b" />
        <use fill="#9D0522" fillRule="evenodd" xlinkHref="#b" />
        <path
          stroke="#2C1B18"
          strokeWidth={3}
          d="M1.5 98.3c3.5 15.1 30.5 27 62.5 27s59-11.9 62.5-27V41.6C126.5 25 98.6 11 64 11S1.5 25 1.5 41.6v56.7z"
        />
      </g>
      <g fillRule="nonzero">
        <use fill="#F18F26" fillRule="evenodd" xlinkHref="#c" />
        <path
          stroke="#2C1B18"
          strokeWidth={3}
          d="M1.5 41.6v7c0 16.6 27.9 30.6 62.5 30.6s62.5-14 62.5-30.5v-7.1C126.5 25 98.6 11 64 11S1.5 25 1.5 41.6z"
        />
      </g>
      <g fillRule="nonzero">
        <use fill="#FBF2ED" fillRule="evenodd" xlinkHref="#d" />
        <ellipse
          cx={64}
          cy={43.6}
          stroke="#2C1B18"
          strokeWidth={3}
          rx={56.9}
          ry={26.9}
        />
      </g>
      <path
        fill="#AA695B"
        fillRule="nonzero"
        stroke="#2C1B18"
        strokeWidth={3}
        d="M126.6 21.6l-1.9-3a3.6 3.6 0 0 0-4.8-1.3L70.4 48.4a13 13 0 0 0-8.8 1.9c-5 3-7.5 8.2-5.5 11.5 2 3.4 7.7 3.7 12.8.7 3.5-2 5.8-5.3 6.1-8.2l50.3-27.8c1.7-1 2.3-3.2 1.3-4.9z"
      />
      <path
        fill="#AA695B"
        stroke="#2C1B18"
        strokeWidth={3}
        d="M105.7 11.2a3.6 3.6 0 0 0 .7-5l-2.1-2.8a3.6 3.6 0 0 0-5-.7l-45 35.7c-2.7-.6-6.3.3-9.5 2.7-4.7 3.5-6.6 9-4.2 12 2.3 3.2 8 2.9 12.8-.6 3-2.3 4.8-5.2 5.2-8l47-33.3z"
      />
      <path
        fill="#DA2F47"
        d="M11 104a3 3 0 0 1-3-3V75a3 3 0 0 1 3-3 3 3 0 0 1 3 3v26a3 3 0 0 1-3 3zm30 14c-1.6 0-3-1.5-3-3.3V85.3c0-1.8 1.4-3.3 3-3.3s3 1.5 3 3.3v29.4c0 1.8-1.4 3.3-3 3.3zm39 1c-1.7 0-3-1.5-3-3.3V86.3c0-1.8 1.3-3.3 3-3.3s3 1.5 3 3.3v29.4c0 1.8-1.3 3.3-3 3.3zm37-15a3 3 0 0 1-3-3V75a3 3 0 0 1 3-3 3 3 0 0 1 3 3v26a3 3 0 0 1-3 3z"
      />
    </g>
  </svg>
);

export default Drum;
