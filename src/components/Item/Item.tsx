import React, { useEffect } from "react";
import classNames from "classnames";
import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import type { Transform } from "@dnd-kit/utilities";

import { Handle, Remove } from "./components";

import styles from "./Item.module.scss";
import LeaveBalance from "../dashboard-widgets/leave-balance/LeaveBalance";
import Attendance from "../dashboard-widgets/attendance/Attendance";
import CheckIn from "../dashboard-widgets/check-in/CheckIn";
import BirthdayWidget from "../dashboard-widgets/birtday/BirthdayWidget";
import HolidayWidget from "../dashboard-widgets/holidays/HolidayWidget";
import Events from "../dashboard-widgets/events/Events";
import CurrentDayStatus from "../dashboard-widgets/current-status/CurrentDayStatus";
import ApplicationsWidget from "../dashboard-widgets/applications/ApplicationsWidget";
import LogsWidget from "../dashboard-widgets/log/LogsWidget";

export interface Props {
  dragOverlay?: boolean;
  color?: string;
  width?: string;
  containerId?: any;
  disabled?: boolean;
  dragging?: boolean;
  handle?: boolean;
  handleProps?: any;
  height?: number;
  index?: number;
  fadeIn?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  style?: React.CSSProperties;
  transition?: string | null;
  wrapperStyle?: React.CSSProperties;
  value: React.ReactNode;
  setEditDesign?: any;
  onRemove?(): void;
  renderItem?(args: {
    dragOverlay: boolean;
    dragging: boolean;
    sorting: boolean;
    index: number | undefined;
    fadeIn: boolean;
    listeners: DraggableSyntheticListeners;
    ref: React.Ref<HTMLElement>;
    style: React.CSSProperties | undefined;
    transform: Props["transform"];
    transition: Props["transition"];
    value: Props["value"];
  }): React.ReactElement;
}

export const Item = React.memo(
  React.forwardRef<HTMLLIElement, Props>(
    (
      {
        // color,
        dragOverlay,
        dragging,
        disabled,
        fadeIn,
        handle,
        handleProps,
        height,
        index,
        listeners,
        onRemove,
        renderItem,
        sorting,
        containerId,
        style,
        transition,
        transform,
        value,
        wrapperStyle,
        width,
        setEditDesign,
        ...props
      },
      ref
    ) => {
      useEffect(() => {
        if (!dragOverlay) {
          return;
        }

        document.body.style.cursor = "grabbing";

        return () => {
          document.body.style.cursor = "";
        };
      }, [dragOverlay]);

      const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
      };

      return renderItem ? (
        renderItem({
          dragOverlay: Boolean(dragOverlay),
          dragging: Boolean(dragging),
          sorting: Boolean(sorting),
          index,
          fadeIn: Boolean(fadeIn),
          listeners,
          ref,
          style,
          transform,
          transition,
          value,
        })
      ) : (
        <li
          className={classNames(
            styles.Wrapper,
            fadeIn && styles.fadeIn,
            sorting && styles.sorting,
            dragOverlay && styles.dragOverlay
          )}
          style={
            {
              ...wrapperStyle,
              transition: [transition, wrapperStyle?.transition]
                .filter(Boolean)
                .join(", "),
              "--translate-x": transform
                ? `${Math.round(transform.x)}px`
                : undefined,
              "--translate-y": transform
                ? `${Math.round(transform.y)}px`
                : undefined,
              "--scale-x": transform?.scaleX
                ? `${transform.scaleX}`
                : undefined,
              "--scale-y": transform?.scaleY
                ? `${transform.scaleY}`
                : undefined,
              "--index": index,
              // flexGrow: 1,
              width:
                containerId === "B"
                  ? width
                  : value === "LeaveBalance"
                  ? "calc(100% / (3 / 2 ) - 9px)"
                  : value === "CheckIn"
                  ? "calc(100% / 3 - 14px)"
                  : value === "Holiday" ||
                    value === "Events" ||
                    value === "Birthday" ||
                    value === "DayStatus" ||
                    value === "Applications" ||
                    value === "Logs"
                  ? "calc(100% / 3 - 14px)"
                  : // : value === "Attendance"
                    // ? "100%"
                    "47%",
              cursor: !disabled && "grab",
              // "--color": color
            } as React.CSSProperties
          }
          ref={ref}
          // Apply the listeners to the wrapper element
        >
          <div
            className={classNames(
              styles.Item,
              // dragging && !disabled && styles.dragging,
              handle && styles.withHandle,
              dragOverlay && styles.dragOverlay
              // disabled && styles.disabled
              // color && styles.color
            )}
            {...listeners}
            style={{ ...style, padding: value !== "CheckIn" ? "2px" : "0px" }}
            data-cypress="draggable-item"
            {...props}
            // tabIndex={!handle ? 0 : undefined}
          >
            {value === "LeaveBalance" ? (
              // <div>jnojn ono non </div>
              <LeaveBalance />
            ) : value === "CheckIn" ? (
              <CheckIn
                onMouseDown={stopPropagation}
                setEditDesign={setEditDesign}
                disabled={disabled}
              />
            ) : value === "DayStatus" ? (
              <CurrentDayStatus />
            ) : value === "Birthday" ? (
              <BirthdayWidget onMouseDown={stopPropagation} />
            ) : value === "Holiday" ? (
              <HolidayWidget onMouseDown={stopPropagation} />
            ) : value === "Events" ? (
              <Events onMouseDown={stopPropagation} />
            ) : value === "Applications" ? (
              <ApplicationsWidget onMouseDown={stopPropagation} />
            ) : value === "Logs" ? (
              <LogsWidget />
            ) : (
              // <div>jnojn ono non </div>
              <div>NO THING</div>
            )}
            <span className={styles.Actions}>
              {onRemove ? (
                <Remove className={styles.Remove} onClick={onRemove} />
              ) : null}
              {handle ? <Handle {...handleProps} {...listeners} /> : null}
            </span>
          </div>
        </li>
      );
    }
  )
);
