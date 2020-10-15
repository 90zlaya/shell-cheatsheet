# Linux
> Family of open source Unix-like operating systems based on the Linux kernel

Read more about [Linux](https://www.linux.org/).

## Table of Contents

1. [Misc](#misc)
1. [Useful](#useful)
1. [apt](#apt)
1. [Directory](#directory)
1. [File](#file)
1. [Aliases](#aliases)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

1. ### Misc

```bash
# Switch to superuser in terminal
sudo su

# Get list of all processes for app name
ps -ef | grep <app-name>

# Kill all processes by given name
killall <process_name>

# Get computer's hostname
hostname -I

# Clear swap space
swapoff -a && swapon -a

# Runs a sound test with static bouncing back and forth
speaker-test --channels 2 --rate 48000 --device hw:0,3
```

[⬆ back to top](#table-of-contents)

2. ### Useful

```bash
# Install & run OS configuration tools
apt-get install dconf-tools
dconf-editor

# Apache server log location
/var/log/apache2/error.log

# List of apt sources
nano /etc/apt/sources.list

# Go to folder with crash reports
cd /var/crash

# Install & run to list folder tree
apt-get install tree
tree
```

[⬆ back to top](#table-of-contents)

3. ### apt

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

# Remove repository
add-apt-repository -r ppa:<ppa-to-remove>
```

[⬆ back to top](#table-of-contents)

4. ### Directory

```bash
# List current path
pwd

# List directory content
ls

# Enter directory
cd <directory-name>

# Create new directory
mkdir <directory-name>

# Copy directory
cp -R <source-directory>  <destination-directory>

# Move directory
mv <directory-name>

# Remove directory
rm -d <directory-name>

# Confirm to remove
rm -i <filename>

# Remove all files with extension
rm -fv *.<extension>
```

[⬆ back to top](#table-of-contents)

5. ### File

```bash
# Create shortcut
ln -s <destination-file> <destination-shortcut>

# Extract tar file
tar -vxjf <filename>

# Read file live
tail -f <filename>

# Copy file
cp <source-filename> <location-filename>
```

[⬆ back to top](#table-of-contents)

6. ### Aliases

```bash
# List of aliases
vim ~/.bashrc

# Create alias
alias <alias-name>="<command>"

# Remove alias
unalias <alias-name>

# Force list of aliases to reload in current session
source ~/.bashrc
```

[⬆ back to top](#table-of-contents)