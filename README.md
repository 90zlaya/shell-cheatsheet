# Shell Cheatsheet
> Commands for Unix shell terminal

## Table of Contents

1. [Linux](#linux)
1. [Git](#git)
1. [SVN](#svn)
1. [Composer](#composer)
1. [cURL](#curl)
1. [PHPUnit](#phpunit)
1. [npm](#npm)
1. [youtube-dl](#youtube-dl)
1. [apm](#apm)
1. [vue-cli](#vue-cli)

## Linux

1.1. Misc

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

1.2. Useful

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

# Remove repository
add-apt-repository -r ppa:<ppa-to-remove>
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
rm -d <directory-name>

# Confirm to remove
rm -i <filename>

# Remove all files with extension
rm -fv *.<extension>

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

1.6. Aliases

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

# Reset changes to the file
git checkout HEAD -- <filename>

# Restore changes to directory
git restore -s@ -SW  -- <directory>
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

# Reset changes to the specific commit
git reset --hard <commit-hash>
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

# Automatically remove unversioned files
svn cleanup --remove-unversioned

# Information about repository
svn info

# Merge to local branch from server
svn merge -r 10:HEAD <server-url>
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

## PHPUnit

6.1. Misc

```php
// Assert that variable is true with message
$this->assertTrue(true, 'This should already work.');

// Mark that test is not completed
$this->markTestIncomplete('This test has not been implemented yet.');

// Skip test
if (!extension_loaded('mysqli'))
{
    $this->markTestSkipped('The MySQLi extension is not available.');
}
```

6.2. Assertions

```php
$this->assertEquals($givenValue, $comparisonValue);
$this->assertNotEquals($givenValue, $comparisonValue);
$this->assertEmpty($givenValue);
$this->assertNotEmpty($givenValue);
$this->assertTrue($givenValue);
$this->assertFalse($givenValue);
$this->assertNotFalse($givenValue);
$this->assertArrayHasKey($givenArray['keyExample'], $comparisonArray);
$this->assertArrayNotHasKey($givenArray['keyExample'], $comparisonArray);
$this->assertInternalType($givenValue, $internalType); // string, array, int...
$this->assertContains($givenValue, $containsValue);
$this->expectException($exceptionType);
$this->expectOutputString($expectedOutputString);
```

[⬆ back to top](#table-of-contents)


## npm

7.1. Misc

```bash
# Where npm was installed
which npm

# Check the version
npm -v

# Updating npm globally
npm install npm@latest -g

# Searching for packages
npm search <package-name>

# Clean cached packages
npm cache clean --force

# Get details of node_modules directory
npm fund

# Compose security report
npm audit

# Fix security issues
npm audit fix
```

7.2. Install and Remove

```bash
# Listing packages
npm list

# List outdated packages
npm outdated

# Install package
npm install <package-name>

# Update package
npm update <package-name>

# Remove package
npm remove <package-name>

# Install specific version of a package
npm install <package-name>@<version>

# Remove extraneous packages
npm prune
```

[⬆ back to top](#table-of-contents)

## youtube-dl

8.1. Misc

```bash
# Download using cURL (install or update) and set permissions
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl

# Show version
youtube-dl --version

# Download playlist in mp3 format
youtube-dl -x --audio-format mp3 <playlist-url>
```

[⬆ back to top](#table-of-contents)

## apm

9.1. Misc

```bash
# List installed packages
apm list --installed

# Install package
apm install <package-name>

# Remove package
apm remove <package-name>
```

[⬆ back to top](#table-of-contents)

## vue-cli

10.1. Misc

```bash
# Install globally
npm install -g @vue/cli

# Start UI
vue ui
```

[⬆ back to top](#table-of-contents)
