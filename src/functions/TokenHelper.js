  import axios from "axios";
  
  export default class TokenHelper{

        // Checks from backend wheter given token belongs to a user
         static authenticateCustomerToken = function(token){
            let isValid = false;
            console.log(token)
            let config =  { headers: {"Authorization" : `Bearer ${token}`}}
            
            axios.get('https://voulutora-backend.herokuapp.com/customer/authenticate', config)
            .then(response => {


                    isValid = true;
                    console.log("Customer token is valid = " + isValid)
                    return isValid;



            })
            .catch(err => {
                console.log(err)
                console.log("Customer token is valid = " + isValid)
                return false;
            }
            );
           
            
        }

        // Checks from backend wheter given token belongs to a manager
        static authenticateManagerToken(){
                //TODO
                console.log("'authenticateManagerToken' has not been implemented yet")
        }
    }
