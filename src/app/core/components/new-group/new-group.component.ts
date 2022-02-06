import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FilePondOptions } from 'filepond';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss'],
})
export class NewGroupComponent implements OnInit {
  @Input() public showNewGroupModal = false;

  @Output() public showNewGroupModalChange = new EventEmitter<boolean>();
  public groupPrivacy: string;
  public groupForm: FormGroup;
  public page = 1;

  public pondOptions: FilePondOptions = {
    allowMultiple: false,
    labelIdle: 'Drop files here...',
  };

  constructor(private formBuilder: FormBuilder) {
    this.groupForm = this.formBuilder.group({
      name: new FormControl(''),
      description: new FormControl(''),
      categories: new FormControl(),
      privacyMode: new FormControl('public'),
      password: new FormControl(),
      password2: new FormControl(),
      socialLinks: new FormArray([new FormControl()]),
      groupLink: new FormControl(),
      groupPicture: new FormControl(),
    });
  }

  ngOnInit() {}

  public showNextPage(): void {
    this.page++;
  }

  public get socialLinks(): FormArray {
    return this.groupForm.get('socialLinks') as FormArray;
  }

  public showPreviousPage(): void {
    this.page--;
  }

  public closeModal(): void {
    this.page = 1;
    this.showNewGroupModal = false;
    this.showNewGroupModalChange.emit(this.showNewGroupModal);
  }

  public createGroup(): void {
    console.log('create group');
  }

  public addNewLink(): void {
    this.socialLinks.push(new FormControl());
  }

  public pondHandleInit() {
    console.log('FilePond has initialised');
  }

  public pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }

  public pondHandleActivateFile(event: any) {
    console.log('A file was activated', event);
  }
}
