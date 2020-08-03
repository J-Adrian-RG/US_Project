import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header-m',
  templateUrl: './header-m.component.html',
  styleUrls: ['./header-m.component.scss'],
})
export class HeaderMComponent implements OnInit {

  constructor() { }

  @Input() Titulo: string;

  ngOnInit() {}

}
