# Composer
> A Dependency Manager for PHP

Read more about [Composer](https://getcomposer.org/).

## Table of Contents

* [Misc](#misc)
* [Version](#version)
* [Packages](#packages)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

## Misc

```bash
# Initialize composer
composer init

# Lists all available commands
composer list

# Update packages
composer update

# Update composer autoload file
composer dump-autoload

# Open the pacakges' repository URL or homepage in browser
composer browse

# Clear composer's internal package cache
composer clear-cache

# Creates new project from a package into given directory
composer create-project

# Shows information about packages
composer info

# Shows a list of installed packages that have updates available
composer outdated

# Searches for packages
composer search

# Validates a composer.json and composer.lock
composer validate

# Executes a vendored binary/script (same as bash <script>)
composer exec <script>
```

[⬆ back to top](#table-of-contents)

## Version

```bash
# Get installed version
composer -v

# Update installed version
composer self-update
```

[⬆ back to top](#table-of-contents)

## Packages

```bash
# Install package
composer install <vendor/package-name>

# Remove package
composer remove <vendor/package-name>

# Shows which pacages cause the given package to be installed
composer depends <vendor/package-name>
```

[⬆ back to top](#table-of-contents)
