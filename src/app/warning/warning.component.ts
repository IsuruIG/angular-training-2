import { Component } from '@angular/core';


@Component({
	selector: 'app-warning',
	template: `
		<p>This is a Warning! </p>
		<app-success></app-success>
	`,
	styles: [`
		p{
			padding: 20px;
			background-color: mistyrose;
			border: 1px solid red;
			color: red;
		}
	`]
})
export class WarningComponent {
	
}