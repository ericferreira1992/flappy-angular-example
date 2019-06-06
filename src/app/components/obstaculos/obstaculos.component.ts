import { Component, OnInit, Input, EventEmitter, Output, ViewChildren, QueryList } from '@angular/core';
import { ConjuntoCanosComponent } from './conjunto-canos/conjunto-canos.component';

@Component({
    selector: 'app-obstaculos',
    templateUrl: './obstaculos.component.html',
    styleUrls: ['./obstaculos.component.scss']
})
export class ObstaculosComponent implements OnInit {

    @ViewChildren(ConjuntoCanosComponent) private queryConjuntoCanos: QueryList<ConjuntoCanosComponent>;

    @Input() alturaTela: number = 0;
    @Input() larguraTela: number = 0;
    @Input() abertura: number = 0;
    @Input() espaco: number = 0;
    @Input() deslocamento: number = 0;

    @Output() notificarPonto = new EventEmitter();

    public get pares() { return this.queryConjuntoCanos ? this.queryConjuntoCanos.toArray() : []; }

    constructor() {
    }

    ngOnInit() {
    }

    animar() {
        for (let par of this.pares) {
            // configura a posicao x do obstaculo para a posicao onde ele se encontra menos um deslocamento
            par.X = (par.X - this.deslocamento);

            // quando o obstaculo sair pelo lado esquerdo da tela (posicao 0)
            if (par.X < -par.largura) {
                par.X = par.X + (this.espaco * this.pares.length);
                par.aberturaRandomica();
            }

            const meio = this.larguraTela / 2;
            const cruzouMeioTela = par.X + this.deslocamento >= meio && par.X < meio;

            if (cruzouMeioTela)
                this.notificarPonto.emit();
        }
    }
}
