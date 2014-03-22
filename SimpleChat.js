function Chat(){

    this.peer = undefined;
    this.conn = undefined;
    this.id = undefined;

    this.init = function(){
        console.log("Inside Init");
        this.peer = new Peer({key: 'lwjd5qra8257b9'});
        this.peer.on('open', function(id){
            console.log('Peer ID = ' + id);
            this.id = id;
        });

        /**
        this.peer.on('connection', function(conn){
            this.conn = conn;
            console.log("Connection established");
            conn.on('open', function(){
                conn.on('data', receiveMsg(msg));
            });
        });
        */
        console.log("Exiting Init");
    }

    this.getId = function(){
        console.log("Inside getId");
        this.peer.on('open', function(id){
            console.log('Peer ID = ' + id);
            this.id = id;
        });
    }

    this.connectTo = function(id){
        this.conn = this.peer.connect(id);
        //Add conn.on('open') here
    }

    this.sendMsg = function(str){
        if(this.conn !== undefined){
            this.conn.send(str);
        }
    }

    this.receiveMsg = function(str){
        console.log(str);
    }

}

var myChat = new Chat();

