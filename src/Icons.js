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

export const Down = props => (
  <svg width={11} height={7} {...props}>
    <path fill="#2C1B18" fillRule="evenodd" d="M11 0L5.5 7 0 0z" />
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

export const Help = props => (
  <svg width={17} height={17} viewBox="0 0 17 17" {...props}>
    <path
      fillRule="evenodd"
      d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm3.802-10.792c0-.832-.337-1.528-1.012-2.09-.675-.562-1.588-.842-2.738-.842s-2.044.283-2.681.85c-.638.567-.983 1.32-1.037 2.26h1.992c.044-.41.216-.742.519-.996.302-.254.718-.381 1.247-.381.53 0 .93.11 1.2.332.27.222.404.497.404.826 0 .33-.089.6-.267.81-.178.21-.467.419-.867.624-.4.205-.702.383-.907.535-.583.41-.875 1.101-.875 2.073v.648h1.912v-.47c0-.205.021-.386.064-.542.044-.157.144-.327.3-.51.157-.184.489-.406.996-.665.605-.302 1.048-.645 1.329-1.029.28-.383.421-.86.421-1.433zm-5.346 6.739c0 .367.122.672.365.915s.561.365.955.365c.395 0 .721-.122.98-.365.26-.243.39-.548.39-.915s-.13-.67-.39-.907c-.259-.238-.585-.357-.98-.357-.394 0-.712.12-.955.357s-.365.54-.365.907z"
    />
  </svg>
);
