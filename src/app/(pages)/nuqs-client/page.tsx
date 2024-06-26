/* eslint-disable @next/next/no-img-element */

import { getData } from "@/app/data";
import { NuqsInput } from "@/app/(pages)/nuqs-client/client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code } from "@/components/ui/code";
import { Navbar } from "@/components/ui/navigation";

interface Props {
  searchParams: {
    keyword?: string;
  };
}

export default async function Page(props: Props) {
  const { searchParams } = props;
  const { keyword } = searchParams;

  const resp = await getData(keyword);

  return (
    <div>
      <Navbar />

      <h1 className="text-3xl font-bold mt-4 mb-4">
        Demo Using{" "}
        <a
          href="https://nuqs.47ng.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Nuqs
        </a>{" "}
        with default option
      </h1>

      <p className="mt-5">
        If you use default option, the URL will be updated{" "}
        <b>without triggering</b> a new page load. So, you <b>{"can't"}</b>{" "}
        access search params from the server-side component.
      </p>
      <p className="mt-5">
        Read more about{" "}
        <a
          href="https://nuqs.47ng.com/docs/options#shallow"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Shallow Routing
        </a>
      </p>
      <p className="mt-2 mb-10">
        Source code:{" "}
        <a
          href="https://github.com/zakiego/nuqs-playground/blob/main/src/app/(pages)/nuqs-client/client.tsx"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          nuqs-client/client.tsx
        </a>
      </p>
      <NuqsInput />

      <Card className="sm:col-span-2 mt-2">
        <CardHeader className="pb-3">
          <CardTitle>🌩️ Server Side Search Params</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            value: {keyword}
          </CardDescription>
        </CardHeader>
      </Card>

      <h2 className="text-2xl font-bold mt-4 mb-4">
        Products: {resp.products.length}
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {resp.products.map((product) => (
          <Card key={product.id} className="mt-2">
            <CardHeader className="pb-3">
              {/* img */}
              <img
                className="object-cover rounded-lg aspect-video w-full mb-4 shadow-lg"
                src={product.thumbnail}
                alt={product.title}
              />
              <CardTitle className="line-clamp-1 font-bold text-xl text-balance">
                {product.title}
              </CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed line-clamp-2">
                {product.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
