const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
//basically this keyword used to refferece current context
console.log(this);//empty

//<<--------------------------- arrow --------------------------------->>
const ex1 = () => ({username: "shiva"})
console.log(ex1());//print {username:'shiva'}
const addArrow = (a, b) => a + b; 
