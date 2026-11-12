const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "square",
  "aria-hidden": true,
  focusable: false,
  className: "icon",
};

export function ArrowUpRight() {
  return (
    <svg {...base}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowDown() {
  return (
    <svg {...base}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function Plus() {
  return (
    <svg {...base}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
