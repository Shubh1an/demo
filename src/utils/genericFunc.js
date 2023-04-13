import Users from "../db.json"
import { Roles } from "./RolesEnum"
export const getUser=(username)=>{
    console.log("Genric username --> ", username);
    let {users}= Users
if(username){
  let found_user = users.find(user=>user?.username===username)
  return found_user
}
else{
    console.log("else",users.find(user=>user?.role===Roles?.User))
    return users.find(user=>user?.role===Roles?.User)
}
}