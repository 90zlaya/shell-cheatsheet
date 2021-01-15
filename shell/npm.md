# NPM
> Default package manager for the JavaScript runtime environment Node.js

Read more about [NPM](https://www.npmjs.com/).

## Table of Contents

* [Misc](#misc)
* [Install and Remove](#install-and-remove)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

## Misc

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

[⬆ back to top](#table-of-contents)

## Install and Remove

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
