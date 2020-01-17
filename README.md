# Shell Cheatsheet
> Commands for Unix shell terminal

## Table of Contents

1. [Linux](#linux)
1. [Git](#git)
1. [SVN](#svn)
1. [Composer](#composer)
1. [cURL](#curl)

## Linux

* 1.1. Misc

```bash
# Create shortcut
ln -s <destination-file> <destination-shortcut>

# Get list of all processes for app name
ps -ef | grep <app-name>

# Kill all processes by given name
killall <process_name>

# Extract tar file
tar -vxjf <filename>

# Read file live
tail -f <filename>

# Switch to superuser in terminal
sudo su
```

* 1.2. Useful

```bash
# Install & run OS configuration tools
apt-get install dconf-tools
dconf-editor

# Apache server log location
/var/log/apache2/error.log
```

* 1.3. apt

```bash
# Search packages
apt-cache search <package-name>

# Install app
apt install <app-name>

# Remove app
apt remove <app-name>

# Update apt
apt update

# List upgradable files
apt list -u

# Upgrade apt
apt upgrade

# Clean apt
apt autoclean
```

[⬆ back to top](#table-of-contents)

## Git

2.1. Misc

```bash
# Get remote version
git remote -v

# Set credentials for repository
git config credential.helper store

# Set remote origin URL
git remote set-url <url-path>

# List configured user
git config --global --list
```

2.2. Commits

```bash
# Get last n commits
git log -n <number-of-commits>

# Get last n commits in one line
git log -n <number-of-commits> --oneline

# Get last n commits by author
git log -n <number-of-commits> --author=<author-name>
```

2.3. Tags

```bash
# Delete a local tag
git tag -d <tag-name>

# Remove tags remotely
git push origin :refs/tags/<tag-name>
```

2.4. Branches

```bash
# Show current branch
git branch

# List all branches
git branch -a

# List all remote branches
git branch -r

# Switch to branch
git checkout <branch-name>
```

[⬆ back to top](#table-of-contents)

## SVN

* 3.1. Misc

```bash
# Status of files
svn st

# Add file
svn add <filename>

# Remove file
svn rm <filename>

# Show differences
svn diff

# Clone repository
svn checkout <server-url> <local-folder>

# Update repository
svn update

# Commit changes with message
svn commit -m '<message-content>'
```

* 3.2. Revert

```bash
# Revert file
svn revert <path-to-the-file>

# Revert directory
svn revert -R <path-to-the-directory>
```

* 3.3. Log

```bash
# Show log
svn log

# Show log for last n commits
svn log -l <number-of-commits>
```

[⬆ back to top](#table-of-contents)

## Composer

3.1. Misc

```bash
# Update composer version
composer self-update

# Update packages
composer update

# Install package
composer install <vendor/package-name>
```

[⬆ back to top](#table-of-contents)

## cURL

3.1. Misc

```bash
# Get page content
curl -I <url>

# Get page content and headers
curl -u <url>

# Download to file
curl -o <file> <url>

# Resume download
curl -L -O -C - <url>

# Display data in JSON for username and password
curl <url> \ -v -u <username>:<password> | json_pp

# Post JSON data
curl <url> \ -d '<json-data>' \ -H "Content-Type: application/json" -X POST \ -v -u {<username>}:{<password>}

# Get HTTP status code
curl -LI <url> -o /dev/null -w '%{http_code}\n' -s
```

[⬆ back to top](#table-of-contents)
