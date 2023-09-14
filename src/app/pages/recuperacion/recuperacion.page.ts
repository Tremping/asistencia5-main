import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailComposerOptions, EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {

  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private emailComposer: EmailComposer ) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit():void{
    console.log('Form ->');
  }

  initForm(): FormGroup{
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async correo() {
    const email: EmailComposerOptions = {
      to: 'max@mustermann.de',
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',      
    };
    await this.emailComposer.open(email);
  }

}
