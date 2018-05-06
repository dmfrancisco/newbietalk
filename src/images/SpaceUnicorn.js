import React from "react";

const SpaceUnicorn = props => (
  <svg width={72} height={72} viewBox="0 0 72 72" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={37} cy={38} r={34} fill="#000" fillOpacity={0.15} />
      <circle cx={34} cy={34} r={34} fill="#2C1B18" />
      <circle cx={34} cy={34} r={31} fill="#FFEFAD" />
      <path
        fill="#2C1B18"
        d="M49.607 11.11c.456-.237 1.027-.079 1.277.353a.853.853 0 0 1-.072.964l-6.864 8.662c1.6 4.927 3.365 12.7 6.765 25.227v7.51h-4.358v4.588c-4.119-.149-10.071-1.969-12.86-10.517V67C22.707 67 13.542 62.164 6 52.492l2.94-10.048 2.517 14.15V36.43l3.224-7.701 2.63 14.79V22.443l.565-1.35c2.346-6.295 9.224-9.993 15.606-9.553 3 .206 6.11 1.502 7.867 3.864l8.258-4.294z"
      />
      <circle cx={36} cy={27} r={4} fill="#FFEFAD" />
    </g>
  </svg>
);

export default SpaceUnicorn;
