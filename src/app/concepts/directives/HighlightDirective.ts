import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: "[highlightDirective]"
})
export class HighlightDirective {


    @HostBinding("style.background")
    bgColor = ""
    @HostBinding("style.border")
    border = ""

    @HostListener("mouseover")
    onMouseHover() {
        this.bgColor = "salmon"
        this.border = "2px solid black"
    }
    
    @HostListener("mouseleave")
    onMouseLeave(){
        this.bgColor = "transparent"
        this.border = "0px"

    }
}