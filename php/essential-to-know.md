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

## Definitions

1. PHP abreviates from *Hypertext Preprocessor*
1. PEAR stand for *PHP Extension & Application Repository*
1. PSR abreviates from *PHP Standards Recommendations*
1. Three classes of errors are: *notices*, *warnings* and *fatal errors*
1. Session is a logical object enabling us to preserve temporary data across multiple *PHP* pages
1. Default session time is until closing the browser
1. Outputing anything to the browser before modifying *HTTP* headers will produce warning

[⬆ back to top](#table-of-contents)

## OOP

1. OOP support introduced in *PHP 5*
1. PHP supports only single inheritance
1. Keyword `final` means that the class cannot be extended, method can't be overwritten
1. Parent constructors are called explicitly

[⬆ back to top](#table-of-contents)

## Trait


1. Use traits as mechanism that allows creation of reusable code
1. Trait is non-instatiable

[⬆ back to top](#table-of-contents)

## Functions

1. `htmlspecialchars()` or `urlencode()` are used when passing values trough form or URL
1. `echo` & `print` are used to display string
1. `file_get_contents()` is used for reading and storing strings in a file
1. `addslashes()` is used to escape data before storage, `stripslashes()` is used to remove escape characters before apostrophes in a string
1. `strip_tags()` removes *HTML* tags
1. `func_num_args()` to give the number of parameters passed into a function
1. `__sleep()` returns array of all variables that need to be saved, `__wakeup()` retrieves them
1. When `require()` fails, it throws fatal error; when `include()` fails, it throws warning
1. `session_start()` is used to initiate session, `session_write_close()` is used to end session
1. `session_unregister()` is used to unregister a global variable from the current session, `session_unset()` frees all session variables

[⬆ back to top](#table-of-contents)

## Variables

1. `$_SERVER['REMOTE_ADDR']` is used to get the *IP* address of end user
1. `$GLOBALS` is associative array including references to all variables which are currently defined in global scope of the script

[⬆ back to top](#table-of-contents)

## Code

1. Result of following code `$i=016; echo $i/2;` will be 7 because leading zero of variable indicates octal number, and `016` in octal is `14` in decimal

[⬆ back to top](#table-of-contents)
