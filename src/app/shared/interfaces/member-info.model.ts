import { MemberStatus } from '../enums/members-status.enum';

export interface SidebarMemberInfo {
  name: string;
  picture: string;
  status: MemberStatus;
  isOnline: boolean;
}
