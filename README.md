# shell-cheatsheet
> Commands for Unix shell terminal

## Navigation

1. [Linux]
2. [Git]
3. [Composer]

## Linux

### apt

```bash
# Install app
apt install <app-name>

# Update
apt update

# List upgradable files
apt list -u

# Upgrade
apt upgrade
```

### Misc

```bash
# Search packages
apt-cache search <package-name>

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
```

### Useful

```bash
# Install & run OS configuration tools
apt-get install dconf-tools
dconf-editor

# Apache server log location
/var/log/apache2/error.log
```

## Git

### Commits

```bash
# Get last n commits
git log -n <number-of-commits>

# Get last n commits in one line
git log -n <number-of-commits> --oneline

# Get last n commits by author
git log -n <number-of-commits> --author=<author-name>
```

### Tags

```bash
# Delete a local tag
git tag -d <tag-name>

# Remove tags remotely
git push origin :refs/tags/<tag-name>
```

### Misc

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

## Composer

### Misc

```bash
# Update composer version
composer self-update

# Update packages
composer update

# Install package
composer install <vendor/package-name>
```

[Linux]: README.md#linux
[Git]: README.md#git
[Composer]: README.md#composer
