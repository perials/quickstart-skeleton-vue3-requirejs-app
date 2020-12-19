window.requireContext = require.config({
    // context is added to avoid conflict in case of multiple requirejs instances
    context: "flow",

    // bump this for every new release to avoid caching
    urlArgs: "v=1.0.0",

    waitSeconds: 0,

    // path (url) to js directory
    baseUrl: "/quickstart-skeleton-vue3-requirejs-app/js",

    paths: {
        // when using relative paths it will be relative to baseUrl above
        vue: "https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.2/vue.global.prod"
    }
});

window.requireContext(["app", "vue"], function(app) {
    // note that Vue is registered globally since we are using global build of Vue
    Vue.createApp(app).mount("#app");
})