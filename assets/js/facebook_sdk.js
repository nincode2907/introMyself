window.fbAsyncInit = function () {
    FB.init({
        appId: "613470326886516",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v14.0",
    });
};
FB.api("/me", "GET", { fields: "id,name" }, function (response) {
    console.log(response.id);
});
