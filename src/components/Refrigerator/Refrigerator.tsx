import classNames from "classnames/bind";

import useLocalStorage from "../../hooks/useLocalStorage";

import { Door as DoorComponent } from "../Door/Door";
import Input from "../Input/Input";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export type Door =
  | "left-top-door"
  | "right-top-door"
  | "top-inner-1"
  | "top-inner-2"
  | "top-inner-3"
  | "left-bottom-door"
  | "right-bottom-door"
  | "left-bottom-inner-1"
  | "left-bottom-inner-2"
  | "left-bottom-inner-3"
  | "right-bottom-inner-1"
  | "right-bottom-inner-2"
  | "right-bottom-inner-3";

type DoorStates = Record<Door, string[]>;

const initialDoorStates: DoorStates = {
  "left-top-door": [],
  "right-top-door": [],
  "top-inner-1": [],
  "top-inner-2": [],
  "top-inner-3": [],
  "left-bottom-door": [],
  "right-bottom-door": [],
  "left-bottom-inner-1": [],
  "left-bottom-inner-2": [],
  "left-bottom-inner-3": [],
  "right-bottom-inner-1": [],
  "right-bottom-inner-2": [],
  "right-bottom-inner-3": [],
};

function Refrigerator() {
  // 왼쪽 위 문쪽
  const [doorStates, setDoorStates] = useLocalStorage<DoorStates>(
    "fridgeData",
    initialDoorStates
  );

  // 음식 추가
  const addItem = (doorType: Door, item: string) => {
    if (item) {
      setDoorStates((prev) => {
        prev[doorType].push(item);

        return { ...prev };
      });
    }
  };

  // 음식 삭제
  const deleteItem = (doorType: Door, item: string) => {
    if (item) {
      setDoorStates((prev) => {
        prev[doorType] = prev[doorType].filter((prevItem) => prevItem !== item);

        return { ...prev };
      });
    }
  };

  return (
    <div className={cx("wrap")}>
      <Input addItem={addItem} />
      <div className={cx("top")}>
        <DoorComponent
          type="outer"
          floor1={doorStates["left-top-door"]}
          deleteType="left-top-door"
          deleteItem={deleteItem}
        />
        <DoorComponent
          type="inner"
          size="full"
          floor3={doorStates["top-inner-3"]}
          floor2={doorStates["top-inner-2"]}
          floor1={doorStates["top-inner-1"]}
          deleteType="top-inner"
          deleteItem={deleteItem}
        />
        <DoorComponent
          type="outer"
          floor1={doorStates["right-top-door"]}
          deleteType="right-top-door"
          deleteItem={deleteItem}
        />
      </div>

      <div className={cx("bottom")}>
        <DoorComponent
          type="outer"
          floor1={doorStates["left-bottom-door"]}
          deleteType="left-bottom-door"
          deleteItem={deleteItem}
        />
        <DoorComponent
          type="inner"
          floor3={doorStates["left-bottom-inner-3"]}
          floor2={doorStates["left-bottom-inner-2"]}
          floor1={doorStates["left-bottom-inner-1"]}
          deleteType="left-bottom-inner"
          deleteItem={deleteItem}
        />
        <DoorComponent
          type="inner"
          floor3={doorStates["right-bottom-inner-3"]}
          floor2={doorStates["right-bottom-inner-2"]}
          floor1={doorStates["right-bottom-inner-1"]}
          deleteType="right-bottom-inner"
          deleteItem={deleteItem}
        />
        <DoorComponent
          type="outer"
          floor1={doorStates["right-bottom-door"]}
          deleteType="right-bottom-door"
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
}

export default Refrigerator;
