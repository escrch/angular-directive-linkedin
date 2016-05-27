#Angular LinkedIn Button Directive


#Install

#Example
html
```html
<div linkedin-sign-in callback="linkedInCallBack" apiKey="{Your LinkedIn API Key}"></div>
```
javascript
```html
$scope.linkedInCallBack = function(data){
        console.log(data);
    };
```
