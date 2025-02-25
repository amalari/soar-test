interface ExpandIconProps {
  open?: boolean;
}

export const ExpandIcon = ({ open }: ExpandIconProps) => (
  <span
    className={`
      inline-block w-[5px] h-[5px] transition-transform border-r-2 border-b-2
      ${open ? "rotate-45" : "-rotate-45"}
    `}
    style={{ borderColor: "currentColor" }}
  />
);