import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidation {

    static ShouldNotContainSpace(input: AbstractControl): ValidationErrors | null {
        if (input.value.includes(" ")) {
            return {
                containsSpace: true
            }
        }
        return null
    }

    static isUnique(input: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((res, rej) => {
            setTimeout(() => {

                if (input.value === "Aadhar") {
                    res({
                        isNotUnique: true
                    })
                }
                res(null)
            }, 2000);


        })
    }
}