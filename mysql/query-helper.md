# Query Helper
> Queries which might help with development

## Table of Contents

* [Auto Increment](#auto-increment)
* [Safe Updates](#safe-updates)
* [Show Create Table](#show-create-table)
* [Copy Table](#copy-table)
* [Date Interval](#date-interval)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

## Auto Increment

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

## Safe Updates

Disable safe updates so you can run `UPDATE` queries without primary key. 

```sql
SET SQL_SAFE_UPDATES = 0;
```

To enble safe updates change integer value from *0* to *1*. 

[⬆ back to top](#table-of-contents)

## Show Create Table

Displays table creation structure. Replace *TableName* with your value to get structure.

```sql
SHOW CREATE TABLE `TableName`;
```

[⬆ back to top](#table-of-contents)

## Copy Table

Creates exact copy of source to given destination.

```sql
CREATE TABLE `SourceDatabaseName`.`SourceTableName` SELECT * FROM `DestinationDatabaseName`.`DestinationTableName`;
```

[⬆ back to top](#table-of-contents)

## Date Interval

Get date in future since `start-date` for given interval `number` (1, 2, 3... n) and `type` (`DAY`, `WEEK`, `MONTH`, `YEAR`). 

```sql
SELECT DATE_ADD([start-date], INTERVAL [number] [type]) AS date_in_future;
```
An example for 10 days since current day:

```sql
SELECT DATE_ADD(CURDATE(), INTERVAL 10 DAY) AS ten_days_since_today;
```



[⬆ back to top](#table-of-contents)
