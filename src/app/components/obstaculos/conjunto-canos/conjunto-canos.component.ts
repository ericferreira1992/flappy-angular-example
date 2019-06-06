import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CanoComponent } from '../cano/cano.component';

@Component({
    selector: 'app-conjunto-canos',
    templateUrl: './conjunto-canos.component.html',
    styleUrls: ['./conjunto-canos.component.scss']
})
export class ConjuntoCanosComponent implements OnInit {

    @Input() public alturaTela: number = 0;
    @Input() public abertura: number = 0;
    @Input('x') public initialX: number = 0;

    @ViewChild('canoCima') public canoEmCima: CanoComponent;
    @ViewChild('canoBaixo') public canoEmBaixo: CanoComponent;

    public set X(value: number) {
        if (this.el)
            this.el.style.left = (value ? (value + 'px') : '');
    }
    public get X() {
        if (this.el)
            return parseInt(this.el.style.left.replace('px', ''));
        else
            return 0;
    }

    public get el() { return this.elRef ? this.elRef.nativeElement : null; }

    public get largura() { return this.el ? this.el.clientWidth : 0; }

    constructor(
        private elRef: ElementRef<HTMLElement>
    ) { }

    ngOnInit() {
        this.X = this.initialX;
        this.aberturaRandomica();
    }

    public aberturaRandomica(){
        const alturaCima = Math.floor(Math.random() * (this.alturaTela - this.abertura));
        const alturaBaixo = this.alturaTela - this.abertura - alturaCima;

        this.canoEmCima.altura = alturaCima;
        this.canoEmBaixo.altura = alturaBaixo;
    }
}
