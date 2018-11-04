$(document).ready(function(){ 

   var userFeed = new Instafeed({
        get: 'user',
        userId: '8798287512',
        accessToken: '8798287512.1677ed0.a1028aad84e44495903272238f5d8510'
    });
    userFeed.run();

});