# Git
> Version-control system for tracking changes in source code during software development

Read more about [Git](https://git-scm.com/).

## Table of Contents

* [Misc](#misc)
* [Stash](#stash)
* [Commits](#commits)
* [Tags](#tags)
* [Branches](#branches)
* [Users](#users)
* [Remote](#remote)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

## Misc

```bash
# Get version of Git
git version

# Initialize repository
git init

# Set credentials for repository
git config credential.helper store

# Clone to repository
git clone [repository-url]

# Get differences between files
git diff --staged

# Reset changes to the file
git checkout HEAD -- [filename]

# Restore changes to directory
git restore -s@ -SW  -- [directory]

# Count unpacked number of objects and their disk consumption
git count-objects -v
```

[⬆ back to top](#table-of-contents)

## Stash

```bash
# List all stashed changes
git stash list

# Save working changes to stash
git stash save

# Apply previously stashed working changes
git stash apply

# Clear all stashed working changes
git stash clear
```

[⬆ back to top](#table-of-contents)

## Commits

```bash
# Check commits short log
git shortlog

# Get last n commits
git log -n [number-of-commits]

# Get last n commits in one line
git log -n [number-of-commits] --oneline

# Get last n commits by author
git log -n [number-of-commits] --author=[author-name]

# Commit order
git add *
git commit -m "[message-content]"
git pull
git push

# Remove files from stage area
git rm --cached [filename]

# Add local repository to the server for the first time
git remote add origin [remote-location]
git push -u origin master

# Reset changes to the last commit
git reset --hard

# Reset changes to the specific commit
git reset --hard [commit-hash]

# Delete last n commits and force push to remote origin
git reset --hard HEAD~[n] && git push -f

# Undo specific commit
git checkout [commit-hash]

# Rename last commit message
git commit --amend -m "[message-content]" && git push --force [branch-name]

# Set commit date few days in past
git commit -m "[message-content]" --date="[number-of-days] day ago"
```

[⬆ back to top](#table-of-contents)

## Tags

```bash
# Delete a local tag
git tag -d [tag-name]

# Remove tags remotely
git push origin :refs/tags/[tag-name]

# Tags to branches
git checkout tags/[tag-name] -b [branch-name]

# Tag older commit
git tag -a [version-number] [commit-number] -m "[tag-message]" && git push origin [version-number]
```

[⬆ back to top](#table-of-contents)

## Branches

```bash
# Show current branch
git branch

# List all branches
git branch -a

# List all remote branches
git branch -r

# Switch to branch
git checkout [branch-name]

# Create branch
git branch [branch-name]

# Clone branch
git clone --branch [branch-name]

# Rename branch (locally)
git branch -m [old-name] [new-name]

# Delete branch (locally)
git branch -d [branch-name]

# Delete branch (remotely)
git push origin -d [branch-name]

# Set specific branch to be master for pushed commits
git push --set-upstream origin [branch-name]

# Merge branch to master
git merge [branch-name]

# Get all merged branches
git branch --merged

# Get all non-merged branches
git branch --no-merged

# Create empty branch
git checkout --orphan empty-branch && git rm -rf . && git commit --allow-empty -m "Initial commit" && git push -u origin empty-branch
```

[⬆ back to top](#table-of-contents)

## Users

```bash
# Get global user
git config --global --list

# Set global user
git config --global user.name  "[username]"
git config --global user.email "[email]"
```

[⬆ back to top](#table-of-contents)

## Remote

```bash
# Get remote version
git remote -v

# Set remote origin URL
git remote set-url [url-path]

# Change directory and remote path
git remote set-url --add origin [url-path]

# Edit remote location
git remote -v
git remote rm origin
git remote add origin [url-path]
git push --set-upstream [url-path]
```

[⬆ back to top](#table-of-contents)
