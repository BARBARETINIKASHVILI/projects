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
// console.log
// console.log ადვილად რომ ავხსნათ არის პრინტის მსგავსი. მას გამოაქვს ის რასაც ჩავწერთ ("")
// მაგალითად console.log("world") ამ შედეგს ვნახულობთ ბრაუზერში გახსნის შემდეგ Inspect და console


6
//math
//ის საშუალებას გაძლევთ შეასრულოთ სხვადასხვა მათემატიკური ოპერაციები, როგორიცაა
// გამოთვლები, რიცხვების დამრგვალება, შემთხვევითი რიცხვების გენერირება და ა.შ.

//მაგ :Math.round(x) returns the value of x rounded to its nearest integer: მაგალითად Math.raund(1.6) ეს დააბრუნებს 2-ს
//მაგ Math.ceil() rounds a number up to its nearest integer : მაგალითად Math.ceil(4.4) დააბრუნებს 5-ს
//მაგ Math.floor(x) returns the value of x rounded down to its nearest integer: მაგალიტად Math.floor(2.7) დააბრუნებს 2-ს
//მაგ Math.trunc(x) returns the integer part of x: მაგალითად Math.trunc(2.1) გამოიტანს 2-ს
//მაგ Math.sign(x) returns if x is negative, null or positive: მაგალითად Math.sign(2) დააბრუნებს 2-ს
//მაგ Math.pow(x,y) returns the value of x to the power of y: მაგალითად Math.pow(2, 5) დამიბრუნებს 4-ს


7
//filter
//filter() ფუნქცია JavaScript-ში არის კიდევ ერთი ჩაშენებული მეთოდი მასივებისთვის. 
//ის ქმნის ახალ მასივს ყველა ელემენტით, რომელიც გაივლის მოცემული ფუნქციის მიერ განხორციელებულ ტესტს.
//




8
//variable
// ჯავასკრიპტში ცვლადი შეგვიძლია ორი ხერხის საშუალებით შევქმნათ ერთი არის ძველი მეთოდი რასაც ადრე იყენებდენ "var"
// ხოლო ახალი რასაც ხშირად გამოიყენებენ არის let
// let name = 'barbare' ჩვენ ასევე შეგვიძლია სტრინგი ავღნიშნოთ "" და ''
// ამას აქვს რამოდნეიმე წესი ჩვენ არ შეგვიძლია ცვლადი დავიწყთ ციფრით
// ასევე ჩვენ არ გამოვიყენებთ ცვლად შორის გამოტოვებას ან უბრალოდ ხაზს (-,_)
// ჩვენ შგვიძ₾ია დავწეროთ აი ასე let firstName = 'barbare' ამას ეწოდება camel notation


9
//const 
// const ის საშუალებით ჩვენ შეგვიძლია შევქმნათ ცვლადი მაგრამ ცვლადზე მინიჭებული მნიშვნელობის შეცვლა არარ შგვეძლება
// მაგ  let firstName = 3
//      firstName = 10
//      consle.log(firstName) ეს შეცვლის სამის მაგივრად ათს ჩასვავს 
// მაგ2
//     const firstName = 3
//     firstName = 10
//     console.log(firstName) ეს კი დატოვებს სამს და არ შეცვლის უბრალდ ერორი იქნება

10
//Array
//მასივები
//იგივეა რაც პითონში ლისთები


11
//map()
//JavaScript-ში map() არის Array ობიექტის მეთოდი. ის ქმნის ახალ მასივს ორიგინალური 
//მასივის ყველა ელემენტზე ფუნქციის გამოძახებით და შედეგების ახალ მასივში შენახვით. 
//map() აბრუნებს ახალ მასივს და ორიგინალური მასივი უცვლელია.