import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/services/contact.service';


@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  contactId = null;
  contactEdit = this.fb.group({
    _id: [null],
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params._id) {
        this.contactId = params._id;
        this.contactService.getContactById(params._id).subscribe((res) => {
          this.contactEdit.patchValue({
            name: res.name,
            email: res.email,
            phone: res.phone,
            _id: res._id,
          });
        });
      }
    });
  }
  onSubmit() {
    this.contactService.saveContact(this.contactEdit.value);
    this.router.navigate([`/Contact`]);
  }

  deleteContact() {
    if (this.contactId) {
      this.contactService.deleteContact(this.contactId);
    }
    // !this.contactId
      // ? this.router.navigate([`/Contact`])
      // : this.contactService.deleteContact(this.contactId);

    this.router.navigate([`/Contact`]);
  }
}
