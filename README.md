# COVID-19 Status

The app can be viewed on https://homsphere-code-test.vercel.app.

## Intro

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The goal of this project is to provide data visualisation of COVID-19 statistics fetched from https://disease.sh.

### Process and decision-making

#### Implementation

I honestly had a lot of fun with this project. It entailed a LOT of learning between Next, Tailwind, and a full ESLint configuration, which I am all quite new to. I have found that Next has some noticeable differences compared to "regular" React, and I think the biggest challenge I have faced so far was really understanding SSR: what it really means and how to properly implement it. In this project, I tried my best to keep components server-side whenever possible, while extracting the client-side components so that they sit lower in the hierarchy.

Overall, I have just tried to go one step at a time. Starting with the base configuration: get ESLint and Prettier to work together, figuring out a way to support light/dark theme, setting some base colours to be used throughout the project, etc. I tried to add any relevant information to the README whenever there was a change in configuration. I then started adding UI views, possibly reusable components. I then just kept adding views, logic, and responsiveness, along with some refactoring along the way.

#### Styling

I had very basic knowledge of Tailwind before working on this project, but I decided to use it nonetheless since it was a goal of mine to try it out, especially since it seems to be the most recommended CSS framework for Next. I have no regrets. Once I got more used to it, it made my development process really smooth.

There is currently no light/dark theme toggle in this project but I wanted to be able to add it in the future, so I have found a way to do so using Tailwind that feels a bit more reusable than what I have seen in Tailwind's docs. For the time being, the theme is based on the system preferences, so you are welcome to change your browser's theme from light to dark (or vice-versa) to try it out!

The overall layout is quite simple given the limited amount of time to work on this project, but I believe that it gives a nice experience to the user nonetheless! If there is one thing I wish I would have done differently, it would be to show more charts at a time in the view on larger screens.

#### Any other trade-offs

- I ideally would have implemented error handling in this project, showing a message to the user about what went wrong with the request, as well as preventing any potential crashes.
- The contents of the statistics page is not that thought-through given the time constraint. Ideally I would think more to be able to give more meaningful data to the user.
- I found it quite hard to find proper names for my chart components, or even for my route - this might have been easier if I had thought things through better as mentioned in the last point.
- I am still trying to learn about Next folder structure best practices but I did my best ^^

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
