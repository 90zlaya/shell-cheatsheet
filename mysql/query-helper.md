# MySQL Query Helper
> Queries which might help with development

## Table of Contents

1. [Auto Increment](#auto-increment)
1. [Safe Updates](#safe-updates)
1. [Show Create Table](#show-create-table)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

1. ### Auto Increment

View current `AUTO_INCREMENT` value for given *DatabaseName* and *TableName*. 

```sql
SELECT `AUTO_INCREMENT`
FROM  INFORMATION_SCHEMA.TABLES
WHERE TABLE_SCHEMA = 'DatabaseName'
AND   TABLE_NAME   = 'TableName';
```

This is how to set `AUTO_INCREMENT` value for given *DatabaseName* and *TableName* to be *1000* (it can be any other number). 

```sql
ALTER TABLE `DatabaseName`.`TableName` AUTO_INCREMENT = 1000;
```

[⬆ back to top](#table-of-contents)

2. ### Safe Updates

Disable safe updates so you can run `UPDATE` queries without primary key. 

```sql
SET SQL_SAFE_UPDATES = 0;
```

To enble safe updates change integer value from *0* to *1*. 

[⬆ back to top](#table-of-contents)

3. ### Show Create Table

Displays table creation structure. Replace *TableName* with your value to get structure.

```sql
SHOW CREATE TABLE `TableName`;
```

[⬆ back to top](#table-of-contents)