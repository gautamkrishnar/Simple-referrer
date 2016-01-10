# Simple referrer
A lightweight website referrer tracker code written in javascript and php.

### Requirements
- Webserver with PHP support

### How to use
Just copy the **saveref.php** file to your server directory.

Include the **doc_referrer.js** in your website's pages:
```html
<script src='doc_referrer.js' type='text/javascript'></script>
```

Call the function on body onload attribute:

```html
<body onload="getref()"></body>
```
### Contributing
Feel free to modify the code. Submit a new pull request to this repository.
