# MySQL Query Helper
> Queries which might help with development

## Table of Contents

1. [AUTO_INCREMENT](#auto_increment)
1. [Safe Updates](#safe-updates)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

## AUTO_INCREMENT

View current `AUTO_INCREMENT` value for given *DatabaseName* and *TableName*

```mysql
SELECT `AUTO_INCREMENT`
FROM  INFORMATION_SCHEMA.TABLES
WHERE TABLE_SCHEMA = 'DatabaseName'
AND   TABLE_NAME   = 'TableName';
```

This is how to set `AUTO_INCREMENT` value for given *DatabaseName* and *TableName* to be *1000* (it can be any other number)

```mysql
ALTER TABLE `DatabaseName`.`TableName` AUTO_INCREMENT = 1000;
```

[⬆ back to top](#table-of-contents)

## Safe Updates

Disable safe updates so you can run `UPDATE` queries without primary key

```mysql
SET SQL_SAFE_UPDATES = 0;
```

To enble safe updates change integer value from `0` to `1`

[⬆ back to top](#table-of-contents)