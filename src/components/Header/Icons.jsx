const Base = ({ children, size = 22, stroke = 1.8, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

export const HomeIcon = (props) => (
  <Base {...props}>
    <path d="M3 11l9-8 9 8" />
    <path d="M5 10.5V21h5v-6h4v6h5V10.5" />
  </Base>
);

export const PaletteIcon = (props) => (
  <Base {...props}>
    <path d="M12 4a8 8 0 1 0 0 16h1.5a2.5 2.5 0 0 0 0-5H11a4 4 0 1 1 0-8c1.8 0 3.2 1.1 3.7 2.6" />
    <circle cx="8" cy="9.5" r="1.2" />
    <circle cx="10.2" cy="7.2" r="1.2" />
    <circle cx="13.5" cy="7" r="1.2" />
    <circle cx="7.6" cy="13.2" r="1.2" />
  </Base>
);

export const InfoIcon = (props) => (
  <Base {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 10v6" />
    <path d="M12 7h.01" />
  </Base>
);

export const LeafIcon = (props) => (
  <Base {...props}>
    <path d="M20.5 4.5C14.5 4.5 7 9 7 15.5c0 2.6 2 4.5 4.5 4.5C18.5 20 21 12 21 6.5" />
    <path d="M7 15.5c3-1 6-3.5 9-7" />
  </Base>
);

export const NewsIcon = (props) => (
  <Base {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <rect x="6" y="9" width="5" height="4" rx="1" />
    <path d="M13 9h5" />
    <path d="M13 13h5" />
    <path d="M6 17h12" />
  </Base>
);