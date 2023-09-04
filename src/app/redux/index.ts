"use client";
import { useAppDispatch, useAppSelector } from "hooks/useAppDispatch";

import { setModal } from "app/redux/features/modal/modal.slice";
import { increment, decrement } from "app/redux/features/counter/counter.slice";
import {
  selectNav,
  unselectNav,
  toggleNav,
} from "app/redux/features/navigation/navigation.slice";

export {
  useAppSelector as useSelector,
  setModal,
  increment,
  decrement,
  selectNav,
  unselectNav,
  toggleNav,
  useAppDispatch,
};
