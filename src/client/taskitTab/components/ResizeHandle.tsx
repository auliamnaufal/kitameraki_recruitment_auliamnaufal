import { PanelResizeHandle } from "react-resizable-panels";

// import styles from "./style.module.css";
import * as React from "react";

export default function ResizeHandle({
  className = "",
  id,
}: {
  className?: string;
  id?: string;
}) {
  return (
    <PanelResizeHandle
      // className={[styles.ResizeHandleOuter, className].join(" ")}
      style={{
        flex: "0 0 1.5em",
        position: "relative",
        outline: "none",
        backgroundColor: "transparent",
      }}
      id={id}
    >
      <div
        // className={styles.ResizeHandleInner}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          bottom: "0.25em",
          left: "0.25em",
          right: "0.25em",
          height: "20%",
          borderRadius: "0.25em",
          backgroundColor: "var(--background-color)",
          transition: "background-color 0.2s linear",
        }}
      >
        <svg
          style={{
            width: "1em",
            height: "1em",
            position: "absolute",
            transform: "rotate(90deg)",
            left: "calc(50% - 0.5rem)",
            top: "calc(50% - 0.5rem)",
          }}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z"
          />
        </svg>
      </div>
    </PanelResizeHandle>
  );
}
