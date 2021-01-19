# cURL
> Command line tool and library for transferring data with URLs

Read more about [cURL](https://curl.haxx.se/).

## Table of Contents

* [Misc](#misc)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

## Misc

```bash
# Get page content
curl -I [url]

# Get page content and headers
curl -u [url]

# Download to file
curl -o [file] [url]

# Resume download
curl -L -O -C - [url]

# Display data in JSON for username and password
curl [url] \ -v -u [username]:[password] | json_pp

# Post JSON data
curl [url] \ -d "[json-data]" \ -H "Content-Type: application/json" -X POST \ -v -u {[username]}:{[password]}

# Get HTTP status code
curl -LI [url] -o /dev/null -w "%{http_code}\n" -s
```

[⬆ back to top](#table-of-contents)
