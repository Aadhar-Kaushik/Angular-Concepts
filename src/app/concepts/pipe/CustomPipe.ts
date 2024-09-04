import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "CustomPipe"
})
export class CustomPipeClass implements PipeTransform {
    prep = ["of", "from", "the", "a"]
    transform(value: any, ...args: any[]) {

        console.log(args)
        let ans = ""
        const valArr = value.split(" ")
        for (let i=0;i< valArr.length;i++) {
            if (i > 0 && this.prep.includes(valArr[i].toLowerCase())) {
                ans += valArr[i].toLowerCase()
            } else {
                ans += valArr[i].substring(0, 1).toUpperCase() + valArr[i].substring(1).toLowerCase()
            }
            ans += " "
        }

        return ans
    }
}