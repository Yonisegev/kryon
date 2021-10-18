import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { fibonacci } from '../../fibonacci'

@Component({
  selector: 'user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent implements OnInit {

  constructor() { }

  @Input() user: User | undefined
  ngOnInit(): void {
  }

  get userFiboAge() {
    if (this.user) {
      return fibonacci(this.user.age)
    } else return ''
  }

}
