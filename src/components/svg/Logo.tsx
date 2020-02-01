import * as React from "react";

const Logo = ({ size = 32, style = {} }) => (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    width={size}
    height={size}
    viewBox="0 0 512 512"
    enableBackground="new 0 0 512 512"
    style={style}
  >
    <path
      d="M320,128c52.563,0,95.375,42.438,96,94.813c-0.25,1.938-0.438,3.875-0.5,5.875l-0.813,23.5l22.25,7.75
	C462.688,268.906,480,293.063,480,320c0,35.313-28.688,64-64,64H96c-35.281,0-64-28.688-64-64c0-34.938,28.188-63.438,63-64
	c1.5,0.219,3.063,0.406,4.625,0.5l24.313,1.594l8-22.969C140.938,209.313,165.063,192,192,192c3.125,0,6.563,0.375,11.188,1.188
	l22.406,4.031l11.156-19.844C253.875,146.938,285.75,128,320,128 M320,96c-47.938,0-89.219,26.688-111.156,65.688
	C203.375,160.719,197.781,160,192,160c-41.938,0-77.219,27.063-90.281,64.563C99.813,224.438,97.969,224,96,224c-53,0-96,43-96,96
	s43,96,96,96h320c53,0,96-43,96-96c0-41.938-27.063-77.25-64.563-90.313C447.5,227.75,448,225.938,448,224
	C448,153.313,390.688,96,320,96L320,96z"
    />
  </svg>
);

export default Logo;
