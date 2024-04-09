# Search Params with nuqs Playground

Live demo: [nuqs-playground.vercel.app](https://nuqs-playground.vercel.app/)

Playground for the [nuqs](https://nuqs.47ng.com/) library.

Spot the difference between client-side and server-side rendering.

If you want to trigger a re-render and access the search params via server-side,
you must set `shallow: false`

Read more about it [here](https://nuqs.47ng.com/docs/options#shallow).

```tsx
const [keyword, setKeyword] = useQueryState("keyword", parseAsString);

<input
  onChange={(e) =>
    setKeyword(e.target.value, {
      shallow: false,
    })
  }
/>;
```
