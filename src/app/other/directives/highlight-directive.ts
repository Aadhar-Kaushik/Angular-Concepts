import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:"[highlightDirective]"
})
export class HighlightDirective{
    
    @HostBinding("style.background")
    background:string

    @HostBinding("style.color")
    color:string

    @HostListener("mouseover")
    onMouseHover(){
        this.background="green"
        this.color="white"
    }

    @HostListener("mouseleave")
    onMouseLeave(){
        this.background="salmon"
        this.color="black"
    }
}