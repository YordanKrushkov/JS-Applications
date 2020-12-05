const app = Sammy('#root', function(){

    this.use('Handlebars', 'hbs');
    this.get('/home', function(context){
        extendContent(context)
        .then(function(){
            this.partial('./templates/homeGuest.hbs');
        })
    });
    //User Register
    this.get('/register',function(context){
        extendContent(context)
        .then(function(){
            this.partial('./templates/register.hbs');
        })
    });
    //User Login
    this.get('/login',function(context){
        extendContent(context)
        .then(function(){
            this.partial('./templates/login.hbs');
        })

    });
    //Details
    this.get('/details',function(context){

        extendContent(context)
        .then(function(){
            this.partial('./templates/details.hbs')
        })
        
    });
    //edit
    this.get('/edit-offer',function(context){

        extendContent(context)
        .then(function(){
            this.partial('./templates/editForm.hbs')
        })
        
    });
    // New Offer
    this.get('/create-offer',function(context){
        extendContent(context)
        .then(function(){
            this.partial('./templates/newOffer.hbs')
        })
       
    });
});


(()=>{
    app.run('#/home');
})();

function extendContent(context){
  return  context.loadPartials({
        'header':'./partials/header.hbs',
        'footer': './partials/footer.hbs'
    })
}