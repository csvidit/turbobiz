# turbobiz

Create a business idea. Fast.

## How it works

The web application itself is made in NextJS using TypeScript as much as possible. It generates a prompt and then calls OpenAI's DaVinci API. The results are then parsed and then presented one-by-one to the user. Should the user want to do so, they can also open a Google Domains search page for buying a domain name close to the suggested business name.

OpenAI's API pricing is quite expensive, therefore this app is not hosted on a domain name to prevent misuse. People are free to fork this (with attribution) and then use their own API keys to use the app.

## Using it locally

As with other NextJS apps, in the project directory, you can run these commands. 

To launch a development server at ```localhost:3000``` (or another port should that be unavailable),

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Use `npm run build` to build the project for a production environment. 

Be sure to add your own API key as an environment variable in `.env.local` and make any necessary adjustments (such as variable name, etc.) in the code so that everything works. 
