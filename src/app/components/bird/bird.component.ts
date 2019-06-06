import { Component, OnInit, Renderer2, OnDestroy, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'app-bird',
    templateUrl: './bird.component.html',
    styleUrls: ['./bird.component.scss']
})
export class BirdComponent implements OnInit, OnDestroy {

    @Input() public alturaTela: number;
    @Input() public larguraTela: number;

    public voando: boolean = false;

    private listenKeyDown: any;
    private listenKeyUp: any;

    public set Y(value: number) {
        if (this.el)
            this.el.style.top = (value ? (value + 'px') : '');
    }
    public get Y() {
        if (this.el)
            return parseInt(this.el.style.top.replace('px', ''));
        else
            return 0;
    }

    public get el() { return this.elRef ? this.elRef.nativeElement : null; }

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef<HTMLElement>
    ) {
        this.listenKeyDown = this.renderer.listen(window, 'keydown', (e) => this.voando = true);
        this.listenKeyUp = this.renderer.listen(window, 'keyup', (e) => this.voando = false);
    }

    ngOnInit() {
        this.Y = this.alturaTela / 2;
    }

    public animar(){
        if (this.el) {
            const novoY = this.Y + (this.voando ? -8 : 5);
            const alturaMaxima = this.alturaTela - this.el.clientHeight;

            if (novoY <= 0)
                this.Y = 0;
            else if (novoY >= alturaMaxima)
                this.Y = alturaMaxima;
            else
                this.Y = novoY;
        }
    }

    ngOnDestroy() {
        if (this.listenKeyDown) this.listenKeyDown();
        if (this.listenKeyUp) this.listenKeyUp();
    }
}
