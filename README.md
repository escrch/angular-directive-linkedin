#Angular LinkedIn Button Directive



#Install
Reference the javascript library file.
```html
<script src="{Your Location}/angular-directive-linkedin.js"></script>
```
Open the library file and modify the angular module name to whatever you called yours
```html
angular.module('{Your Module Name}')...
```

#Example
html
```html
<div linkedin-sign-in callback="linkedInCallBack" apiKey="{Your LinkedIn API Key}"></div>
```
javascript
```html
$scope.linkedInCallBack = function(data) {
        // code here
        console.log(data);
};
```
