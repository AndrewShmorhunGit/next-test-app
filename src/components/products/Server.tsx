/** @jsxImportSource theme-ui */
import { createGrid } from "app/styles/services/styles";
import {
  formatHrnPrice,
  formatUsdPrice,
  transformDateFormat,
} from "utils/functions";
import { ICatProduct } from "interfaces/IProducts";
import { ProductDeleteButton, ProductImage } from "./Client";
import { catProducts } from "data/products";
import { Box, Grid } from "theme-ui";

const products = catProducts;

export const StatusIndicator = ({ status }: { status: string }) => (
  <div sx={{ alignSelf: "center", paddingLeft: "1.6rem" }}>
    <div
      sx={{
        width: "0.8rem",
        height: "0.8rem",
        bg: status === "available" ? "primary.main" : "text.error",
        borderRadius: "50%",
      }}
    ></div>
  </div>
);

const ProductInfo = ({ name, code }: { name: string; code: string }) => (
  <div sx={{ alignSelf: "center", paddingLeft: "2rem", fontWeight: "tables" }}>
    <p
      sx={{
        textDecoration: "underline lightgrey",
        color: "text.tables",
        fontSize: 1,
      }}
    >
      {name}
    </p>
    <p
      sx={{
        textDecoration: "underline lightgrey",
        color: "darkgrey",
        fontSize: 1,
      }}
    >
      {code}
    </p>
  </div>
);

export function ProductStatus({
  status,
}: {
  status: "available" | "not available";
}) {
  return (
    <div sx={{ alignSelf: "center", color: "blue" }}>
      <p
        sx={{
          fontSize: 1,
          color: status === "available" ? "primary.main" : "error",
        }}
      >
        {status}
      </p>
    </div>
  );
}

const DateRange = ({ from, to }: { from: string; to: string }) => (
  <Grid
    gap={3}
    columns={"1.4rem 1fr"}
    sx={{
      alignSelf: "center",
      width: "auto",
      fontSize: 0,
      fontWeight: "tables",
      color: "text.tables",
      rowGap: 0,
    }}
  >
    <p sx={{ color: "text.light", fontSize: 0 }}>from</p>
    <span>{from}</span>
    <p sx={{ color: "text.light", fontSize: 0 }}>to</p>
    <span>{to}</span>
  </Grid>
);

export function Guaranty({
  guaranty,
  from,
}: {
  guaranty: string | undefined;
  from: string;
}) {
  return (
    <Box sx={{ textAlign: "center", alignSelf: "center" }}>
      {guaranty ? (
        <>
          <p sx={{ color: "text.light", fontSize: 0 }}>
            {transformDateFormat(guaranty)[1]}
          </p>
          <span sx={{ fontSize: 1 }}>{transformDateFormat(from)[2]}</span>
        </>
      ) : (
        <span
          sx={{
            fontSize: 1,
            textTransform: "capitalize",
            color: "text.error",
          }}
        >
          no guaranty
        </span>
      )}
    </Box>
  );
}

export function ProductPrice({ price }: { price: number }) {
  return (
    <Box>
      <p sx={{ fontSize: 0, color: "text.light" }}>{formatUsdPrice(price)}</p>
      <p sx={{ fontSize: 1 }}>{formatHrnPrice(price * 38.2)} ₴</p>
    </Box>
  );
}

export function ProductWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Grid
      gap={4}
      columns={[
        "4rem 6rem 36rem 8rem 12rem 6rem minmax(9rem,18rem) minmax(16rem,32rem) 18rem 24rem 15rem 6rem",
      ]}
      sx={{
        variant: "styles.box.product.wrapper",
      }}
    >
      {children}
    </Grid>
  );
}

export function Product({ product }: { product: ICatProduct }) {
  return (
    <ProductWrapper>
      <StatusIndicator status={product.status} />
      <ProductImage image={product.image} altText={product.position.name} />
      <ProductInfo name={product.position.name} code={product.position.code} />
      <div sx={{ alignSelf: "center", color: "blue" }}>
        <p
          sx={{
            fontSize: 1,
            color: product.status === "available" ? "primary.main" : "error",
          }}
        >
          {product.status}
        </p>
      </div>
      <DateRange
        from={transformDateFormat(product.date.from)[0]}
        to={transformDateFormat(product.date.from)[0]}
      />
      <div sx={{ alignSelf: "center", fontSize: 1 }}>
        <p>{product.state.new ? "new" : "used"}</p>
      </div>
      <ProductPrice price={product.price.usd} />
      <div sx={{ alignSelf: "center" }}>
        <p
          sx={{
            fontSize: 3,
            textDecoration: "underline lightgrey",
            color: "text.tables",
          }}
        >
          {product.group}
        </p>
      </div>
      <div sx={{ alignSelf: "center" }}>
        <p
          sx={{
            fontSize: 3,
            color: "text.tables",
            textDecoration: product.supplier && "underline lightgrey",
          }}
        >
          {product.supplier || "__"}
        </p>
      </div>
      <div sx={{ alignSelf: "center" }}>
        <p
          sx={{
            fontSize: 3,
            color: "text.tables",
            textDecoration: "underline lightgrey",
          }}
        >
          {product.income}
        </p>
      </div>
      <Guaranty guaranty={product.guaranty} from={product.date.from} />
      <ProductDeleteButton product={product} />
    </ProductWrapper>
  );
}

export const Products = async () => {
  return (
    <ScrollContainer>
      {products.map((product: ICatProduct) => {
        return <Product key={product.position.name} product={product} />;
      })}
    </ScrollContainer>
  );
};

export function ProductsHeader() {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "6rem",
        pb: "6rem",
      }}
    >
      <h2 sx={{ variant: "styles.headers.title" }}>
        Products / {products.length}
      </h2>
      <div>
        <label htmlFor="">
          status
          <select></select>
        </label>
      </div>
    </div>
  );
}

export function ScrollContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="scroll-bar"
      sx={{
        maxHeight: "calc(100vh - 30rem)",
        overflowY: "auto",
        overflowX: "auto",
      }}
    >
      <div
        sx={{
          maxHeight: "calc(100vh - 40rem)",
          pr: "2rem",
          rowGap: "1.6rem",
          ...createGrid(1, 1),
        }}
      >
        {children}
      </div>
    </div>
  );
}
