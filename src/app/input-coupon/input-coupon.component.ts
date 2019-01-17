import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms'

type Person = {
  firstName: string,
  lastName: string,
  phone: string,
  age: number,
  gender: string
};

@Component({
  selector: 'app-input-coupon',
  templateUrl: './input-coupon.component.html',
  styleUrls: ['./input-coupon.component.css']
})
export class InputCouponComponent implements OnInit {

  coupon: any;
  traveller: any;
  // additionalPassengerCount = 1;

  person: Person;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.coupon = this.fb.control(
        'Welcome Coupon'
      );

      this.traveller = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        phone: new FormControl(''),
        gender: new FormControl('male'),
        age: new FormControl(0),
      });

    this.traveller = this.fb.group({
      firstName: '',
      lastName: '',
      phone: '',
      gender: 'female',
      age: 0,
      additionalTravellers: this.fb.array([this.fb.control('')])
    });


    // this.coupon.valueChanges.subscribe(
    //   value => console.log("value as changed by the user", value)
    // );

    // this.traveller.valueChanges.subscribe(
    //   value => console.log("value as changed by the user", value)
    // );

    // setTimeout( () => {
    //   this.coupon.setValue("Coupon set by an event")
    // }, 3000);

    

  }

  get additionalTravellers(){
    return this.traveller.get('additionalTravellers') as FormArray;
  }

  changeHandler(){
   console.log("snapshot of coupon input, ", this.coupon.value);
  }

  formSubmitHandler(){
    this.person = this.traveller.value as Person
    console.log("Form values,", this.person);
  }

  addAdditionalTrav(){
    this.additionalTravellers.push(this.fb.control(''));
  }

  clearForm(){
     this.traveller.reset();
  }

}
