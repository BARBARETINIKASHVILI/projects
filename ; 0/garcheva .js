1
// JavaScript is a scripting or programming language that allows you to implement complex 
//features on web pages — every time a web page does more than just sit there and display 
//static information for you to look at — displaying timely content updates, interactive maps, 
//animated 2D/3D graphics, scrolling video jukeboxes, 

2
// html-ის დოკუმენტში JavaScript-ის კოდი რომ დავწეროთ საჭიროა ის კოდი მოვაქციოთ <script> and </script>

3
//src
//The src attribute specifies the URL of an external script file. If you want to run the same JavaScript on
//several pages in a web site, you should create an external JavaScript file, instead of writing the same script over and over again.
//src ატრიბუტი განსაზღვრავს გარე სკრიპტის ფაილის URL-ს. თუ გსურთ ერთი და იგივე JavaScript-ის გაშვება რამდენიმე გვერდზე ვებსაიტზე, 
//თქვენ უნდა შექმნათ გარე JavaScript ფაილი, იმის ნაცვლად, რომ დაწეროთ ერთი და იგივე სკრიპტი განმეორებით.


4
// script
// In JavaScript, a script refers to a series of instructions or commands 
// that are written in the JavaScript programming language. These scripts are typically
// embedded within an HTML document and are used to add interactivity, dynamic behavior,
// and functionality to web pages.

5
// <p id=demo></p>
// Here in your code demo is id where you want to display your result after click event has occur and just nothing. 

6
//document.getElementById("demo").innerHTML = "Hello JavaScript!";
// document.getElementById()
// returns an Element object representing the element whose id property matches the specified string

7
//oncklick
// onclick მოვლენა ჩვეულებრივ ხდება, როდესაც მომხმარებელი დააწკაპუნებს ელემენტზე. ის საშუალებას აძლევს პროგრამისტსშეასრულოს
// JavaScript-ის ფუნქცია,როდესაც ელემენტზე დაწკაპუნება ხდება. ეს ღონისძიება შეიძლება გამოყენებულ იქნას ფორმის, გამაფრთხილებელი 
// შეტყობინებების და მრავალი სხვა დასადასტურებლად.

8
//style.display(გამოსახე)
//This property is used to set or return the display type of a specified element. 
//In case you are dealing with a block element, you can also use the float property to change its display type.
//ეს თვისება გამოიყენება მითითებული ელემენტის ჩვენების ტიპის დასადგენად ან დასაბრუნებლად. თუ თქვენ გაქვთ საქმე ბლოკის ელემენტთან,
// ასევე შეგიძლიათ გამოიყენოთ float თვისება, რომ შეცვალოთ მისი ჩვენების ტიპ.

//<p id="demo" style="display:none">Hello JavaScript!</p>
//ეს კოდი თავიდან წარწერას (Hello JavaScript!) არ აჩვენებს რადგან გაწერილი აქვს style="display : none"
//<button type="button" onclick="document.getElementById('demo').style.display='block'">Click Me!</button>
//ხოლო როცა Click Me!-ს დავაჭერთ მაშინ წარწერა გამოჩნდება onclick="document.getElementById('demo').style.display='block' 
//რადგან გაწერილი აქვს ეს ფუნქცია

9
//output
//JavaScript Output defines the ways to display the output of a given code. The output can be displayed by using
// different approaches which are listed below: Table of Content. Using innerHTML. Using document.write()
//JavaScript Output განსაზღვრავს მოცემული კოდის გამოსავლის ჩვენების გზებს. გამომავალი შეიძლება იყოს ნაჩვენები სხვადასხვა
// მიდგომების გამოყენებით, რომლებიც ჩამოთვლილია ქვემოთ: სარჩევი. innerHTML-ის გამოყენება. document.write() გამოყენებით

10
//alert
//ალერტი გამაფრთხილებელი ფუნქცია

11
//
//


//proeqti
//<p>JavaScript can change HTML attribute values.</p>

//<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

//<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>
//
//<img id="myImage" src="pic_bulboff.gif" style="width:100px">

//<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>
