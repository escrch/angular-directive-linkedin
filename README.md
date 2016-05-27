#Angular LinkedIn Button Sign In Directive

A simple Angular directive for LinkedIn sign-in.


#Usage
1. Add reference to `angular-directive-linkedin.js` file.
2. Add `directive-linkedin` as a dependency to your app.
3. Add `<div ng-app="directive-linkedin"><div linkedin-sign-in callback="linkedInCallBack" apiKey="{Your LinkedIn API Key}"></div></div>` to your app.



#Example
HTML
```html
<div ng-app="directive-linkedin">
        <div linkedin-sign-in callback="linkedInCallBack" apiKey="{Your LinkedIn API Key}"></div>
</div>
```
Javascript to handle sign in call back
```html
$scope.linkedInCallBack = function(data) {
        // code here
        // parameter returns your profile data
        console.log(data);
};
```
