# COVID-19 Status

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It provides data visualisation of COVID-19 statistics fetched from https://disease.sh.

The app has been deployed using Vercel and can be viewed on https://covid-status-ochre.vercel.app.

## Set up the project

Note: You may use either `npm`, `yarn`, `pnpm`, or `bun` for the following steps.

### Code Formatting

This project uses [Prettier](https://prettier.io/docs/en/) to ensure consistent formatting throughout the project.

#### Set up Prettier on VS Code

- Install the `Prettier - Code formatter` extension.
- In your IDE Settings, search for `Editor: Format On Save` and make sure that the option is enabled.
- In your IDE Settings, search for `Editor: Default Formatter` and make sure that Prettier is selected.

#### Use Prettier in the command line

- You may run `npm run format` to format all files in the project according to the defined format options.

### Linting

This also project uses [ESLint](https://eslint.org/docs/latest/) to check for any pattern mismatch in the code.

#### Set up auto-sorting of imports on save (VS Code)

1. In your IDE Settings, search for `codeactionsonsave`, then press `Edit in settings.json`.
2. Add the following config. This tells VS Code to run `eslint --fix` when you save a file.

```json
"editor.codeActionsOnSave": {
  "source.fixAll": "explicit"
}
```

#### Use ESLint in the command line

- Check for warnings/errors throughout all files of the project using `npm run lint`.
- Fix all auto-fixable problems using `npm run lint:fix`.

## Run the project

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) within your browser to see the result.

### Run the standalone project

```bash
# 1. Build the application
npm run build

# 2. Start the Node.js server
npm start
```

Open [http://localhost:3000](http://localhost:3000) within your browser to see the result.
