import classNames from "classnames/bind";

import styles from "./styles.module.scss";
import type { Door } from "../Refrigerator/Refrigerator";

const cx = classNames.bind(styles);

interface Props {
  type: "inner" | "outer";
  size?: "half" | "full";
  floor1: string[];
  floor2?: string[];
  floor3?: string[];
  deleteType: string;
  deleteItem: (doorType: Door, item: string) => void;
}

export function Door({
  type,
  size = "half",
  floor1,
  floor2,
  floor3,
  deleteType,
  deleteItem,
}: Props) {
  if (type === "inner") {
    return (
      <div className={cx("wrap", `size-${size}`)}>
        <div className={cx("floor")}>
          {floor3?.map((item, index) => (
            <button
              key={`${item}-${index}`}
              type="button"
              onClick={() => deleteItem(`${deleteType}-3` as Door, item)}
              className={cx("button")}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={cx("floor")}>
          {floor2?.map((item, index) => (
            <button
              key={`${item}-${index}`}
              type="button"
              onClick={() => deleteItem(`${deleteType}-2` as Door, item)}
              className={cx("button")}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={cx("floor")}>
          {floor1.map((item, index) => (
            <button
              key={`${item}-${index}`}
              type="button"
              onClick={() => deleteItem(`${deleteType}-1` as Door, item)}
              className={cx("button")}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cx("wrap", `size-${size}`)}>
      <div className={cx("floor")}>
        {floor1.map((item, index) => (
          <button
            key={`${item}-${index}`}
            type="button"
            onClick={() => deleteItem(`${deleteType}` as Door, item)}
            className={cx("button")}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
