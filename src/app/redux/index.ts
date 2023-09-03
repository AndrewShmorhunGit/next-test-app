"use client";
import { useAppDispatch, useAppSelector } from "hooks/useAppDispatch";

import { setModal } from "app/redux/features/modal/modal.slice";
import { increment } from "app/redux/features/counter/counter.slice";
import {
  selectNav,
  unselectNav,
} from "app/redux/features/navigation/navigation.slice";

export {
  useAppSelector as useSelector,
  setModal,
  increment,
  selectNav,
  unselectNav,
  useAppDispatch,
};
