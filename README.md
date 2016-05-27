#Angular LinkedIn Button Directive



#Usage
1. Add reference to `angular-directive-linkedin.js` file.
2. Open `angular-directive-linkedin.js` file.  Modify `angular.module('{your module name}')...` module name.
3. Add `<div linkedin-sign-in callback="linkedInCallBack" apiKey="{Your LinkedIn API Key}"></div>` to your app.



#Example
html
```html
<div linkedin-sign-in callback="linkedInCallBack" apiKey="{Your LinkedIn API Key}"></div>
```
Javascript to handle sign in call back
```html
$scope.linkedInCallBack = function(data) {
        // code here
        console.log(data);
};
```
