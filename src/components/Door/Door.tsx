import classNames from "classnames/bind";

import {
  initialDoorStates,
  type Door,
  type DoorStates,
} from "../../constants/door";

import styles from "./styles.module.scss";
import useLocalStorage from "../../hooks/useLocalStorage";

const cx = classNames.bind(styles);

interface Props {
  doorType: string;
  doorStates: DoorStates;
  deleteItem: (doorType: Door, item: string) => void;
}

interface InnerDoorProps extends Props {
  type: "inner";
  size?: "half" | "full";
}

interface OuterDoorProps extends Props {
  type: "outer";
}

export function Door({
  doorType,
  doorStates,
  deleteItem,
  ...props
}: InnerDoorProps | OuterDoorProps) {
  const { type } = props;

  if (type === "inner") {
    const { size = "half" } = props;

    return (
      <div className={cx("wrap", `size-${size}`)}>
        <div className={cx("floor")}>
          {doorStates[`${doorType}-3` as Door].map((item, index) => (
            <button
              key={`${item}-${index}`}
              type="button"
              onClick={() => deleteItem(`${doorType}-3` as Door, item)}
              className={cx("button")}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={cx("floor")}>
          {doorStates[`${doorType}-2` as Door].map((item, index) => (
            <button
              key={`${item}-${index}`}
              type="button"
              onClick={() => deleteItem(`${doorType}-2` as Door, item)}
              className={cx("button")}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={cx("floor")}>
          {doorStates[`${doorType}-1` as Door].map((item, index) => (
            <button
              key={`${item}-${index}`}
              type="button"
              onClick={() => deleteItem(`${doorType}-1` as Door, item)}
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
    <div className={cx("wrap")}>
      <div className={cx("floor")}>
        {doorStates[`${doorType}` as Door].map((item, index) => (
          <button
            key={`${item}-${index}`}
            type="button"
            onClick={() => deleteItem(`${doorType}` as Door, item)}
            className={cx("button")}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
