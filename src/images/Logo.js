import React from "react";
import "./Logo.css";

const Logo = props => {
  const { animated, className, width, height, ...otherProps } = props;
  const wrapperClassName = `Logo ${className || ""}`;
  const svgClassName = `Logo-chars ${animated ? "Logo-chars--animated" : ""}`;

  return (
    <div className={wrapperClassName} style={{ width, height }} {...otherProps}>
      <div className={svgClassName + " Logo-chars--0"}>
        <svg viewBox="0 0 340 45">
          <g fillRule="evenodd">
            <path d="M15 7.8a5 5 0 0 0-3.3 1c-.8.7-1.2 1.5-1.2 2.6s.5 2 1.5 2.7c1 .6 3.3 1.4 6.8 2.2 3.6 1 6.4 2.3 8.4 4 2 1.8 3 4.4 3 7.7 0 3.4-1.3 6.2-3.8 8.3a15.2 15.2 0 0 1-10 3.1c-6 0-11.4-2.2-16.2-6.6l5-6.2c4 3.6 7.8 5.4 11.3 5.4a6 6 0 0 0 3.6-1c1-.7 1.4-1.6 1.4-2.7 0-1.2-.5-2-1.4-2.7-1-.7-2.8-1.4-5.6-2-4.4-1-7.6-2.4-9.6-4.1-2-1.7-3-4.3-3-7.9C1.8 8 3 5.3 5.6 3.3c2.5-2 5.8-3 9.6-3a23.2 23.2 0 0 1 14.2 5l-4.3 6.2A16.6 16.6 0 0 0 15 7.8zM115.7 39l-3.5-8.2H96.4L93 39h-9l16.4-37.7h8.1L124.7 39h-9zm-11.3-26.5l-4.8 11h9.5l-4.7-11zM159.8 39V1.3h8.4v30.2h16V39h-24.4zm101.9 0l-3.6-8.2h-15.8l-3.5 8.2h-9l16.4-37.7h8.1L270.6 39h-9zm-11.4-26.5l-4.8 11h9.5l-4.7-11zm55.4-11.2h8.4v15.5l14.2-15.5h10.5l-15 16.6a2400.1 2400.1 0 0 1 15 21.1h-9.9l-11-14.9-3.8 4.2V39h-8.4V1.3z" />
          </g>
        </svg>
      </div>
      <div className={svgClassName + " Logo-chars--1"}>
        <svg viewBox="0 0 340 45">
          <g fillRule="evenodd">
            <path d="M71.1 20.2L61 41h-5L45.8 20.2V44h-8.5V6.3h11.4L58.5 27l9.7-20.7h11.4V44H71V20.2zm58 23.8V6.3h8.4v30.2h16.1V44h-24.5zm91.6-30.5V44h-8.5V13.5h-10.6V6.3h29.8v7.2h-10.7zM275 44V6.3h8.4v30.2h16.1V44H275z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Logo;
