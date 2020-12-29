import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  @Input() title: string = "";
	@Input() photo: string = "";

	constructor() { }

	ngOnInit(): void {
	}
}
