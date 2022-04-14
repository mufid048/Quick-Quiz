var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mufid@mysql048",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
var easy =0;
var medium = 0;
var hard=0;
var que={
  question:"What is your subject?",
  c1:"DSA",
  c2:"DBMS",
  c3:"WT",
  c4:"COM",
  difficulty:"easy",
  topic:"a"
}
function quiz(){
  que.question="Which of the following is not a keyword";
  que.c1='int';
  que.c2='switch';
  que.c3='abc';
  que.c4='float';
  que.difficulty='easy';
  que.topic='c'

  document.getElementById('question').innerHTML=que.question;
  document.getElementById('c1').innerHTML=que.c1;
  document.getElementById('c2').innerHTML=que.c2;
  document.getElementById('c3').innerHTML=que.c3;
  document.getElementById('c4').innerHTML=que.c4;

  switch(que.difficulty){
    case 'hard':
      hard++;
      break;
    case 'medium':
      medium++;
      break;
    case 'easy':
      easy++;
      break;
  }
}