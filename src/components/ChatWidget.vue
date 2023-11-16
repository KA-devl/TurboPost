<template>





</template>

<script>
export default {
    methods: {
    },
    mounted (){
        (function(d, m){
        var kommunicateSettings = 
            {"appId":"12a01ee0ddb6db9cc18156c3a3617a241","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    },
    data: function(){
    }
}
</script>