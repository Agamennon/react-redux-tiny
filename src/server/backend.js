
var users = {
    guilherme:'123',
    leonardo:'456'
};


var data = 230;


export default function backend (app){


    app.post('/api/login',(req,res)=>{
      var {username,password} = req.body;
        if ((users[username]) && (users[username] === password)){
            req.session.user = username;
            res.json({status:'success'});
        }else{
            res.json({status:'failure'})
        }

    });

    app.post('/api/data2',function(req,res){
        console.log('DATA 2 REQUESTED! -------------------------------------------------------------------');
        setTimeout(function(){
            console.log('DATA 2 BACKEND -------------------------------------------------------------------');
            res.json({data:'yeeyeyy'});
        },0) ;
    });

    app.post('/api/data',function(req,res){
        data = data - 20;
        if (data < 0) data = 230;
        setTimeout(function(){
            res.json({data:data});
        },100+data) ;
    });

    app.post('/api/logout',function(req,res){
        delete req.session.user;
        res.json(req.session.user);
    });



}
