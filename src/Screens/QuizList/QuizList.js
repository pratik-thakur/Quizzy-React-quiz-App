import React, { Component } from "react";
import MCQs from "../MCQs/MCQs";
import coverPic1 from "../../images/quiz.jpg";
import coverPic2 from "../../images/test.png";

class QuizList extends Component {
  constructor() {
    super();
    this.state = {
      quiz_list: [
        { quizName: "Cryptography & Network Security", tests: 2 },
        { quizName: "HTML", tests: 2 },
        { quizName: "CSS", tests: 1 },
        { quizName: "JAVASCRIPT", tests: 3 }
      ],
      quiz_info: [
        {
          quizName:"Cryptography & Network Security",
          tests:[
            {
              name: "Test 1",
              questions: 10,
              time: 600,
              quiz_questions: [
                {
                  quiz: "Which is not an objective of network security?",
                    option1: "Identification",
                    option2: "Authentication",
                    option3: "Access Control",
                    option4: "Locking ",
                    answer: "4"
                
                },
                
                {
                  quiz: "In a _____________ attack, the extra data that holds some specific instructions in the memory for actions is projected by a cyber-criminal or penetration tester to crack the system.",
                    option1: "Phishing",
                    option2: "MiTM",
                    option3: "Buffer-Overflow",
                    option4: "Clickjacking",
                    answer: "3"
                
                },
                
                {
                  quiz: "Which of the following is not a vulnerability of the application layer??",
                    option1: "Application design bugs may bypass security controls",
                    option2: "Logical bugs in programs may be by chance or on purpose be used for crashing programs",
                  option3: "Overloading of transport-layer mechanisms",
                    option4: "Inadequate security controls force “all-or-nothing” approach",
                    answer: "3"
                },
                
                {
                  quiz: "A computer ________ is a malicious code which self-replicates by copying itself to other programs.",
                    option1: "Program",
                    option2: "Virus",
                  option3: "Application",
                    option4: "Worm",
                    answer: "2"
                },
                
                {
                  quiz: "What does Light Directory Access Protocol (LDAP) doesn’t store?",
                    option1: "Users",
                    option2: "Address",
                  option3: "Passwords",
                    option4: "Security Keys",
                    answer: "4"
                },
                
                {
                  quiz: "What forces the user to change password at first login?",
                    option1: "Default behavior of OS",
                    option2: "Part of AES encryption practice",
                  option3: "Devices being accessed forces the user",
                    option4: "Account administrator",
                    answer: "4"
                },
                
                {
                    quiz: "______ are difficult to identify as they keep on changing their type and signature.",
                    option1: "Non-resident virus",
                    option2: "Boot Sector Virus",
                    option3: "Polymorphic Virus",
                    option4: "Multipartite Virus",
                    answer: "2"
                },
                
                {
                                  quiz: "_____ is also known as cavity virus.",
                                  option1: "Non-resident virus",
                                  option2: "Space-filler Virus",
                                  option3: "Overwrite Virus",
                                  option4: "Polymorphic Virus",
                                  answer: "2"
                },
                        
                {
                                  quiz: "he ……….. is code that recognizes some special sequence of input or is triggered by being run from a certain user ID of by unlikely a sequence of events.",
                                  option1: "Trap doors",
                                  option2: "Trojan horse",
                                  option3: "Logic Bomb",
                                  option4: "Virus",
                                  answer: "3"
                },
                
                {
                                  quiz: "What should you do to keep unauthorized users from changing your home router settings?",
                                  option1: "Change the firewall settings on your computer. ",
                                  option2: "Change the default administrator password and SSID.",
                                  option3: "Change the MAC address of the router.",
                                  option4: "Nothing.",
                                  answer: "2"
                },
                
                
              ]
            },
            {
              name: "Test 2",
              questions: 10,
              time: 1200,
              quiz_questions: [
                {
                  quiz: "Which WiFi Security is impossible to crack?",
                  option1: "WEP ",
                  option2: "WPA",
                  option3: "MAC Filtering",
                  option4: "None of above",
                  answer: "2"
},

{
                  quiz: "What is not a best practice for password policy?",
                  option1: "Deciding maximum age of password",
                  option2: "Restriction on password reuse and history",
                  option3: "Password encryption",
                  option4: "None of above",
                  answer: "3"
},

{
                  quiz: "Which of the following is not a type of virus?",
                  option1: "Boot Sector",
                  option2: "Polymorphic",
                  option3: "Multipartite",
                  option4: "Trojans",
                  answer: "4"
},

{
                  quiz: "	Wi-fi is the trademark for — ",
                  option1: "IEEE 802.11 ",
                  option2: "IEEE 803.11x",
                  option3: "IEEE 802.11x",
                  option4: "None of above",
                  answer: "3"
},

{
                  quiz: "_______________ infects the master boot record and it is challenging and a complex task to remove this virus.",
                  option1: "Boot sector virus",
                  option2: "Polymorphic",
                  option3: "Multipartite",
                  option4: "Trojans",
                  answer: "1"
},

{
                  quiz: "	The digital channel means that channel —- ",
                  option1: "is digitized ",
                  option2: "is carrying digital data",
                  option3: "accepts digital modulation techniques",
                  option4: "None of above",
                  answer: "2"
},

{
                  quiz: "Applications developed by programming languages like ____ and ______ have this common buffer-overflow error.",
                  option1: "C, Ruby",
                  option2: "Python, Ruby",
                  option3: "C, C++",
                  option4: "None of above",
                  answer: "3"
},

{
                  quiz: "	Coaxial cables can be used for ____ ",
                  option1: "Telephone networks only  ",
                  option2: "Cable TV networks only",
                  option3: "Both telephone and cable TV networks",
                  option4: "None of above",
                  answer: "2"
},

{
                  quiz: "	____ is to protect data and passwords. ",
                  option1: " Encryption",
                  option2: "Authentication",
                  option3: "Authorization",
                  option4: "Non Repudiation",
                  answer: "1"
},

{
	quiz: "What forces the user to change password at first login?",
    option1: "Default behavior of OS",
    option2: "Part of AES encryption practice",
	option3: "Devices being accessed forces the user",
    option4: "Account administrator",
    answer: "4"
}
                
              ]
            }
          ]
        },
        {
          quizName: "HTML",
          tests: [
            {
              name: "Test 1",
              questions: 5,
              time: 60,
              quiz_questions: [
                {
                  quiz: "What is abbreviation of HTML?",
                  option1: "Hyper Type Multi Language",
                  option2: "Higher Text Multiple Language",
                  option3: "Hyper Text Markup Language",
                  option4: "Hollow Type Markup Language ",
                  answer: "3"
                },
                {
                  quiz: "How many types of markup in HTML?",
                  option1: "Both",
                  option2: "1 - opening and closing markup only",
                  option3: "1 - self closing markups only",
                  option4: "None of above",
                  answer: "1"
                },
                {
                  quiz: "<iframe> is HTML5 markup",
                  option1: "False",
                  option2: "True",
                  option3: "Neither true nor false",
                  option4: "Not Sure",
                  answer: "2"
                },
                {
                  quiz: "<div> and <span> are inline elements?",
                  option1: "True",
                  option2: "False",
                  option3: "Neither True nor false",
                  option4: "None of above",
                  answer: "3"
                },
                {
                  quiz: "HTML must need body markup. Why? Because:",
                  option1: "It did'nt needs to show the markups inside it.",
                  option2: "It needs to show the markups inside it.",
                  option3: "It needs <head> element",
                  option4: "None of above",
                  answer: "2"
                }
              ]
            },
            {
              name: "Test 2",
              questions: 10,
              time: 120,
              quiz_questions: [
                {
                  quiz:
                    "The external JavaScript file must contain the <script> tag.",
                  option1: "True",
                  option2: "False",
                  option3: "Neither true nor false",
                  option4: "None of above",
                  answer: "1"
                },
                {
                  quiz:
                    "Choose the correct HTML element for the largest heading:",
                  option1: "<h6>",
                  option2: "<heading>",
                  option3: "<h1>",
                  option4: "<head>",
                  answer: "3"
                },
                {
                  quiz:
                    "What is the correct HTML element for inserting a line break?",
                  option1: "<break>",
                  option2: "<br>",
                  option3: "<lnbr>",
                  option4: "none of above",
                  answer: "2"
                },
                {
                  quiz:
                    "What is the correct HTML for adding a background color?",
                  option1: "<background>yellow</background>",
                  option2: '<body style="bg-color:yellow;">',
                  option3: '<body bg="yellow">',
                  option4: '<body style="background-color:yellow;">',
                  answer: "4"
                },
                {
                  quiz:
                    "Choose the correct HTML element to define important text",
                  option1: "<strong>",
                  option2: "<b>",
                  option3: "<important>",
                  option4: "<i>",
                  answer: "1"
                },
                {
                  quiz:
                    "Choose the correct HTML element to define emphasized text",
                  option1: "<i>",
                  option2: "<emphasize>",
                  option3: "<italic>",
                  option4: "<em>",
                  answer: "4"
                },
                {
                  quiz: "What is the correct HTML for creating a hyperlink?",
                  option1: "<a>http://www.w3schools.com</a>",
                  option2: ' <a href="http://www.w3schools.com">W3Schools</a>',
                  option3:
                    '<a name="http://www.w3schools.com">W3Schools.com</a>',
                  option4:
                    '<a url="http://www.w3schools.com">W3Schools.com</a>',
                  answer: "2"
                },
                {
                  quiz: "Which character is used to indicate an end tag?",
                  option1: "<",
                  option2: "*",
                  option3: "/",
                  option4: "^",
                  answer: "3"
                },
                {
                  quiz: "How can you open a link in a new tab/browser window?",
                  option1: '<a href="url" new>',
                  option2: '<a href="url" target="_blank">',
                  option3: '<a href="url" target="new">',
                  option4: '<a href="url" target="new_blank">',
                  answer: "2"
                },
                {
                  quiz: "Which of these elements are all <table> elements?",
                  option1: "<table><head><tfoot>",
                  option2: "<table><tr><td>",
                  option3: "<table><tr><tt>",
                  option4: "<thead><body><tr>",
                  answer: "2"
                }
              ]
            }
          ]
        },
        {
          quizName: "CSS",
          tests: [
            {
              name: "Test 1",
              questions: 10,
              time: 120,
              quiz_questions: [
                {
                  quiz: "What does CSS stand for?",
                  option1: "Colorful Style Sheets",
                  option2: "Creative Style Sheets",
                  option3: "Cascading Style Sheets",
                  option4: "Computer Style Sheets",
                  answer: "3"
                },
                {
                  quiz:
                    "Where in an HTML document is the correct place to refer to an external style sheet?",
                  option1: "In the <head> section",
                  option2: "At the end of the document",
                  option3: "In the <body> section",
                  option4: "None of above",
                  answer: "1"
                },
                {
                  quiz:
                    "Which HTML tag is used to define an internal style sheet?",
                  option1: "<script>",
                  option2: "<style>",
                  option3: "<css>",
                  option4: "<pre>",
                  answer: "2"
                },
                {
                  quiz: "Which is the correct CSS syntax?",
                  option1: "{body;color:black;}",
                  option2: "body:color=black;",
                  option3: "{body:color=black;}",
                  option4: "body {color: black;}",
                  answer: "4"
                },
                {
                  quiz: "How do you insert a comment in a CSS file?",
                  option1: "' this is a comment",
                  option2: "// this is a comment",
                  option3: "// this is a comment //",
                  option4: "/* this is a comment */",
                  answer: "4"
                },
                {
                  quiz:
                    "Which property is used to change the background color?",
                  option1: "color",
                  option2: "bgcolor",
                  option3: "background-color",
                  option4: "backgroundColor",
                  answer: "3"
                },
                {
                  quiz: "Which CSS property controls the text size?",
                  option1: "font-size",
                  option2: "text-style",
                  option3: "text-size",
                  option4: "font-style",
                  answer: "1"
                },
                {
                  quiz:
                    "What is the correct CSS syntax for making all the <p> elements bold?",
                  option1: '<p style="text-size:bold;">',
                  option2: "p {text-size:bold;}",
                  option3: '<p style="font-size:bold;">',
                  option4: "p {font-weight:bold;}",
                  answer: "4"
                },
                {
                  quiz: "How do you display hyperlinks without an underline?",
                  option1: "a {decoration:no-underline;}",
                  option2: "a {text-decoration:no-underline;}",
                  option3: "a {underline:none;}",
                  option4: "a {text-decoration:none;}",
                  answer: "4"
                },
                {
                  quiz:
                    "How do you make each word in a text start with a capital letter?",
                  option1: "transform:capitalize",
                  option2: "text-transform:capitalize",
                  option3: "You can't do that with CSS",
                  option4: "text-style:captialize",
                  answer: "2"
                }
              ]
            }
          ]
        },
        {
          quizName: "JAVASCRIPT",
          tests: [
            {
              name: "Test 1",
              questions: 5,
              time: 60,
              quiz_questions: [
                {
                  quiz:
                    'What is the correct JavaScript syntax to change the content of this <p id="demo">This is a demonstration.</p> HTML element?',
                  option1:
                    'document.getElementByName("p").innerHTML = "Hello World!";',
                  option2:
                    'document.getElement("p").innerHTML = "Hello World!";',
                  option3:
                    'document.getElementById("demo").innerHTML = "Hello World!";',
                  option4: '#demo.innerHTML = "Hello World!";',
                  answer: "3"
                },
                {
                  quiz: "Where is the correct place to insert a JavaScript?",
                  option1:
                    "Both the <head> section and the <body> section are correct",
                  option2: "The <body> section",
                  option3: "The <head> section",
                  option4: "afer the <!DOCTYPE html> declaration",
                  answer: "1"
                },
                {
                  quiz: 'How do you write "Hello World" in an alert box?',
                  option1: 'alert("Hello World");',
                  option2: 'alertBox("Hello World");',
                  option3: 'msgBox("Hello World");',
                  option4: 'msg("Hello World");',
                  answer: "1"
                },
                {
                  quiz: "How do you create a function in JavaScript?",
                  option1: "function = myFunction()",
                  option2: "function myFunction()",
                  option3: "function : myFunction()",
                  option4: "function => myFunction()",
                  answer: "2"
                },
                {
                  quiz: "How to write an IF statement in JavaScript?",
                  option1: "if i = 5 then",
                  option2: "if i = 5",
                  option3: "if (i == 5)",
                  option4: "if i == 5 then",
                  answer: "3"
                }
              ]
            },
            {
              name: "Test 2",
              questions: 6,
              time: 120,
              quiz_questions: [
                {
                  quiz:
                    'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
                  option1: "if i <> 5",
                  option2: "if (i != 5)",
                  option3: "if (i <> 5)",
                  option4: "if i =! 5 then",
                  answer: "2"
                },
                {
                  quiz: "How does a WHILE loop start?",
                  option1: "while (i <= 10; i++)",
                  option2: "while i = 1 to 10",
                  option3: "while (i <= 10)",
                  option4: "none of above",
                  answer: "3"
                },
                {
                  quiz: "How does a FOR loop start?",
                  option1: "for (i = 0; i <= 5; i++)",
                  option2: "for i = 1 to 5",
                  option3: "for (i = 0; i <= 5)",
                  option4: "for (i <= 5; i++)",
                  answer: "1"
                },
                {
                  quiz: "How can you add a comment in a JavaScript?",
                  option1: "//This is a comment",
                  option2: "<!--This is a comment-->",
                  option3: "'This is a comment",
                  option4: "#This is a comment#",
                  answer: "1"
                },
                {
                  quiz: "What is the correct way to write a JavaScript array?",
                  option1: 'var colors = "red", "green", "blue"',
                  option2:
                    'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
                  option3: 'var colors = (1:"red", 2:"green", 3:"blue")',
                  option4: 'var colors = ["red", "green", "blue"]',
                  answer: "4"
                },
                {
                  quiz:
                    "How do you round the number 7.25, to the nearest integer?",
                  option1: "Math.rnd(7.25)",
                  option2: "rnd(7.25)",
                  option3: "Math.round(7.25)",
                  option4: "round(7.25)",
                  answer: "3"
                }
              ]
            },
            {
              name: "Test 3",
              questions: 5,
              time: 60,
              quiz_questions: [
                {
                  quiz:
                    "How do you find the number with the highest value of x and y?",
                  option1: "Math.ceil(x, y)",
                  option2: "Math.max(x, y)",
                  option3: "top(x, y)",
                  option4: "ceil(x, y)",
                  answer: "1"
                },
                {
                  quiz:
                    'What is the correct JavaScript syntax for opening a new window called "w2" ?',
                  option1: 'w2 = window.new("http://www.w3schools.com");',
                  option2: 'w2 = window.open("http://www.w3schools.com");',
                  option3: 'w2 = window.create("http://www.w3schools.com");',
                  option4: "none of above",
                  answer: "2"
                },
                {
                  quiz: "JavaScript is the same as Java.",
                  option1: "True",
                  option2: "False",
                  option3: "Neither true nor false",
                  option4: "none of above",
                  answer: "2"
                },
                {
                  quiz:
                    "Which event occurs when the user clicks on an HTML element?",
                  option1: "onmouseclick",
                  option2: "onmouseover",
                  option3: "onchange",
                  option4: "onclick",
                  answer: "4"
                },
                {
                  quiz: "How do you declare a JavaScript variable?",
                  option1: "v carName;",
                  option2: "variable carName;",
                  option3: "var carName;",
                  option4: "variables carName;",
                  answer: "3"
                }
              ]
            }
          ]
        }
      ],
      saveSelectedQuizObj: null,
      renderSelectedTestObj: false,
      renderMCQs: false,
      currentTestIndex: null
    };
    this.back = this.back.bind(this);
    this.backToDashboard = this.backToDashboard.bind(this);
  }

  // saving selected quiz to state
  updateQuizInfoState(index) {
    const { quiz_info } = this.state;
    this.setState({
      saveSelectedQuizObj: quiz_info[index],
      renderSelectedTestObj: true
    });
  }

  // back button function
  back() {
    this.setState({ renderSelectedTestObj: false });
  }

  backToDashboard(param) {
    this.setState({ renderMCQs: param });
  }

  renderQuizInfo() {
    const { saveSelectedQuizObj } = this.state;
    return (
      <div>
        <h2>{saveSelectedQuizObj.quizName} Quiz</h2>

        <div className="row">
          {saveSelectedQuizObj.tests.map((test, i) => {
            return (
              <div
                className="col-md-4"
                key={`${saveSelectedQuizObj.quizName}_${test.name}`}
              >
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={coverPic2}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{test.name}</h5>
                    <p className="card-text">
                      Total Questions: {test.questions}
                    </p>
                    <p>Total Time: {test.time / 60} Minutes</p>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        this.setState({
                          renderMCQs: true,
                          currentTestIndex: i,
                          renderSelectedTestObj: false
                        });
                      }}
                    >
                      Start Quiz {i + 1} <i className=" fa fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <button className="btn btn-secondary" onClick={this.back}>
          Back <i className="fa fa-backward" />
        </button>
      </div>
    );
  }

  renderQuizList() {
    const { quiz_list } = this.state;
    return (
      <div>
        <h2>Dashboard</h2>

        <div className="row">
          {quiz_list.map((qList, index) => {
            return (
              <div className="col-md-4" key={`${qList}_${index}`}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={coverPic1}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{qList.quizName} Quiz</h5>
                    <p className="card-text">
                      Test your skills of {qList.quizName} by taking this small quiz.
                      It has {qList.tests} tests.
                    </p>
                    <button
                      className="btn btn-info"
                      onClick={this.updateQuizInfoState.bind(this, index)}
                    >
                      Next <i className=" fa fa-paper-plane" />
                    </button>
                    {/* <button className="btn btn-primary" >Next <i class=" fa fa-paper-plane"></i></button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    const {
      renderSelectedTestObj,
      renderMCQs,
      saveSelectedQuizObj,
      currentTestIndex
    } = this.state;
    return (
      <div>
        {renderSelectedTestObj ? (
          this.renderQuizInfo()
        ) : renderMCQs ? (
          <MCQs
            currentQuesObj={saveSelectedQuizObj}
            currentTestIndex={currentTestIndex}
            backToDashboard={this.backToDashboard}
          />
        ) : (
          this.renderQuizList()
        )}
        {console.log(currentTestIndex, saveSelectedQuizObj, renderMCQs)}
      </div>
    );
  }
}

export default QuizList;
