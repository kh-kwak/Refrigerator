import classNames from "classnames/bind";

import useLocalStorage from "../../hooks/useLocalStorage";
import {
  initialDoorStates,
  type Door,
  type DoorStates,
} from "../../constants/door";

import { Door as DoorComponent } from "../Door/Door";
import Input from "../Input/Input";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

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
          doorType="left-top-door"
          doorStates={doorStates}
          deleteItem={deleteItem}
        />
        <DoorComponent
          type="inner"
          size="full"
          doorType="top-inner"
          doorStates={doorStates}
          deleteItem={deleteItem}
        />
        <DoorComponent
          type="outer"
          doorType="right-top-door"
          doorStates={doorStates}
          deleteItem={deleteItem}
        />
      </div>

      <div className={cx("bottom")}>
        <DoorComponent
          type="outer"
          doorType="left-bottom-door"
          doorStates={doorStates}
          deleteItem={deleteItem}
        />
        <DoorComponent
          type="inner"
          doorType="left-bottom-inner"
          doorStates={doorStates}
          deleteItem={deleteItem}
        />
        <DoorComponent
          type="inner"
          doorType="right-bottom-inner"
          doorStates={doorStates}
          deleteItem={deleteItem}
        />
        <DoorComponent
          type="outer"
          doorType="right-bottom-door"
          doorStates={doorStates}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
}

export default Refrigerator;
