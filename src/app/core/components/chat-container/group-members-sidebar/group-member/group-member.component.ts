import { Component, Input, OnInit } from '@angular/core';
import { SidebarMemberInfo } from 'src/app/shared/interfaces/member-info.model';

@Component({
  selector: 'app-group-member',
  templateUrl: './group-member.component.html',
  styleUrls: ['./group-member.component.scss'],
})
export class GroupMemberComponent implements OnInit {
  @Input() memberInfo: SidebarMemberInfo;
  constructor() {}

  ngOnInit() {}
}
