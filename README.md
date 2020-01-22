# Shell Cheatsheet
> Commands for Unix shell terminal

## Table of Contents

1. [Linux](#linux)
1. [Git](#git)
1. [SVN](#svn)
1. [Composer](#composer)
1. [cURL](#curl)

## Linux

1.1. Misc

```bash
# Switch to superuser in terminal
sudo su

# Get list of all processes for app name
ps -ef | grep <app-name>

# Kill all processes by given name
killall <process_name>
```

1.2. Useful

```bash
# Install & run OS configuration tools
apt-get install dconf-tools
dconf-editor

# Apache server log location
/var/log/apache2/error.log
```

1.3. apt

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

1.4. Directory

```bash
# List current path
pwd

# List directory content
ls

# Enter directory
cd <directory-name>

# Create new directory
mkdir <directory-name>

# Move directory
mv <directory-name>

# Remove directory
rm <directory-name>
```

1.5. File

```bash
# Create shortcut
ln -s <destination-file> <destination-shortcut>

# Extract tar file
tar -vxjf <filename>

# Read file live
tail -f <filename>
```

[⬆ back to top](#table-of-contents)

## Git

2.1. Misc

```bash
# Get verion of Git
git version

# Set credentials for repository
git config credential.helper store

# Clone to repository
git clone <repository-url>

# Get differences between files
git diff --staged
```

2.2. Commits

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
```

2.3. Tags

```bash
# Delete a local tag
git tag -d <tag-name>

# Remove tags remotely
git push origin :refs/tags/<tag-name>

# Tags to branches
git checkout tags/<tag-name> -b <branch-name>
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
```

2.5. Users

```bash
# Get global user
git config --global --list

# Set global user
git config --global user.name  "<username>"
git config --global user.email "<email>"
```

2.6. Remote

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

## SVN

3.1. Misc

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

3.2. Revert

```bash
# Revert file
svn revert <path-to-the-file>

# Revert directory
svn revert -R <path-to-the-directory>
```

3.3. Log

```bash
# Show log
svn log

# Show log for last n commits
svn log -l <number-of-commits>
```

[⬆ back to top](#table-of-contents)

## Composer

4.1. Misc

```bash
# Initialize composer
composer init

# Install package
composer install <vendor/package-name>

# Remove package
composer remove <vendor/package-name>

# Update packages
composer update

# Update composer autoload file
composer dump-autoload
```

4.2. Version

```bash
# Get installed version
composer -v

# Update installed version
composer self-update
```

[⬆ back to top](#table-of-contents)

## cURL

5.1. Misc

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
