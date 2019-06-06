import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-progresso',
    templateUrl: './progresso.component.html',
    styleUrls: ['./progresso.component.scss']
})
export class ProgressoComponent implements OnInit {

    @Input() public pontos = 0;

    constructor() { }

    ngOnInit() {
    }
}
