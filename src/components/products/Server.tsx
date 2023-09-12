/** @jsxImportSource theme-ui */
import { createGrid } from "app/styles/services/styles";
import {
  formatHrnPrice,
  formatUsdPrice,
  transformDateFormat,
} from "utils/functions";
import { ICatProduct } from "interfaces/IProducts";
import {
  ProductDeleteButton,
  ProductImage,
  ProductsAmount,
  ProductsWithFilter,
  StateSelect,
  StatusSelect,
} from "./Client";
import { catProducts } from "data/income";
import { Box, Grid } from "theme-ui";
import { httpExchange, httpProducts } from "utils/http.requests";

const products = catProducts;

export function ProductsHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12rem",
        pb: "3.2rem",
      }}
    >
      <ProductsAmount title={"Products"} />
      <ProductsSelects />
    </Box>
  );
}

export async function Products() {
  const rate = await httpExchange();
  // const products = await httpProducts()
  return (
    <>
      <ProductsHeader />
      <ScrollContainer>
        <ProductsWithFilter rate={rate || 38} products={products} />
      </ScrollContainer>
    </>
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

export function Product({
  product,
  rate,
}: {
  product: ICatProduct;
  rate: number;
}) {
  return (
    <ProductWrapper>
      <StatusIndicator status={product.status} />
      <ProductImage image={product.image} altText={product.position.name} />
      <ProductInfo name={product.position.name} code={product.position.code} />
      <ProductStatus status={product.status} />
      <DateRange
        from={transformDateFormat(product.date.from)[0]}
        to={transformDateFormat(product.date.from)[0]}
      />
      <ProductState condition={product.state.new} />
      <ProductPrice price={product.price.usd} course={rate} />
      <ProductGroup group={product.group} />
      <ProductSupplier supplier={product.supplier} />
      <ProductIncome income={product.income} />
      <Guaranty guaranty={product.guaranty} from={product.date.from} />
      <ProductDeleteButton product={product} />
    </ProductWrapper>
  );
}

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

function ProductState({ condition }: { condition: boolean }) {
  return (
    <div sx={{ alignSelf: "center", fontSize: 1 }}>
      <p>{condition ? "new" : "used"}</p>
    </div>
  );
}

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

export function ProductPrice({
  price,
  course,
}: {
  price: number;
  course: number;
}) {
  return (
    <Box>
      <>
        <p sx={{ fontSize: 0, color: "text.light" }}>{formatUsdPrice(price)}</p>
        {course && (
          <p sx={{ fontSize: 1 }}>{formatHrnPrice(price * course)} ₴</p>
        )}
      </>
    </Box>
  );
}

function ProductSupplier({ supplier }: { supplier: string }) {
  return (
    <div sx={{ alignSelf: "center" }}>
      <p
        sx={{
          fontSize: 3,
          color: "text.tables",
          textDecoration: supplier && "underline lightgrey",
        }}
      >
        {supplier || "__"}
      </p>
    </div>
  );
}

function ProductGroup({ group }: { group: string }) {
  return (
    <div sx={{ alignSelf: "center" }}>
      <p
        sx={{
          fontSize: 3,
          textDecoration: "underline lightgrey",
          color: "text.tables",
        }}
      >
        {group}
      </p>
    </div>
  );
}

function ProductIncome({ income }: { income: string }) {
  return (
    <div sx={{ alignSelf: "center" }}>
      <p
        sx={{
          fontSize: 3,
          color: "text.tables",
          textDecoration: "underline lightgrey",
        }}
      >
        {income}
      </p>
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
          maxHeight: "calc(100vh - 36rem)",
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

function ProductsSelects() {
  return (
    <Grid
      columns={[2]}
      gap={6}
      sx={{ fontSize: 2, fontWeight: "nav", width: "auto" }}
    >
      <StateSelect />
      <StatusSelect />
    </Grid>
  );
}
