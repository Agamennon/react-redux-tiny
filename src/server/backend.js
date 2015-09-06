
var users = {
    redux:'tinyrouter'
};

export default function backend (app){


    app.post('/api/login',(req,res)=>{

      var {username,password} = req.body;
        if ((users[username]) && (users[username] === password)){
            req.session.user = username;
            res.json({status:'success',name:'redux'});
        }else{
            res.status(401).send({status:'failure,does not match'});
        }
    });

    app.post('/api/data',function(req,res){

        setTimeout(function(){
        res.json({data:'some data from the server'});
        },2000) ;
    });



    app.post('/api/logout',function(req,res){
        delete req.session.user;
        res.json(req.session.user);
    });



}
