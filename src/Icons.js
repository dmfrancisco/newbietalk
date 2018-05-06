import React from "react";

export const Right = props => (
  <svg width={16} height={24} viewBox="0 0 16 24" {...props}>
    <path d="M0 0v24l16-12.064z" fillRule="evenodd" />
  </svg>
);

export const Left = props => (
  <svg width={16} height={24} viewBox="0 0 16 24" {...props}>
    <path d="M16 0v24L0 11.936z" fillRule="evenodd" />
  </svg>
);

export const Cross = props => (
  <svg width={18} height={18} viewBox="0 0 18 18" {...props}>
    <path
      d="M9.192 7.071l6.01-6.01L16.264 0l2.122 2.121-1.06 1.061-6.011 6.01 6.01 6.01 1.06 1.061-2.12 2.122-1.061-1.06-6.01-6.011-6.011 6.01-1.06 1.06L0 16.265l1.06-1.061 6.011-6.01-6.01-6.011L0 2.122 2.121 0l1.061 1.06 6.01 6.011z"
      fillRule="evenodd"
    />
  </svg>
);
