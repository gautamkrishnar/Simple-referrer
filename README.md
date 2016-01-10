# Simple referrer
A lightweight website referrer tracker code written in javascript and php.

### Requirements
- Webserver with PHP support

### How to use
Just copy the **saveref.php** and **doc_referrer.js** file to your server directory.

Include the **doc_referrer.js** in your website's pages:
```html
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
Sun Jan 10 2016 21:53:05 GMT+0530 (India Standard Time) : https://www.google.co.in
Sun Jan 10 2016 21:54:13 GMT+0530 (India Standard Time) : https://www.facebook.com
```


### Contributing
Feel free to modify the code. Submit a new pull request to this repository.
