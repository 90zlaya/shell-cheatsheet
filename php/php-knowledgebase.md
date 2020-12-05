# PHP Knowledgebase
> Important points about PHP

## Table of Contents

1. [Functions](#functions)
1. [Variables](#variables)
1. [Questions and Answers](#questions-and-answers)
1. [Differences in PHP](#differences-in-php)
1. [Resources](#resources)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

[⬆ back to top](#table-of-contents)

1. ### Functions

Function | Explanation
-------- | -----------
| `file_get_contents` | Reads entire file into a string
| `func_num_args` | Returns the number of arguments passed to the function
| `htmlentities` | Convert all applicable characters to HTML entities
| `htmlspecialchars` | Convert special characters to HTML entities
| `strip_tags` | Strip HTML and PHP tags from a string
| `session_start` | Start new or resume existing session
| `session_unset` | Free all session variables
| `urlencode` | URL-encodes string

[⬆ back to top](#table-of-contents)

2. ### Variables

Variables | Explanation
-------- | -----------
| `$_SERVER` | Server and execution environment information
| `$GLOBALS` | References all variables available in global scope

[⬆ back to top](#table-of-contents)

3. ### Questions and Answers

Question | Answer
-------- | --------
| What does PHP stands for? | PHP abreviates from *Hypertext Preprocessor*.
| What does PSR stands for? | PSR from *PHP Standards Recommendations*.
| What are three classes of errors? | Three classes of errors are: *notices*, *warnings* and *fatal errors*.
| What is session? | Session is a logical object enabling us to preserve temporary data across multiple *PHP* pages. Default session time is until closing the browser. 
| Does PHP support multiple inheritance? | No, PHP supports only single inheritance. 
| What's the difference between an argument and a parameter? | A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters.
| What is abstract class? | An abstract class is a class that contains at least one abstract method, which is a method without any actual code in it, just the name and the parameters, and that has been marked as "abstract".
| What is the purpose of abstract classes? | The purpose of this is to provide a kind of template to inherit from and to force the inheriting class to implement the abstract methods.
| Does abstract class supports multiple inheritance? | Abstract class can extend another abstract class, it can provide the implementation of interface, but it doesn't support multiple inheritance.
| What is the difference between `require()` and `include()`? | The `require()` function is identical to `include()`, except that it handles errors differently. If an error occurs, the `include()` function generates a warning, but the script will continue execution. The `require()` generates a fatal error and the script will stop. 
| What is the difference between `require_once()` and `include_once()`? | The `require_once()` statement is identical to `require()` except PHP will check if the file has already been included, and if so, not include (require) it again.
| What will be result of following code `$i=016; echo $i/2;`? | Result will be 7 because leading zero of variable indicates octal number, and `016` in octal is `14` in decimal.
| What is `trait` in PHP? | Trait is class-like non-instantiable mechanism that allows creation of reusable code.
| What are class constants? | Class constant is variable declared inside a class with the `const` keyword. It's useful if you need to define some constant data within a class. Once declared, it cannot be changed. Class constants are case-sensitive, but it's recommended to name the constants in all uppercase letters. Class constant can be accessed from outside the class by using the class name followed by the scope resolution operator `::` followed by the constant name. 
| What is intent of dependency injection technique? | The intent behind dependency injection is to achieve separation of concerns of construction and use of objects. This can increase readability and code reuse.
| What is singleton in PHP? | A singleton is a particular kind of class that can be instantiated only once. It simply means that if an object of that class was already instantiated, the system will return it instead of creating new one. This pattern is used when common instance is needed or because instantiating a 'copy' of an already existent object is useles. Concidered as bad practice by some developers. 
| What is recursive function? | Recursive function is a function that calls itself. It has condition known as *base case* which tells our recursive call when to stop, otherwise it will loop infinitely. 
| What is PDO? | The PHP Data Objects (PDO) is an extension that defines a lightweight, consistent interface for accessing databases in PHP. PDO provide methods for prepared statements and working with objects. Using prepared statements will help with protection from SQL injection.
| How is the keyword `finally` meant to be used in PHP? | Regardless of errors, exceptions or even `return` statements, the `finally` block of code will run. It will not run if the `try` or `catch` blocks execute `die` or `exit`.

[⬆ back to top](#table-of-contents)

4. ### Differences in PHP

* Interface vs Abstract class

Interface | Abstract class
-------------- | ---------
| Supports multiple inheritance | Does not support multiple inheritance
| Not containing data member | Contains data member
| Not containing constructor | Contains constructor
| Contains only incomplete member (signature of member) | Contains both incomplete (abstract) and complete member
| Cannot have access modifiers, by default everything is assumed as public | Can contain access modifiers

[⬆ back to top](#table-of-contents)

5. ### Resources

Name  | URL
------------- | -------------
PSR-12: Extended Coding Style  | https://www.php-fig.org/psr/psr-12/
Design Patterns PHP | https://designpatternsphp.readthedocs.io/en/latest/README.html

[⬆ back to top](#table-of-contents)
