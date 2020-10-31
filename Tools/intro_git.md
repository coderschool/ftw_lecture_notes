# Intro to Git & Github

**Github**, in a nutshell, is the way to share files with other people collaboratively without overwriting other people's stuff. Github is sort of a community, and there are a lot of open-source projects, which means the project's code is available to look at. Github is a web-based platform, and it bases on a technology called Git, G-I-T.

Git is a piece of software called **version control**. It is a fancy way of saying **Keeps track of changes to code**. Git has a lot of other features that are useful for software developers. So if you're programming, eventually you have to learn Git at some point.

**Git visualization**: https://learngitbranching.js.org/

## Git commands

- `git clone <url>`: makes a copy of a repository and stores it on your computer.
- `git init`: makes the current folder as a git repository
- `git add`: adds a file to "staging area", which means telling git to include the file in the next time it saves a version of the repo. `git add .` to add all changed files.
- `git status`: a helpful command, to see what's currently going on in the git repo
- `git commit`: saves the version of the repository.
- `git push -u origin master`: pushes the changes I made on my computer up to the Github repo
- `git pull`: is opposite of `git push`, pull the most recent version of the online repository.
- **Merge Conflicts**: Let say two developers work on the same line of a file, and both of them push the code up to Github. So Git's not going to be able to know what to do in that situation, because it doesn't know which kind of version of the code to believe. So you have to resolve that merge conflict by specifically telling Git which version of the code you want to use.
- `git log`: to see all the version that you have saved and you can see the commit message is a very good indicator or reminder of what was changed in a particular version. So make sure you use good commit messages.
- `git reset --hard <commit>`: reverts code back to a previous commit

  `git reset --hard origin/master`: reverts code back to remote repository version

- **Branching**: Branch is a version of the repository. Each branch has its own commit history and current version.

  `git branch`: shows all branches of code

  `git branch <branch_name>`: creates a new branch

  `git checkout <branch_name>`: switches to a branch

  `git merge <branch_name>`: merges the branch <branch_name> with current branch

- **Pull request:** This happens frequently in open-source projects. If you've made a change to a repository, and you may want to request to kind of merge those changes back into the original version. That's when you want to submit a pull request. And Github has functionality for pull requests to allow for whoever owns the repository to kind of review and either decide to approve or reject those changes.

- `git config --global alias.sla 'log --oneline --decorate --graph --all` makes `git log` a bit prettier.
