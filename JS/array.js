//declaring arrays
  var person = new Array("Hla", "Su", "Po");
  var one= person[0];
  document.write(one + "<br>");
  document.write(person.length + "<br>");

  person[1]= "Swe";
  var two = person[1];
  document.write(two + "<br>");

  var courses = new Array(3);
  courses[0] = "HTML";
  courses[1] = "CSS";
  courses[2] = "JS";
  document.write(courses[2] + "<br>");
  document.write(courses.length + "<br>");
  //array is a special type of obj thus it has length property, which counts the number of its elements!

  var drinks = ["Cola", "Sprite", "Lemon"];
  document.write(drinks[2]  + "<br>");
  document.write(drinks.length  + "<br>");
  document.write(drinks[7]  + "<br>"); //output -> undefined cuz empty value or array returns undefined

  var phones= [];
  phones[0] = "Sms";
  phones[1] = "Oppo";
  phones[2] = "Apple";
  phones[3] = "Mi";
  document.write(phones[2]  + "<br>");

  //combinig arrays, using concat method
   var one = [12, 13, 14];
   var two = [15, 16, 17];
   var combine = one.concat(two);
   document.write(combine.length  + "<br>");
   document.write(combine[4]  + "<br>");

   //Associated array
   //simply just put the strings instead of index numbers
   var person =[];
   person['name'] = "mgmg";
   person['age'] = "23";
   person['height'] = "6ft";
   person['hair'] = "brown";
   //this Associated array is treated as obj
   //and standard array methods won't work
   document.write(person.length  + "<br>"); //returns zero
   document.write(person.hair  + "<br>");  //different accessing ways
   document.write(person.name  + "<br>");
