/* jshint esversion: 6*/



 const goat = {
   dietType: 'herbivore',
   makeSound() {
     console.log('baaa');
   },
   diet() {
     console.log(this.dietType);
   }
 };
 goat.diet();