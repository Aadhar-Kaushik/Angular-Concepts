import { ValidationErrors } from "@angular/forms";

export  class CustomValidator implements ValidationErrors{

    static containsSpace(params:any):ValidationErrors|null {
        if((params.value).includes(" ")){
            return {
                space:true
            }
        }
        return null
    }

    static isNotUnique(params:any):Promise<ValidationErrors|null> {
        return new Promise((res,rej)=>{
            setTimeout(() => {
                if(params.value!=="Aadhar"){
                    res({
                        unique:false
                    })
                }
                res(null)
            }, 1000);
        })
       
    }
}