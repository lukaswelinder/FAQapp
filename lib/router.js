Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    // Home Route
    this.route('faq', {
        path: '/',
        template: 'faq'
    });
});
