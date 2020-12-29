import { Component, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	title = 'conmodo';
	users: any[] = [];
	posts: any[] = [];
	photo: any[] = [];

	// Class Initialization
	// First to run when program started
	constructor(private _http: HttpClient) {
	}

	// Starting point of the class
	ngOnInit(): void {
		this.getUsers();
		this.getPosts();
		this.getPhoto();
	}

	getUsers() {
		this._http.get(`${environment.api}${environment.efraim}`).subscribe(
			(data: any) => {
				this.users = data;
			}
		)
	}

	getPosts() {
		this._http.get(environment.posts).subscribe(
			(data: any) =>  {
				this.posts = data;
			}
		)
	}

	getPhoto() {
		this._http.get(`${environment.api}${environment.photos}`).subscribe(
			(data: any) => {
				this.photo = data;
			}
		)
	}
}
