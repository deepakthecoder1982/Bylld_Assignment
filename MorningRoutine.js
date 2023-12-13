'use strict';

class Student {

  constructor() {
    this.minutesLeft = 60;
  }

  digest() {
    console.log('digesting...');
    this.catchBus();
  }

  eat() {
    console.log('eating...');
    this.minutesLeft = this.minutesLeft- 30;
    this.digest();
  }

  catchBus() {
    console.log(`walking to the bus with ${ this.minutesLeft } minutes left`);
    this.minutesLeft = 0;
  }

  showerAndBrushTeeth() {
    console.log('walking downstairs');
    this.minutesLeft -= 30;
  }

  wakeUp() {
    console.log('waking up...');
  }
}


morningRoutine();

function morningRoutine() {
  const student = new Student();
  student.wakeUp();
  student.showerAndBrushTeeth();
  const actionToTake = student.minutesLeft >= 30 ? student.eat : student.catchBus;

  actionToTake.call(student);

}