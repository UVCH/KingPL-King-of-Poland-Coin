# KingPL – King of Poland Coin

Minimal statically exported site for KingPL.

## Development

```bash
npm i
npm run dev
```

## Production build

```bash
npm run build && npm run export
```

Output is in `out/`.

Create `.env.local` with:

```
NEXT_PUBLIC_DEX_URL=...
NEXT_PUBLIC_DEFAULT_LOCALE=pl
NEXT_PUBLIC_SUPPORTED_LOCALES=pl,en
NEXT_PUBLIC_ALLOWED_CHAIN_ID=8453
```
