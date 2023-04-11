import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "customPipe"
})
export class CustomPipe implements PipeTransform {
    prep = ["of", "the", "is", "an", "a", "in"]
    transform(value: string, ...aa) {
        console.log(aa)
        let result = ""
        value.split(" ").forEach((x,i)=>{
            if(!this.prep.includes(x.toLowerCase()) || i===0){

                x= x.substring(0, 1).toUpperCase() + x.substring(1, x.length).toLowerCase()
            }
                result+=" "+x
            
        })
    
        return result
    }

} 