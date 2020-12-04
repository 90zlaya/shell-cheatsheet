# Git
> Version-control system for tracking changes in source code during software development

Read more about [Git](https://git-scm.com/).

## Table of Contents

1. [Misc](#misc)
1. [Commits](#commits)
1. [Tags](#tags)
1. [Branches](#branches)
1. [Users](#users)
1. [Remote](#remote)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

1. ### Misc

```bash
# Get verion of Git
git version

# Initialize repository
git init

# Set credentials for repository
git config credential.helper store

# Clone to repository
git clone <repository-url>

# Get differences between files
git diff --staged

# Reset changes to the file
git checkout HEAD -- <filename>

# Restore changes to directory
git restore -s@ -SW  -- <directory>
```

[⬆ back to top](#table-of-contents)

2. ### Commits

```bash
# Check commits short log
git shortlog

# Get last n commits
git log -n <number-of-commits>

# Get last n commits in one line
git log -n <number-of-commits> --oneline

# Get last n commits by author
git log -n <number-of-commits> --author=<author-name>

# Commit order
git add *
git commit -m '<message-content>'
git pull
git push

# Remove files from stage area
git rm --cached <filename>

# Add local repository to the server for the first time
git remote add origin <remote-location>
git push -u origin master

# Reset changes to the last commit
git reset --hard

# Reset changes to the specific commit
git reset --hard <commit-hash>

# Undo specific commit
git checkout <commit-hash>
```

[⬆ back to top](#table-of-contents)

3. ### Tags

```bash
# Delete a local tag
git tag -d <tag-name>

# Remove tags remotely
git push origin :refs/tags/<tag-name>

# Tags to branches
git checkout tags/<tag-name> -b <branch-name>
```

[⬆ back to top](#table-of-contents)

4. ### Branches

```bash
# Show current branch
git branch

# List all branches
git branch -a

# List all remote branches
git branch -r

# Switch to branch
git checkout <branch-name>

# Create branch
git branch <branch-name>

# Clone branch
git clone --branch <branch-name>

# Delete branch
git branch -d <branch-name>

# Set specific branch to be master for pushed commits
git push --set-upstream origin <branch-name>

# Merge branch to master
git merge <branch-name>

# Get all merged branches
git branch --merged

# Get all non-merged branches
git branch --no-merged

# Create empty branch
git checkout --orphan empty-branch && git rm -rf . && git commit --allow-empty -m "Initial commit" && git push -u origin empty-branch
```

[⬆ back to top](#table-of-contents)

5. ### Users

```bash
# Get global user
git config --global --list

# Set global user
git config --global user.name  "<username>"
git config --global user.email "<email>"
```

[⬆ back to top](#table-of-contents)

6. ### Remote

```bash
# Get remote version
git remote -v

# Set remote origin URL
git remote set-url <url-path>

# Change directory and remote path
git remote set-url --add origin <url-path>

# Edit remote location
git remote -v
git remote rm origin
git remote add origin <url-path>
git push --set-upstream <url-path>
```

[⬆ back to top](#table-of-contents)