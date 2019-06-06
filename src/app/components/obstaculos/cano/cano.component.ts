import { Component, OnInit, ElementRef, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'app-cano',
    templateUrl: './cano.component.html',
    styleUrls: ['./cano.component.scss']
})
export class CanoComponent implements OnInit {
    @HostBinding('class.baixo') private get baixo(){ return this.invertido; }
    @HostBinding('class.cima') private get cima(){ return !this.invertido; }

    @Input() public invertido: boolean = null;

    public get altura() { return this.el ? this.el.clientHeight : 0; }
    public set altura(value: number) {
        if (this.el)
            this.el.style.height = value + 'px';
    }

    public get el() { return this.elRef ? this.elRef.nativeElement : null; }

    constructor(
        private elRef: ElementRef<HTMLElement>
    ) { }

    ngOnInit() {
    }

}
