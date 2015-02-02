Ext.define('MyApp.profile.Phone', {
    extend: 'Ext.app.Profile',

    views: [
        'Main',
        'VideoView'
    ],

    isActive: function() {
        return Ext.os.is('Phone');
    },

    launch: function() {

        Ext.Viewport.add(Ext.create('MyApp.view.Phone.Main'));
    }

});