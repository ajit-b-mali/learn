# HTTP

- using package HTTPIE.io

```bash
http get http://localhost:8000/index.php

# index.php is the default file
http get http://localhost:8000/

# get is defalt method
http http://localhost:8000/

# http protocol is default
http localhost:8000/

# to send intger as integer, not string :=
http post localhost:8000/products id:=123 name="Product A"
```

- status code: 200 OK
- 500 Internal Server Error
- 405 Method Not Allowed

- response header
- response body

- curl only show body by default
- httpie show both header and body

```http
HTTP/1.1 200 OK
Connection: close
Content-Type: application/json; charset=UTF-8
Date: Sun, 28 Dec 2025 11:15:12 GMT
Host: localhost:8000
X-Powered-By: PHP/8.2.12
```
