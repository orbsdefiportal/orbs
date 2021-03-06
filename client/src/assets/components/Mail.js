import React from "react";

const Mail = ({ color, isHover = false, name }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      viewBox="0 0 32 33"
    >
      <defs>
        <filter id="pt2nr3tqwa">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g>
              <g>
                <g>
                  <g transform="translate(-1216 -1511) translate(25 1395) translate(40 24.146) translate(1019) translate(0 70.427) translate(0 22.134)">
                    <g>
                      <path
                        fill={isHover === name ? "#6dbbcc" : color}
                        fillRule="nonzero"
                        d="M18.28 16.172l4.72 3.1v-6.33l-4.72 3.23zM9 12.942v6.33l4.72-3.1L9 12.942zm13.125-1.844H9.875c-.437 0-.783.338-.849.773L16 16.645l6.974-4.774c-.066-.435-.412-.773-.849-.773zm-4.646 5.623l-1.238.847c-.074.05-.157.075-.241.075-.084 0-.167-.025-.24-.075l-1.239-.848-5.493 3.61c.067.432.412.768.847.768h12.25c.435 0 .78-.336.847-.768l-5.493-3.609z"
                        transform="translate(132)"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Mail;
