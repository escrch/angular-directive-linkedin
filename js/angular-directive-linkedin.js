'use strict';

angular.module('directive-linkedin', [])
    .directive('linkedinSignIn', function() {
        return {
            restricted: 'AE',
            template: '<script type="in/Login"></script>',
            link: function (scope, element, attrs, ctrl, linker) {
                console.log(attrs);
                if (attrs.callback == null || attrs.callback == "") {
                    throw "You must provide 'callBack' attribute on the scope.";
                }
                if (attrs.apikey == null || attrs.apikey == "") {
                    throw "You must provide a LinkedIn API key.";
                }
                
                // get api key from attributes
                var api_key = attrs.apikey;
                
                window.onLinkedInLoad = function() {
                    IN.Event.on(IN, "auth", onLinkedInAuth);
                };
                
                var sdkLoaded = false;
                if (!sdkLoaded) {
                    $.getScript("//platform.linkedin.com/in.js?async=true", function success() {
                        IN.init({
                            onLoad: "onLinkedInLoad",
                            api_key: api_key,
                            credentials_cookie: true
                        });
                    });
                    
                    sdkLoaded = true;
                }
                
                function onLinkedInAuth() {
                    IN.API.Profile("me").result(function(profiles) {
                        if (profiles != null && profiles.values[0] != null) {
                            var member = profiles.values[0];
                            var id = member.id;
                            var firstName = member.firstName; 
                            var lastName = member.lastName; 
                            var photo = member.pictureUrl; 
                            var headline = member.headline; 
                        
                            //use information captured above and bind to callback function
                            var data = profiles.values[0];
                            scope.$apply(scope[attrs.callback](data));
                        }
                    });
                }
                
            },
        }
});
