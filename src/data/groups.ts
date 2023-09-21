import { IProduct } from "interfaces/IProducts";

export function createGroups(products: IProduct[]) {
  const groupsArray = products.map(({ group }) => {
    return group;
  });
  const groupsSet = new Set(groupsArray);
  const groupsArrayFromSet = Array.from(groupsSet);
  const groups: Map<string, IProduct[]> = new Map();
  groupsArrayFromSet.forEach((group) =>
    groups.set(
      group,
      products.filter((prod) => prod.group === group)
    )
  );
  return { groups };
}

function getGroupProducts(
  groups: Map<string, IProduct[]>,
  group: string
): IProduct[] {
  const emptyProduct: IProduct[] = [
    {
      id: "123dfaf0",
      image: "default image",
      position: { name: "", code: "" },
      status: "not available",
      date: { from: "2000-01-01", to: "2099-01-01" },
      state: { new: true },
      price: { usd: 0 },
      group: "No group",
      income: "No Income Category",
      supplier: "",
      guaranty: "",
    },
  ];
  // @ts-ignore
  return groups.has(group) ? groups.get(group) : emptyProduct;
}

export function getGroupData(groups: Map<string, IProduct[]>, group: string) {
  const groupProducts: IProduct[] = getGroupProducts(groups, group);

  const amountOfIncomes = groupProducts && groupProducts.length;

  const totalGroupPrice =
    groupProducts &&
    groupProducts.reduce((total, { price }) => {
      total = total + price.usd;
      return total;
    }, 0);

  return { groupProducts, amountOfIncomes, totalGroupPrice };
}
