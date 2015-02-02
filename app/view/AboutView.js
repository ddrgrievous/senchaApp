Ext.define('MyApp.view.AboutView', {
    extend: 'Ext.Container',
    id: 'aboutMe',
    html: '<h1 style="font-size:20">Jared Wrathall</h1><br> <img src = "data:image/jpeg;base64,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"> </img> <br>I am from Buford Georgia.  I am a CIT major and I have about a year left of school at BYU-I <br>                  I enjoy playing soccer, board games, watching movies with my wife and going scuba diving <br> I served my mission in the Idaho Pocatello mission',
    listeners: {
        element: 'element',
        doubletap: function(e, t) {
            Ext.Msg.alert('itemdoubletap');
        } // itemdoubletap
    }
});