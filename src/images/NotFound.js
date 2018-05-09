import React from "react";

const SvgComponent = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={250}
    height={270}
    style={{ background: "#34a245" }}
    {...props}
  >
    <defs>
      <path
        id="a"
        d="M124.3 212.6a76 76 0 0 1-45-16l-47-93.7 19-51.2 73-17.8h22.4l64.5 33.3-3.4 72.5a72 72 0 0 1-23.6 52.6c-21.7 19-37 20.3-60 20.3z"
      />
      <rect id="c" width={86.3} height={31.2} x={34.5} y={12.8} rx={15.6} />
      <path
        id="e"
        d="M213.3 97.7h-110l-4-30.3-5.6 30.3H53.3c-.2 2.2-.3 4.4-.3 6.7v51.9c0 32 18.8 59.7 46 72.5v12.5c-26 2-51.3 5.7-66 9.4-14.3-19.2-32.8-37-33-72.2-.1-27 43.5-137.7 58.8-155.8C70 9.2 98.5.7 133.3 1.4c34.9.7 64.3 5.4 76 19.8 17.7 21.9 57.5 130.4 57.4 157.3-.2 35.1-18.7 53-33 72.2-14.7-3.7-40-7.3-66-9.4v-12.5a80.3 80.3 0 0 0 46-72.5v-52c0-2.2-.2-4.4-.4-6.6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#D08B5B" xlinkHref="#a" />
      <g mask="url(#b)">
        <g transform="rotate(3 -2650.1 970.3)">
          <rect
            width={92.1}
            height={36.9}
            x={31.6}
            y={9.9}
            fill="#000"
            fillOpacity={0.6}
            rx={18.5}
          />
          <mask id="d" fill="#fff">
            <use xlinkHref="#c" />
          </mask>
          <use fill="#FFF" xlinkHref="#c" />
          <path
            fill="#E6E6E6"
            d="M102.1 31.3h-13v17h-5.7v-17h-13v17h-5.7v-17h-13v17H46v-17H35.1v-5.8h11v-17h5.7v17h13v-17h5.7v17h13v-17h5.7v17h13v-17h5.7v17H120v5.8h-12.2v17H102v-17z"
            mask="url(#d)"
          />
        </g>
        <path
          fill="#000"
          fillOpacity={0.2}
          d="M107.8 137.9c-.4 6.4 7.1 12 16.7 12.6 9.6.5 17.6-4.3 18-10.8"
        />
        <g transform="rotate(3 -1460.7 946.7)">
          <ellipse cx={43.1} cy={31.2} fill="#FFF" rx={20.1} ry={19.9} />
          <ellipse cx={117.8} cy={31.2} fill="#FFF" rx={20.1} ry={19.9} />
          <ellipse cx={43.1} cy={31.2} fill="#000" fillOpacity={0.7} rx={8.6} ry={8.5} />
          <ellipse cx={117.8} cy={31.2} fill="#000" fillOpacity={0.7} rx={8.6} ry={8.5} />
        </g>
        <g fill="#000" fillOpacity={0.6} fillRule="nonzero">
          <path d="M69.2 92.6c6-7.7 21.7-11.4 34.8-7.4 1.5.5 3.1-.4 3.6-2a3 3 0 0 0-2-3.6c-15-4.6-33.1-.4-40.8 9.4a3 3 0 0 0 .5 4.1c1.2 1 3 .8 4-.5zM185 98.7c-5.2-8.3-20.3-13.6-33.8-11-1.5.3-3-.8-3.3-2.3a3 3 0 0 1 2.3-3.5c15.6-3 33.1 3.2 39.7 13.7a3 3 0 0 1-1 4c-1.2.9-3 .5-3.9-.9z" />
        </g>
        <path
          fill="#000"
          fillOpacity={0.2}
          d="M37.1 57.9C58.1 12 79-10.3 99.5-9.3l68.8 3.1a81.4 81.4 0 0 1 46.1 76l-1 21.1-118.8-6.2-2.3-33L85 84.2l-49.2-2.6 1.1-21 .2-2.7z"
        />
        <g transform="rotate(3 481.9 -16.8)">
          <mask id="f" fill="#fff">
            <use xlinkHref="#e" />
          </mask>
          <use fill="#E6E6E6" xlinkHref="#e" />
          <g fill="#2C1B18" mask="url(#f)">
            <path d="M-57.3-27h380.6v400.4H-57.3z" />
          </g>
        </g>
      </g>
      <path
        fill="#34A245"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.1}
        d="M123 224.8c0-17.4 51.3-35.2 70.3-30.8M135 23.7c-17 4.4-23.2 11.5-18.6 21.2 2.4 4.6 12.1 1.5 29.2-9.3-11 9.1-13.6 14.5-8.2 16.2 8.2 2.5 33.8-.3 40.7-5"
      />
      <path
        fill="#34A245"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.1}
        d="M228.2 39.7c-6.6-8.3-11.3-10.3-14-6.2 1.4-15-2.2-20.8-10.8-17.3-8.7 3.6-10.7 11.4-6.1 23.5-9.4-5.2-13.7-2.3-13 8.6-13.3-9.9-21.2-5.7-23.7 12.5-1 7.9 10.2 7 33.8-2.8-18.6 8.6-24.3 14.2-17 17a44.4 44.4 0 0 0 22.9 2.3c-16 11.3-21.3 19.7-16 25.1 5.3 5.5 13.7 6 25.2 1.5-14 3.8-19.7 8.7-17 14.7 2.5 6 7.1 9 13.7 9-17 1.7-23.5 5.4-19.6 11.1 3.9 5.7 9 8.5 15.5 8.5-18.5.4-28.4 5.2-29.9 14.2-1.4 9.1 6.2 9.1 23 0C179.3 168 174 174.1 179 180l9.9 4.5c-11-3.2-15.4-1.3-13.2 5.7 2.2 7 10.4 12.3 24.6 15.7M88.8 25c21-3.3 31.6-.7 31.8 7.6.2 8.3-7.8 12.5-24 12.5 10.1.6 13.3 3 9.6 7.2-3.8 4.2-11.6 5.7-23.2 4.5 8.2 1.2 11.4 3.4 9.6 6.7-1.8 3.2-12.7 4.4-32.6 3.7 5.3 1.8 6.6 4 4 6.4-2.7 2.5-17.4-1-44.3-10.1m73.7 139.3c6.4-11.8 11.7-14.2 16-7 4.4 7 4.4 12.6 0 16.8 6.9-15.6 13.9-21.2 21-16.9 7.3 4.3 7.3 11.5 0 21.7 14.9-7.3 22.1-7.3 21.8 0-.4 7.2-12.2 10-35.3 8.6"
      />
      <path
        fill="#34A245"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.1}
        d="M4.4 26.9c-4-4.5-4-7.6 0-9.3 4-1.8 7.4-.9 10.3 2.6C9.4 6.5 11 .2 19.1 1.3 27.3 2.5 31.3 11 31 27c3-1.9 5.5-.7 8 3.4 16-3 24.4 1 25.3 12.5C65.4 54 55 55.6 33 47c15.6 5 21.7 9.8 18.1 14.3-3.5 4.4-12.3 5.4-26.4 2.8 27.5 8.5 38.7 16 33.8 22.5-5 6.5-14 6.5-27.2 0 17.2 5.4 22.8 11 16.9 17-6 5.9-11.6 7.8-17 5.7 23.1 1.8 32.2 5.5 27.3 11.2-5 5.6-11.4 8.5-19.3 8.5 21.8 3.8 31.5 9.5 29 17-2.4 7.5-9.1 7.5-20 0 19.8 9.5 26.5 16.8 20 21.9-6.5 5-11 5-13.7 0"
      />
      <path
        fill="#34A245"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.1}
        d="M46.7 166.9c4.6-15.3 10.5-21.5 17.6-18.5 7.1 3 5.4 11.3-5.3 25 9.3-15.7 15.5-20 18.7-12.8 3.2 7.1-.5 14.6-11 22.4 17-11.3 26.3-12.3 28-2.9 1.5 9.4-2.5 15.8-12.1 19 11.3-4.5 16.5-4 15.4 1.8-1 5.8-4.2 9.6-9.4 11.5"
      />
    </g>
  </svg>
);

export default SvgComponent;
