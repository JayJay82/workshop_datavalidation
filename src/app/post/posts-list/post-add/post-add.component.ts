import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Post } from '../model/post.model';
import { PostService } from '../service/post.service';
import {MatSnackBar} from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})

export class PostAddComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  title =new FormControl('', [
    Validators.required,
    Validators.maxLength(90),
  ]);
  body = new FormControl('', [
    Validators.required,
    Validators.maxLength(300),
  ]);
  formValidation : FormGroup = new FormGroup({
    title : this.title,
    body : this.body
  })
  constructor(private postService : PostService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    
  }

  addPost() {
     const currentPost = new Post(null,1,this.title.value,this.body.value);
     this.postService.addPost(currentPost).subscribe(res => {
             this.snackBar.open("Post Added","close")
             .afterDismissed()
             .subscribe(res => {
                 console.log("dismissed");
             });
     });;
  }

}
