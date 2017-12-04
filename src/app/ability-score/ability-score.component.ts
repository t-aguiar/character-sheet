import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-ability-score',
    templateUrl: './ability-score.component.html',
    styleUrls: ['./ability-score.component.css']
})
export class AbilityScoreComponent implements OnInit {
    score: number;
    tempScore: number;

    constructor() {
        this.score = 10;
    }

    ngOnInit() {
    }

    currentModifier() {
        var score = (!isNaN(this.tempScore)) ? this.tempScore : this.score;

        return this.calculateModifier(score);
    }

    modifier() {
        return this.calculateModifier(this.score);
    }

    tempModifier() {
        return this.calculateModifier(this.tempScore);
    }

    calculateModifier(score: number) {
        return Math.floor((score - 10) / 2);
    }
}
