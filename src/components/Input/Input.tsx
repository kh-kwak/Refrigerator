import classNames from "classnames/bind";

import styles from "./styles.module.scss";
import type { Door } from "../Refrigerator/Refrigerator";
import { useState } from "react";

const cx = classNames.bind(styles);

interface Props {
  addItem: (doorType: Door, item: string) => void;
}

function Input({ addItem }: Props) {
  const [value, setValue] = useState("");

  return (
    <div className={cx("wrap")}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cx("input")}
      />
      <div className={cx("button-wrap")}>
        <div className={cx("top")}>
          <button
            type="button"
            onClick={() => addItem("left-top-door", value)}
            className={cx("button")}
          >
            상단 왼쪽 문에 추가
          </button>
          <div className={cx("button-floor-wrap")}>
            <button
              type="button"
              onClick={() => addItem("top-inner-3", value)}
              className={cx("button")}
            >
              상단 안쪽 3층에 추가
            </button>
            <button
              type="button"
              onClick={() => addItem("top-inner-2", value)}
              className={cx("button")}
            >
              상단 안쪽 2층에 추가
            </button>
            <button
              type="button"
              onClick={() => addItem("top-inner-1", value)}
              className={cx("button")}
            >
              상단 안쪽 1층에 추가
            </button>
          </div>
          <button
            type="button"
            onClick={() => addItem("right-top-door", value)}
            className={cx("button")}
          >
            상단 오른쪽 문에 추가
          </button>
        </div>
        <div className={cx("bottom")}>
          <button
            type="button"
            onClick={() => addItem("left-bottom-door", value)}
            className={cx("button")}
          >
            하단 왼쪽 문에 추가
          </button>
          <div className={cx("button-floor-wrap")}>
            <button
              type="button"
              onClick={() => addItem("left-bottom-inner-3", value)}
              className={cx("button")}
            >
              하단 왼쪽 3층에 추가
            </button>
            <button
              type="button"
              onClick={() => addItem("left-bottom-inner-2", value)}
              className={cx("button")}
            >
              하단 왼쪽 2층에 추가
            </button>
            <button
              type="button"
              onClick={() => addItem("left-bottom-inner-1", value)}
              className={cx("button")}
            >
              하단 왼쪽 1층에 추가
            </button>
          </div>
          <div className={cx("button-floor-wrap")}>
            <button
              type="button"
              onClick={() => addItem("right-bottom-inner-3", value)}
              className={cx("button")}
            >
              하단 오른쪽 3층에 추가
            </button>
            <button
              type="button"
              onClick={() => addItem("right-bottom-inner-2", value)}
              className={cx("button")}
            >
              하단 오른쪽 2층에 추가
            </button>
            <button
              type="button"
              onClick={() => addItem("right-bottom-inner-1", value)}
              className={cx("button")}
            >
              하단 오른쪽 1층에 추가
            </button>
          </div>
          <button
            type="button"
            onClick={() => addItem("right-bottom-door", value)}
            className={cx("button")}
          >
            하단 오른쪽 문에 추가
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
