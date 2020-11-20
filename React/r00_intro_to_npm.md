# Intro to Note Package Manager

**Create new project** with `create_react_app`:

```bash
$ mkdir your_project_name
$ cd your_project_name
$ npx create-react-app .
```

## Vocabulary

- **Package Manager** - a registry where developers can publish small, reusable pieces of code that they’ve written and would like others to be able to incorporate into their projects
- **Package** - small, independent piece of reusable code that often solves a commonplace problem
- **Dependency** - a package that your project relies on in order to function properly
- **Configuration File** - a file that allows you to define how a particular tool you’re using should interact with your codebase
- `.gitignore` - tells git not to push certain files to our remote repo
- `README.md` - allows us to describe our application and provide any instructions to people trying to use or contribute to it
- `package-lock.json` - builds a dependency tree of any third-party code we are relying on and what versions of those packages our app is using
- `package.json` - describes our application to NPM and what dependencies we need in order to use and develop the app

## Node Package Manager

Up until now, the codebases you’ve created have been fairly bare-bones:

```
|-project/
    |- index.html
    |- style.css
    |- script.js
```

In the real world, you’re going to see codebases that contain many more files, organized in a much more complex manner. It’s important that we feel comfortable navigating large codebases and understand the how and why they require the complexity that we see here.

**NPM** stands for **Node Package Manager**. A package manager is a registry where developers can publish reusable pieces of code that they’ve written (a package), and allow other developers to download it directly into their projects (as a dependency). NPM is not the only package manager - you may see others such as Yarn or Bower.

**The npm files `package.json`**

This is a configuration file that provides NPM with important information about your project. It is automatically generated for us when we start a new project and run the command

```
npm init
```

The `scripts` section of our package.json file allows us to specify commands to perform certain actions on our application that are helpful for the development process.

**Dependencies**

When we incorporate an NPM package into our codebase, we call it a dependency. There are two types of dependencies we’re concerned with:

- **devDependencies** - these are packages needed only for you, as the developer, to efficiently and effectively work on your application
- **dependencies** - these are packages that are required for a user to actually view and interact with your application
  We can see the types of dependencies we might have for our project by looking at the above to sections in our package.json file.

As we determine that our project needs certain dependencies, we install them by running this in our terminal:

```
npm install <packageName>
```

This will automatically add that package to our dependencies section of the `package.json`. If we only need a development dependency, we can specify for NPM to store it in our devDependencies by modifying the command slightly:

```
npm install <packageName> --save-dev
```

As we install dependencies, we populate a directory called `node_modules` - this is where our application looks for all of the packages our project relies on. It’s important to note that we do not commit the `node_modules` directory to GitHub. Looking back at the root of our repo, we noticed a `.gitignore` file that told git specifically not to commit certain files and directories. Included in this list of ignored files was our `node_modules` directory.

**Dependency version**

You’ll notice that the dependencies we install each have a value associated with them like ‘1.4.6’ – these values are the version numbers of our dependencies. Imagine the developer who created that package decided to change the name of the method from `map` to `apply`. If the change took effect to all projects that use the package, then all the projects would be broken. Version numbers allow us to rely on a particular representation of a package (e.g. `map` at version 1.2.3), then update manually to a newer version (e.g. `apply` at version 2.0.0) when we have the time and knowledge to refactor our applications to work with the new changes.
