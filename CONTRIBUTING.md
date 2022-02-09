# Contributing

This document set the guidelines for contributing to the `@vortigo/react-hooks` package. Please read it entirely, and in case of any doubt feel free to contact `julia.schafer@vortigo.com.br` for aid.

# Open Development

This package serves not only as a colection of reusable hooks to improve our celerity in building projects without having to rewrite the same piece of code everytime, but also as a learning ground for our developers. To expose them to the open source and the practices around it. Nonetheless, it still a opensource project and anyone who wants to contribute is welcome and will go through the same review process.

# New Hooks/Features/Fixes

First create an issue describing the hook/feature/fix you are proposing, the scenarios of usage and how it would generate value to our lib. A template will eventually be provided for this step, but by now you are free to write as you find appropriated.

# Pull Request

We're constantly monitoring for pull requests. We will review it and merge, ask for changes or close it with an explanation.

- Create your branch from main
- Always add tests to the code you are pushing
- Ensure the test suite passes `npm test`

# Hooks Structure

- Create a new folder with the name of the hook, following the rules of hooks convention;
- Create an `index.ts` file where the hook is implemented
- Create a test file with the name convention of `<hook-name>.test.ts`;
- Create a `README.md` file describing the usage of the hook, follow the convention of the others hooks readme files;
- Create an `example.html` file where the hooks is used.
