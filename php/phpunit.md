# PHPUnit
> The PHP Testing Framework

Read more about [PHPUnit](https://phpunit.de/).

## Table of Contents

1. [Misc](#misc)
1. [Assertions](#assertions)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

1. ### Misc

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

[⬆ back to top](#table-of-contents)

2. ### Assertions

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