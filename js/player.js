class Player{
    constructor(){

    }

    getCount(){
        var getplayercount = database.ref("playercount");
        getplayercount.on("value", function(data){
            playerCount= data.val();
        });
    }

    updateCount(nplaycount){
        database.ref('/').update({
            playercount: nplaycount
        });
    }

    update(myname){

        var playerIndex = 'players/player' + playerCount;
        database.ref(playerIndex).set({
            name : myname
        })
        
    }
}