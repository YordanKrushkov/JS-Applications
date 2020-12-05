const userModel = firebase.auth();
const database=firebase.firestore();


const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs');

    this.get('/home', function (context) {
    database.collection('offers').get()
    .then((res)=>{
        context.offers=res.docs.map((offer)=>{return {id:offer.id,...offer.data()}});
     
        extendContent(context)
        .then(function () {
            this.partial('./templates/home.hbs');
        })
    }).catch(error=>console.log(error))
      
    });

    this.get('/register', function (context) {
        extendContent(context)
            .then(function () {
                this.partial('./templates/register.hbs');
            })
    });

    this.post('/register', function (context) {
        const { email, password, rePassword } = context.params;

        if (password !== rePassword && password.length < 6) {
            return;
        }
        userModel.createUserWithEmailAndPassword(email, password)
            .then((userData) => {
                this.redirect('/login')
            })
            .catch((error) => console.log(error))
    })

    this.get('/login', function (context) {
        extendContent(context)
            .then(function () {
                this.partial('./templates/login.hbs');
            })

    });

    this.post('/login', function (context) {
        const { email, password } = context.params;

        userModel.signInWithEmailAndPassword(email, password)
            .then((userData) => {
                saveUserData(userData);
                this.redirect('/home')
            })
            .catch((error) => console.log(error))
    })

    this.get('/details/:id', function (context) {
        const {id}=context.params;
        
        database.collection('offers').doc(id).get()
        .then((res)=>{
            const actualOfferdata= res.data();
            const isCreator= actualOfferdata.creator ===getUserData().uid;

            context.offer={...actualOfferdata, isCreator, id}
            extendContent(context)
            .then(function () {
                this.partial('./templates/details.hbs')
            })
        })
    });

    this.get('/edit-offer/:id', function (context) {
    const {id}=context.params;
        extendContent(context)
            .then(function () {
                this.partial('./templates/editForm.hbs')
            })

    });

 
    this.get('/create-offer', function (context) {
        extendContent(context)
            .then(function () {
                this.partial('./templates/newOffer.hbs')
            })

    });
    this.post('/create-offer', function(context){
            const {name, price, imageUrl, discription, brand}=context.params;
            console.log(context.params);
            database.collection('offers').add({
                name,
                price,
                imageUrl,
                discription,
                brand,
                creator: getUserData().uid,
            })
            .then((createProduct)=>{
                console.log(createProduct);
                this.redirect('/home');
            })
            .catch((error)=>{console.log(error);})

    })

    this.get('/logout', function(context){
        userModel.signOut()
        .then(res=>{
        localStorage.removeItem('user');
        this.redirect('/home');
        })
        .catch((error)=>console.log(error))
    })

    this.get('/delete/:id', function(context){
        const {id}=context.params;
        database.collection('offers')
        .doc(id)
        .delete()
        .then(()=>{
            this.redirect('/home')
        })
    })

});


(() => {
    app.run('#/home');
})();

function extendContent(context) {
    const user = getUserData();
    context.isLoggedIn = Boolean(user);
    context.email = user ? user.email : '';
    return context.loadPartials({
        'header': './partials/header.hbs',
        'footer': './partials/footer.hbs'
    })
}

function saveUserData(data) {
    const { user: { email, uid } } = data;
    localStorage.setItem('user', JSON.stringify({ email, uid }))
}

function getUserData() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}