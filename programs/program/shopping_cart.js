const shoppingcart=[
  { "name": "Laptop", "price": 55000, "qty": 1 },
  { "name": "Mouse", "price": 500, "qty": 2 },
  { "name": "Shoes", "price": 1500, "qty": 1 },
  { "name": "T-Shirt", "price": 600, "qty": 3 },
  { "name": "Gaming Chair", "price": 7500, "qty": 1 }
]
const total=shoppingcart.reduce((acc,cur)=>(acc+cur.price*cur.qty),0)
console.log(total)