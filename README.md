# MyWorkspace (Nx Publishing & Pipelines Example)

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This repository serves as a complete, working example of how to use GitHub Actions pipelines and an Nx modular workspace to build, version, and publish packages to GitHub Packages.** ✨

It demonstrates:
- 📦 Managing multiple libraries in a single Nx monorepo (`math-lib`, `axios-lib`)
- 🤖 Automated Semantic Versioning and Changelog generation using `nx release`
- 🚥 Automated CI pipelines testing code on PRs (`pr.yml`)
- 🚀 Automated CD pipelines handling the publishing flow to GitHub Packages (`publish.yml`)
- 🔒 Respecting branch protection rules while automating releases via PAT (Personal Access Token) bots

---

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Run tasks

To run tasks with Nx use:

```sh
npx nx <target> <project-name>
```

For example:

```sh
npx nx build myproject
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Adding Libraries

To add a new library to the `workspaces/library` directory, run:

```bash
nx g @nx/js:library my-lib --directory=workspaces/library/my-lib --importPath=@nx-project/my-lib
```

## Running Tasks

To run the Next.js application:
```bash
nx serve nextjs-example-app
```

To run tests for libraries (using **Vitest**):
```bash
nx test math-lib
nx test axios-lib
```

To build the application:
```bash
nx build nextjs-example-app
```

To build all libraries for publishing:
```bash
npx nx run-many --target=build --projects=axios-lib,math-lib
```

## Publishing Libraries

This project is configured to publish libraries to **GitHub Packages**.

- **Configuration**: Libraries in `workspaces/library` have `publishConfig` pointing to `https://npm.pkg.github.com`.
- **Semantic Versioning**: We use `nx release` to automatically bump versions, generate `CHANGELOG.md` files, and create release tags based on Conventional Commits.
- **Automation**: A GitHub Action is set up in `.github/workflows/publish.yml` that triggers on pushes to `main`. It handles the versioning, building, and publishing steps.
- **Manual Trigger**: You can also trigger the "Publish Libraries to GitHub Packages" workflow manually from the GitHub Actions tab.

## Conventional Commits

We enforce the [Conventional Commits](https://www.conventionalcommits.org/) specification using `commitlint` and `husky`.

- **Valid Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- **Commit Hook**: husky will prevent commits that do not follow the standard.
- **Example**: `feat: add math-lib utility functions`

## 🤖 AI Agents

This workspace includes definitions for AI Agents to assist with development and testing, located in `.github/agents/`:

- **Developer Agent** (`developer.agent.md`): Responsible for writing clean, modular, and well-documented code.
- **Tester Agent** (`tester.agent.md`): Acts as a QA engineer, writing comprehensive tests (using Vitest) and reviewing code.

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

To install a new plugin you can use the `nx add` command. Here's an example of adding the React plugin:
```sh
npx nx add @nx/react
```

Use the plugin's generator to create new projects. For example, to create a new React app or library:

```sh
# Generate an app
npx nx g @nx/react:app demo

# Generate a library
npx nx g @nx/react:lib some-lib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Set up CI!

### Step 1

To connect to Nx Cloud, run the following command:

```sh
npx nx connect
```

Connecting to Nx Cloud ensures a [fast and scalable CI](https://nx.dev/ci/intro/why-nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/ci/features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/ci/features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/ci/features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/ci/features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Step 2

Use the following command to configure a CI workflow for your workspace:

```sh
npx nx g ci-workflow
```

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
