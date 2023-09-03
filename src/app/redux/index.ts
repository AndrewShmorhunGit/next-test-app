import { useAppDispatch } from "hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { setModal } from "app/redux/features/modal/modal.slice";
import { increment } from "app/redux/features/counter/counter.slice";
import {
  selectNav,
  unselectNav,
} from "app/redux/features/navigation/navigation.slice";

export {
  useAppDispatch,
  useSelector,
  setModal,
  increment,
  selectNav,
  unselectNav,
};
