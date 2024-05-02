# Configuration

This configuration is intended for experienced developers who want to create a project from scratch with a configuration similar to `spacetimewave-web`. To contribute, please follow the guidelines outlined in the [CONTRIBUTING.md](https://github.com/spacetimewave/trustnet-engine/blob/main/CONTRIBUTING.md) file.

### Technologies

The following technologies were used to create `spacetimewave-web`.

| Technology               | Feature                     |
| ------------------------ | --------------------------- |
| NodeJS                   | JavaScript runtime          |
| pnpm                     | Package manager             |
| Vite                     | Package bundler             |
| React                    | Front-end                   |
| Typescript               | Programming language        |
| vite-plugin-dts          | Declaration Types Generator |
| rollup-plugin-visualizer | Bundle Size Visualizer      |
| ESLint                   | Code linting                |
| Prettier                 | Code formatting             |
| Jest                     | Code Testing                |
| Git                      | Version Control             |
| GitHub                   | Cloud-based git repository  |
| Husky                    | Pre-commit hook validator   |
| lint-staged              | Linting only staged files   |
| commitlint               | Lint git commit messages    |

### Configuration

These are the steps to follow to configure the technologies used by `spacetimewave-web`.

1.  Install NodeJS v16.x.x or greater

2.  Install pnpm with NodeJS v16.x.x or greater.

    ```console
    $ corepack enable
    $ corepack prepare pnpm@latest --activate
    ```

3.  Create the project with Vite

    ```console
    $ pnpm create vite <app>
    > Select a framework: React
    > Select a variant: TypeScript

    $ cd <app>
    $ pnpm install
    $ pnpm update
    ```

4.  Execute `pnpm run dev` to start the application

    ```console
    $ pnpm run dev
    ```

5.  Create a new git repository

    ```console
    $ git init
    $ git switch -c main
    ```

6.  Authenticate with GitHub using SSH (step 4.1) or Github CLI (step 4.2):

    4.1. Generate a SSH key, and add it to SSH and GitHub.

    4.2. Login directly using GitHub CLI, `gh login` makes all this magic, saving an encrypted SSH key for us to push commits.

    ```console
    $ gh auth login
    ? What account do you want to log into? GitHub.com
    ? What is your preferred protocol for Git operations on this host? SSH
    ? Generate a new SSH key to add to your GitHub account? Yes
    ? Enter a passphrase for your new SSH key (Optional) ****************
    ? Title for your SSH key: github
    ? How would you like to authenticate GitHub CLI? Login with a web browser
    ```

7.  Create a new GitHub repository and add the origin remote repository

    ```console
    git remote add origin <github-repository>
    ```

8.  Install Prettier formatter as development dependency.

    ```console
    $ pnpm add -D prettier
    ```

9.  Add `prettierrc.json` configuration and `.prettierignore`

10. If you use VSCode IDE, install `Prettier - Code formatter` extension. Then, add to _.vscode/settings.json_ the following settings to set Prettier as default formater when saving files.

    ```console
    {
        "prettier.configPath": "",
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
    ```

11. Add to `package.json` the format command.

    ```console
        "format": "prettier --write .",
    ```

    Now you can execute `pnpm format` to execute prettier formatter.

12. Remove ESLint configuration file (.eslintrc.cjs) created by Vite. We are going to use ESLint flat configuration.

13. Install ESLint linter as development dependency:

    ```console
    $ pnpm add -D eslint
    ```

14. Create ESLint configuration file:

    ```console
    $ pnpm create @eslint/config
    √ How would you like to use ESLint? · problems
    √ What type of modules does your project use? · esm
    √ Which framework does your project use? · react
    √ Does your project use TypeScript? · typescript
    √ Where does your code run? · browser

    The config that you've selected requires the following dependencies:

    globals, @eslint/js, typescript-eslint, eslint-plugin-react, eslint
    √ Would you like to install them now? · No / Yes
    √ Which package manager do you want to use? · pnpm
    ```

15. Add to `package.json` the lint command.

    ```console
    	"lint": "eslint ./src/**/*.ts ./src/**/*.tsx",
    ```

    Now you can execute `pnpm lint` to execute eslint linter.

16. If you use VSCode IDE, install `ESLint` extension. Then, add to _.vscode/settings.json_ the following settings to set ESLint as default linter.

    ```console
    {
        ...
        "eslint.enable": true,
        "eslint.run": "onType",
        "eslint.experimental.useFlatConfig": true
    }
    ```

17. Also install `Error Lens`. This extension will show the linting errors on the exact line where the error occurs.

18. Sometimes ESLint and Prettier rules may conflict. Although ESLint is deprecating formatting rules, conflicts will still appear until these rules are completely removed from ESLint. That's when `eslint-config-prettier` comes in. We will use eslint-config-prettier to avoid these conflicts. eslint-config-prettier provides rules that disable conflicting rules of eslint with prettier.

    First, install `eslint-config-prettier` to disable eslint rules that are unnecessary and might conflict with your Prettier configuration.

    ```console
    $ pnpm add -D eslint-config-prettier
    ```

    Finally, add the extension to `eslint.config.js` file.

    ```console
    import eslintConfigPrettier from 'eslint-config-prettier'

    export default [
        ...
        eslintConfigPrettier,
    ]
    ```

19. Add css linter by installing `stylelint`.

    ```console
    $ pnpm add stylelint -D
    $ pnpm add stylelint-config-standard -D
    ```

    Now you can execute `create-stylelint` to add a stylelint configuration file.

    ```console
    $ pnpm dlx create-stylelint
    ```

    By default it will create a `.stylelintrc.json` file with the following content.

    ```console
    {
        "extends": ["stylelint-config-standard"],
        "rules": {
            "at-rule-no-unknown": [
                true,
                {
                    "ignoreAtRules": ["tailwind"]
                }
            ]
        }
    }
    ```

    Add to package.json file the following commands.

    ```console
    "lint:css": "stylelint \"src/**/*.css\"",
    "format:css": "stylelint --fix \"src/**/*.css\"",
    ```

20. If you use VSCode IDE, install `Stylelint` extension. Then, add to _.vscode/settings.json_ the following settings to set Stylelint as VSCode default linter.

    ```console
    {
        ...
        /* CSS */
        "css.validate": false /* Disable CSS VSCode Linter to use Stylelint */,
        "stylelint.validate": ["css"]
    }
    ```

21. Add unit tests. We will need to install the following development dependencies.

    ```console
    $ pnpm add -D jest @types/jest ts-jest ts-node
    ```

    | Package     | Purpose                                       |
    | ----------- | --------------------------------------------- |
    | jest        | Test runner                                   |
    | ts-jest     | For running jest in typescript supported app. |
    | ts-node     | For creating jest config file in TS extension |
    | @types/jest | Types library for Jest                        |

    Add `jest.config.ts` file with the testing configuration. And finally add your test-suite to the project.

    ```console
        export default {
        preset: 'ts-jest',
        testEnvironment: 'node',
        moduleNameMapper: {
            '^src/(.*)$': '<rootDir>/src/$1',
        },
        modulePathIgnorePatterns: ['./dist/'],
        coveragePathIgnorePatterns: [],
        collectCoverageFrom: [
            './src/**/*.ts',
            './src/**/*.tsx',
            '!./src/**/*.test.ts',
        ],
        coverageThreshold: {},

        }
    ```

    Add test files naming them like `*.test.ts`. Add unit tests to the test suites.

    ```console
    describe('Test Suite', () => {
        it('Unit Test', async () => {
            expect(await function(param)).toEqual(
                expectedOutput,
            )
        })
    })
    ```

    Add test commands to package.json. We will add the --passWithNoTests option since there are no tests yet. But it's recommended to remove it as soon as you have some tests.

    ```console
    "scripts": {
        ...
        "test": "jest",
        "test:coverage": "jest --coverage --passWithNoTests",
    }
    ```

    Finally, add the coverage folder resulting from running `jest --coverage` to .gitignore.

22. Add commit lint and pre-commit hooks.

    ```console
    pnpm add -D @commitlint/cli @commitlint/config-conventional
    pnpm add -D husky
    pnpm add -D lint-staged
    ```

    Add `.lintstagedrc` file with the linting and formating configuration

    ```console
    {
        "*.{js,jsx,ts,tsx}" :[
            "prettier --write",
            "eslint"
        ],
        "*.json":[
            "prettier --write"
        ]
    }
    ```

    Add lint-staged commands to package.json

    ```console
    "scripts": {
        ...
        "lint-staged": "lint-staged --concurrent false",
    }
    ```

23. Install git commit hooks and create a pre-commit hook file

    ```console
    $ pnpm husky init
    ```

    Edit the pre-commit commands inside the `.husky/pre-commit` file. Add lint staged and testing to automatically execute them before commiting changes.

24. Add `.husky/commit-msg` hook to lint commit messages. Add commitlint command to commit-msg file.

    ```console
    pnpm -- commitlint --edit ${1}
    ```

25. Add a `CONTRIBUTING.md` file with the contributing instructions.

26. Optionally, add a `LICENSE` file with your project license.
27. Optionally, add a `AUTHORS` file with the authors of the project.

28. Add a `CHANGELOG.md` file with the version changes every time a new build of the package is published.

29. Finally, commit your changes and upload your code to GitHub by executing the following commands or more advanced git commands:

```console
git commit -m "feat(scope): msg"
git push -u origin main
```

28. Add Shadcn component library:

    i. Add Tailwind:

    ```console
    pnpm add -D tailwindcss postcss autoprefixer
    ```

    ii. Initialize Tailwind configuration:

    ```console
    npx tailwindcss init -p
    ```

    iii. Add non-relative module names resolution.

    ```console
    "compilerOptions": {
        ...
        /* Non-relative module names resolution*/
        "baseUrl": ".",
        "paths": {
            "@/*": ["./src/*"]
        }
    }
    ```

    iv. Add the following code to the vite.config.ts so your app can resolve paths without error.

    ```console
    # (so you can import "path" without error)
    pnpm add -D @types/node
    ```

    ```console
    import path from "path"

    import react from "@vitejs/plugin-react"
    import { defineConfig } from "vite"

    export default defineConfig({
        plugins: [react()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
    })
    ```

    v. Run the shadcn-ui init command to setup your Shadcn project:

    ```console
    $ pnpm dlx shadcn-ui@latest init

    √ Would you like to use TypeScript (recommended)? ... no / yes
    √ Which style would you like to use? » Default
    √ Which color would you like to use as base color? » Slate
    √ Where is your global CSS file? ... src/index.css
    √ Would you like to use CSS variables for colors? ... no / yes
    √ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ...
    √ Where is your tailwind.config.js located? ... tailwind.config.js
    √ Configure the import alias for components: ... @/components
    √ Configure the import alias for utils: ... @/lib/utils
    √ Are you using React Server Components? ... no / yes
    √ Write configuration to components.json. Proceed? ... yes

    ✔ Writing components.json...
    ✔ Initializing project...
    ✔ Installing dependencies...

    Success! Project initialization completed. You may now add components.
    ```

    vi. Now you can add components to your project using the following command:

    ```console
    $ pnpm dlx shadcn-ui@latest add button
    ```

    vi. Finally you can use those components in your React application

    ```console
    import { Button } from "@/components/ui/button"

    export default function Home() {
    return (
        <div>
        <Button>Click me</Button>
        </div>
    )
    }
    ```
