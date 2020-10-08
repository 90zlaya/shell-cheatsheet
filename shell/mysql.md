# MySQL
> Relational database management system

Read more about [MySQL](https://www.mysql.com/).

## Table of Contents

1. [Misc](#misc)
1. [Databases](#databases)
1. [Tables](#tables)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

## Misc

```bash
# Login
mysql -u <username> -p;

# Get helper
help;

# Get status information from the server
status;

# Logout
exit;
```

[⬆ back to top](#table-of-contents)

## Databases

```bash
# Show all databases
show databases;

# Create new database
create database <database-name>;

# Select database
use <database-name>;

# Get used database name
select database();

# Export database dump (logged out from mysql)
mysqldump -u <username> -p <database-name> > <file-name>.sql;

# Delete database
drop database <database-name>;
```

[⬆ back to top](#table-of-contents)

## Tables

```bash
# Show all tables
show tables;

# Show table structure
describe <table-name>;
```

[⬆ back to top](#table-of-contents)