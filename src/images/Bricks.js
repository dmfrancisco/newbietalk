import React from "react";

export const Brick1 = props => (
  <svg width={42} height={16} viewBox="0 0 42 16" {...props}>
    <path
      d="M27 13h13.528c.813 0 1.472.672 1.472 1.5s-.659 1.5-1.472 1.5H7.472C6.659 16 6 15.328 6 14.5S6.659 13 7.472 13H13V3H1.52A1.51 1.51 0 0 1 0 1.5C0 .672.68 0 1.52 0h28.96C31.32 0 32 .672 32 1.5S31.32 3 30.48 3H27v10zm-3 0V3h-8v10h8z"
      fillRule="nonzero"
    />
  </svg>
);

export const Brick2 = props => (
  <svg width={37} height={16} viewBox="0 0 37 16" {...props}>
    <path
      d="M18 13V3H6.52A1.51 1.51 0 0 1 5 1.5C5 .672 5.68 0 6.52 0h28.96C36.32 0 37 .672 37 1.5S36.32 3 35.48 3H21v10h9.48c.84 0 1.52.672 1.52 1.5s-.68 1.5-1.52 1.5H1.52A1.51 1.51 0 0 1 0 14.5c0-.828.68-1.5 1.52-1.5H18z"
      fillRule="nonzero"
    />
  </svg>
);
