import { palette } from "app/styles/services/palette";
import { ICatProduct } from "interfaces/IProducts";
import { BsTrashFill } from "react-icons/bs";
import { setModal, useAppDispatch } from "app/redux";

export function DeleteProductButton({ product }: { product: ICatProduct }) {
  const dispatch = useAppDispatch();
  return (
    <div style={{ alignSelf: "center" }}>
      <BsTrashFill
        size={16}
        color={palette.text_dark}
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(setModal({ value: "delete", data: product }))}
      />
    </div>
  );
}
