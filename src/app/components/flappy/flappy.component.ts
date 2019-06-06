import { Component, OnInit, ViewChild } from '@angular/core';
import { ProgressoComponent } from '../progresso/progresso.component';
import { ObstaculosComponent } from '../obstaculos/obstaculos.component';
import { BirdComponent } from '../bird/bird.component';

@Component({
	selector: 'app-flappy',
	templateUrl: './flappy.component.html',
	styleUrls: ['./flappy.component.scss']
})
export class FlappyComponent implements OnInit {

	@ViewChild(ProgressoComponent) public progresso: ProgressoComponent;
	@ViewChild(ObstaculosComponent) public obstaculos: ObstaculosComponent;
	@ViewChild(BirdComponent) public bird: BirdComponent;

	public velocidadeDoJogo: number = 40;
	public pontos: number = 0;

    public altura: number = 700;
	public largura: number = 1200;

    public abertura: number = 200;
    public espaco: number = 400;
	public deslocamento: number = 3;

	public state: STATE = STATE.NONE;
	private temporizador: any;

	public STATE = STATE;

	public get running() { return this.state !== STATE.NONE; }

	constructor() {
	}

	ngOnInit() {
		this.start();
	}

    private start(){
		this.state = STATE.STARTED;
		this.temporizador = setInterval(() => {
			if (this.obstaculos)
				this.obstaculos.animar();
			if (this.bird)
				this.bird.animar();

			if (this.ocorreuColisao())
				this.stop();
        }, this.velocidadeDoJogo);
	}

	private stop() {
		clearInterval(this.temporizador);
		this.state = STATE.STOPPED;
	}

	public notificarPonto() {
		this.pontos++;
	}

	private ocorreuColisao() {

		if (this.bird && this.bird.el) {
			for (let par of this.obstaculos.pares) {
				const elCanoEmCima = par.canoEmCima.el;
				const elCanoEmBaixo = par.canoEmBaixo.el;

				if (this.estaoSobrepostos(this.bird.el, elCanoEmCima) || this.estaoSobrepostos(this.bird.el, elCanoEmBaixo))
					return true;
			}
		}
		return false;
	}

	private estaoSobrepostos(elemento01, elemento02) {
		const areaElemento01 = elemento01.getBoundingClientRect();
		const areaElemento02 = elemento02.getBoundingClientRect();

		// Sobreposição Horizontal
		const larguraElemento01 = areaElemento01.width;
		const larguraElemento02 = areaElemento02.width;

		const posicaoLadoEsquerdoElemento01 = areaElemento01.left;
		const posicaoLadoEsquerdoElemento02 = areaElemento02.left;

		const posicaoLadoDireitoElemento01 = posicaoLadoEsquerdoElemento01 + larguraElemento01;
		const posicaoLadoDireitoElemento02 = posicaoLadoEsquerdoElemento02 + larguraElemento02;

		const sobreposicaoHorizontal = posicaoLadoDireitoElemento01 >= posicaoLadoEsquerdoElemento02 &&
										posicaoLadoDireitoElemento02 >= posicaoLadoEsquerdoElemento01;

		// Colisão Vertical
		const alturaElemento01 = areaElemento01.height;
		const alturaElemento02 = areaElemento02.height;

		const posicaoCimaElemento01 = areaElemento01.top;
		const posicaoCimaElemento02 = areaElemento02.top;

		const posicaoBaixoElemento01 = posicaoCimaElemento01 + alturaElemento01;
		const posicaoBaixoElemento02 = posicaoCimaElemento02 + alturaElemento02;

		const sobreposicaoVertical = posicaoBaixoElemento01 >= posicaoCimaElemento02 &&
										posicaoBaixoElemento02 >= posicaoCimaElemento01;

		return sobreposicaoHorizontal && sobreposicaoVertical;
	}

}

export enum STATE {
	NONE = 'NONE',
	STARTED = 'STARTED',
	STOPPED = 'STOPPED'
}
