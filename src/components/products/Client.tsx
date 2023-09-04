import { palette } from "app/styles/services/palette";
import { createGrid } from "app/styles/services/styles";
import { ICatProduct } from "interfaces/IProducts";
import { BsTrashFill } from "react-icons/bs";
import { transformDateFormat } from "utils/functions";
import { setModal, useAppDispatch } from "app/redux";

const StatusIndicator = ({ status }: { status: string }) => (
  <div style={{ alignSelf: "center", paddingLeft: "1.6rem" }}>
    <div
      style={{
        width: "0.8rem",
        height: "0.8rem",
        background:
          status === "available" ? palette.main_primary : palette.error,
        borderRadius: "50%",
      }}
    ></div>
  </div>
);

const ProductImage = ({
  image,
  altText,
}: {
  image: string;
  altText: string;
}) => (
  <div style={{ alignSelf: "center" }}>
    <img
      style={{ maxHeight: "3.2rem", borderRadius: "1.4rem" }}
      src={image}
      alt={altText}
    />
  </div>
);

const ProductInfo = ({ name, code }: { name: string; code: string }) => (
  <div style={{ alignSelf: "center", paddingLeft: "2rem" }}>
    <p
      style={{
        textDecoration: "underline lightgrey",
        color: "darkgrey",
        fontSize: "1.2rem",
        fontWeight: 500,
      }}
    >
      {name}
    </p>
    <p
      style={{
        textDecoration: "underline lightgrey",
        color: "grey",
        fontSize: "1.2rem",
        fontWeight: 500,
      }}
    >
      {code}
    </p>
  </div>
);

const DateRange = ({ from, to }: { from: string; to: string }) => (
  <div style={{ alignSelf: "center", ...createGrid("3rem 1fr", 2) }}>
    <p>from</p>
    <span>{from}</span>
    <p>to</p>
    <span>{to}</span>
  </div>
);

export function Product({ product }: { product: ICatProduct }) {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => console.log(product)}
      style={{
        ...createGrid(
          "4rem 6rem 36rem 6rem 10rem 6rem minmax(9rem,18rem) minmax(16rem,32rem) 18rem 24rem 15rem 6rem",
          1
        ),
        padding: "0.8rem 2.4rem",
        background: palette.background_main,
        columnGap: "2.8rem",
        borderRadius: "0.4rem",
      }}
    >
      <StatusIndicator status={product.status} />
      <ProductImage image={product.image} altText={product.position.name} />

      <ProductInfo name={product.position.name} code={product.position.code} />
      <div style={{ alignSelf: "center", color: "blue" }}>
        <p
          style={{
            color:
              product.status === "available"
                ? palette.main_primary
                : palette.error,
          }}
        >
          {product.status}
        </p>
      </div>

      <DateRange
        from={transformDateFormat(product.date.from)[0]}
        to={transformDateFormat(product.date.from)[0]}
      />
      <div style={{ alignSelf: "center" }}>
        <p>{product.state.new ? "new" : "used"}</p>
      </div>
      <div style={{ alignSelf: "center" }}>
        <p>{product.price.usd}$</p>
        <p>{product.price.usd * 38}₴</p>
      </div>
      <div style={{ alignSelf: "center" }}>
        <p
          style={{
            fontSize: "1.6rem",
            textDecoration: "underline lightgrey",
            color: palette.text_light,
          }}
        >
          {product.group}
        </p>
      </div>
      <div style={{ alignSelf: "center" }}>
        <p
          style={{
            fontSize: "1.6rem",
            textDecoration: "underline lightgrey",
          }}
        >
          {product.supplier}
        </p>
      </div>
      <div style={{ alignSelf: "center" }}>
        <p
          style={{
            fontSize: "1.6rem",
            textDecoration: "underline lightgrey",
          }}
        >
          {product.income}
        </p>
      </div>
      <div style={{ alignSelf: "center" }}>
        <p>{transformDateFormat(product.date.from)[1]}</p>
        <span>{transformDateFormat(product.date.from)[2]}</span>
      </div>
      <div style={{ alignSelf: "center" }}>
        <BsTrashFill
          size={16}
          color={palette.text_dark}
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(setModal({ value: "delete", data: product }))}
        />
      </div>
    </div>
  );
}
