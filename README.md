# Simple referrer
A lightweight website referrer tracker code written in javascript and php. Without any complex database connections.

### Requirements
- Webserver with PHP support

### How to use
Just copy the **saveref.php** and **doc_referrer.js** file to your server directory.

Include the **doc_referrer.js** in your website's pages:
```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js' type='text/javascript'></script>
<script src='doc_referrer.js' type='text/javascript'></script>
```

Call the function on body onload attribute:

```html
<body onload="getref()"></body>
```

###### Result
New file named **referrer.txt** will be created by the PHP script and appended with your site visitor refferer information:

Sample data on referrer.txt:
```
02:26:08pm 07-05-2016 : http://localhost/test.html
02:26:20pm 07-05-2016 : http://www.google.com/
```


### Contributing
Feel free to modify the code. Submit a new pull request to this repository.
