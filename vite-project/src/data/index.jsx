export const Users = [
    {
        email: "xyz",
        password: "xyz",
    },
    {
        email: "abc",
        password: "abc",
    },
    {
        email: "pqr",
        password: "pqr",
    }
]

export const Login = (email,password) => {
    return Users.find((user) => {
        if(user.email == email && user.password == password){
            return true
        }else{
            return false;
        }
    })
}