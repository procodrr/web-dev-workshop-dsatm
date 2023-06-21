const myName = 'Anruag'
const myAge = 25

const user1 = {
    name: 'Ram', 
    age: 20,
    pata: {
        city: 'Bangalore',
        pincode: '677868'
    }
}
//No Copy
//const user2 = user1 

// Shallow Copy
// const user2 = {...user1}

// Deep Copy
const user2 = structuredClone(user1)