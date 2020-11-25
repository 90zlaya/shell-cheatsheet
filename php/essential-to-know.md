# Essential to know about PHP
> Important points about PHP


## Table of Contents

1. [Definitions](#definitions)
1. [OOP](#oop)
1. [Trait](#trait)
1. [Functions](#functions)
1. [Variables](#variables)
1. [Code](#code)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

1. ### Definitions

* PHP abreviates from *Hypertext Preprocessor*
* PEAR stand for *PHP Extension & Application Repository*
* PSR abreviates from *PHP Standards Recommendations*
* Three classes of errors are: *notices*, *warnings* and *fatal errors*
* Session is a logical object enabling us to preserve temporary data across multiple *PHP* pages
* Default session time is until closing the browser
* Outputing anything to the browser before modifying *HTTP* headers will produce warning

[⬆ back to top](#table-of-contents)

2. ### OOP

* OOP support introduced in *PHP 5*
* PHP supports only single inheritance
* Keyword `final` means that the class cannot be extended, method can't be overwritten
* Parent constructors are called explicitly

[⬆ back to top](#table-of-contents)

3. ### Trait

* Use traits as mechanism that allows creation of reusable code
* Trait is non-instatiable

[⬆ back to top](#table-of-contents)

4. ### Functions

* `htmlspecialchars()` or `urlencode()` are used when passing values trough form or URL
* `echo` & `print` are used to display string
* `file_get_contents()` is used for reading and storing strings in a file
* `addslashes()` is used to escape data before storage, `stripslashes()` is used to remove escape characters before apostrophes in a string
* `strip_tags()` removes *HTML* tags
* `func_num_args()` to give the number of parameters passed into a function
* `__sleep()` returns array of all variables that need to be saved, `__wakeup()` retrieves them
* When `require()` fails, it throws fatal error; when `include()` fails, it throws warning
* `session_start()` is used to initiate session, `session_write_close()` is used to end session
* `session_unregister()` is used to unregister a global variable from the current session, `session_unset()` frees all session variables
* `intval()` is used to convert value to integer instead of `(int) $variableName`
* `strval()` is used to convert value to string instead of `(string) $variableName`

[⬆ back to top](#table-of-contents)

5. ### Variables

* `$_SERVER['REMOTE_ADDR']` is used to get the *IP* address of end user
* `$GLOBALS` is associative array including references to all variables which are currently defined in global scope of the script

[⬆ back to top](#table-of-contents)

6. ### Code

* Result of following code `$i=016; echo $i/2;` will be 7 because leading zero of variable indicates octal number, and `016` in octal is `14` in decimal

[⬆ back to top](#table-of-contents)
