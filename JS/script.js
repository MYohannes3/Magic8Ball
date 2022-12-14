


let answers = [ 'IMG/b15.jpg',
  'IMG/b1.jpg', 'IMG/b2.jpg',
  'IMG/b3.jpg', 'IMG/b4.jpg',
  'IMG/b5.jpg', 'IMG/b6.jpg',
  'IMG/b7.jpg', 'IMG/b8.jpg',
  'IMG/b9.jpg', 'IMG/b10.jpg',
  'IMG/b11.jpg', 'IMG/b12.jpg',
  'IMG/b13.jpg', 'IMG/b14.jpg',
];

function Ask() {
  let replaceby = Math.floor(Math.random() * answers.length);
  

   if (question.value.length > 1) {
    document.getElementById("eightball").src = answers[replaceby]
    src = answers[replaceby];

  } else { //if (question.value.length < 1) {
   alert('please Enter a question to ');
   }
}