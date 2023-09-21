/** @jsxImportSource theme-ui */
"use client";

import { selectNav, setModal, useAppDispatch, useSelector } from "app/redux";
import { IProduct } from "interfaces/IProducts";
import Link from "next/link";
import { useState } from "react";
import { BsPlus, BsTrashFill } from "react-icons/bs";
import { Box, Button } from "theme-ui";
import { newProd } from "utils/db/db.actions";

function ErrorButton() {
  const dispatch = useAppDispatch();
  return (
    <Link
      href={"/"}
      sx={{
        textDecoration: "none",
      }}
    >
      <Button
        sx={{ variant: "styles.buttons.error" }}
        children={"home"}
        onClick={() => dispatch(selectNav(null))}
      />
    </Link>
  );
}

function CloseModalButton() {
  const dispatch = useAppDispatch();
  return (
    <Button
      sx={{
        variant: "styles.buttons.modal",
        bg: "primary.main",
        color: "text.main",
        "&:hover": { bg: "primary.second" },
      }}
      children={"cancel"}
      onClick={() => dispatch(setModal({ value: "none", data: null }))}
    />
  );
}

function ModalDeleteButton() {
  return (
    <Button
      sx={{ variant: "styles.buttons.modal" }}
      children={[<BsTrashFill size={12} sx={{ color: "error" }} />, "delete"]}
      onClick={() => console.log("del")}
    />
  );
}

// export function AddProductButton({ product }: { product: ICatProduct }) {
//    const [isProd, setProd] = useState<ICatProduct[]>(products);

//   const addProd = (product: ICatProduct) => {
//     setProd(
//       isProd.filter((prod: ICatProduct) => prod.id !== product.id && prod)
//     );
//     newProd(product);
//   return <Box
//               sx={{
//                 bg: "primary.second",
//                 height: "2rem",
//                 width: "2rem",
//                 borderRadius: 0,
//                 variant: "styles.box.flex.center",
//                 boxShadow: "green",
//                 cursor: "pointer",
//                 ml: 3,
//               }}
//               onClick={() => addProd(prod)}
//             >
//               <BsPlus color={"white"} size={14} />
//             </Box>;
// }

export { ErrorButton, CloseModalButton, ModalDeleteButton };
