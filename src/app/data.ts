import { z } from "zod";

export const getData = async (query: string | undefined) => {
  const schema = z.object({
    products: z.array(
      z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        price: z.number(),
        discountPercentage: z.number(),
        rating: z.number(),
        stock: z.number(),
        brand: z.string(),
        category: z.string(),
        thumbnail: z.string(),
        images: z.array(z.string()),
      }),
    ),
    total: z.number(),
    skip: z.number(),
    limit: z.number(),
  });

  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}&limit=10`,
  );

  const data = await response.json();

  return schema.parse(data);
};
