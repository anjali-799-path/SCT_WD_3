
const questions = {
  c: [
    {question: "What is the default return type of a C function?", options: ["void", "int", "float", "char"], correct: 1},
    {question: "Which symbol is used to denote a preprocessor directive in C?", options: ["$", "#", "@", "&"], correct: 1},
    {question: "Which header file is needed for printf() and scanf()?", options: ["stdlib.h", "string.h", "stdio.h", "conio.h"], correct: 2},
    {question: "Which keyword is used to define a constant in C?", options: ["final", "const", "define", "constant"], correct: 1},
    {question: "What is the size of char in C?", options: ["1 byte", "2 bytes", "4 bytes", "Depends on OS"], correct: 0},
    {question: "Which format specifier is used for float in printf()?", options: ["%d", "%c", "%f", "%lf"], correct: 2},
    {question: "Which operator is used for pointer dereferencing?", options: ["&", "*", "->", "%"], correct: 1},
    {question: "Which of the following is not a valid storage class in C?", options: ["auto", "static", "register", "mutable"], correct: 3},
    {question: "Which loop checks the condition after execution?", options: ["for", "while", "do-while", "nested for"], correct: 2},
    {question: "Which function is used to allocate memory dynamically?", options: ["malloc()", "alloc()", "calloc()", "new"], correct: 0},
    {question: "Which function is used to free allocated memory?", options: ["delete()", "free()", "dispose()", "remove()"], correct: 1},
    {question: "What does break statement do?", options: ["Terminates loop", "Skips iteration", "Ends program", "Exits function"], correct: 0},
    {question: "Which keyword is used to define a structure in C?", options: ["struct", "class", "define", "package"], correct: 0},
    {question: "Which function compares two strings in C?", options: ["strcpy()", "strcmp()", "strlen()", "strcat()"], correct: 1},
    {question: "Which operator is used to access members of a structure via pointer?", options: [".", "->", "::", "*"], correct: 1},
    {question: "Which keyword is used for unconditional branching?", options: ["switch", "goto", "jump", "continue"], correct: 1},
    {question: "Which of the following is a valid data type in C?", options: ["integer", "real", "int", "number"], correct: 2},
    {question: "Which function is used to find the length of a string?", options: ["strlen()", "size()", "length()", "strlength()"], correct: 0},
    {question: "Which operator has the highest precedence?", options: ["*", "()", "++", "&&"], correct: 1},
    {question: "What is the result of 5/2 in C?", options: ["2.5", "2", "3", "Error"], correct: 1},
    {question: "Which escape sequence is used for newline?", options: ["\\n", "\\t", "\\0", "\\r"], correct: 0},
    {question: "Which header file is needed for malloc()?", options: ["string.h", "memory.h", "stdlib.h", "alloc.h"], correct: 2},
    {question: "What is the default value of static variables?", options: ["0", "garbage", "NULL", "Depends"], correct: 0},
    {question: "Which keyword is used to define macros?", options: ["macro", "#define", "const", "def"], correct: 1},
    {question: "Which of the following is not a loop in C?", options: ["for", "while", "do-while", "repeat-until"], correct: 3},
    {question: "Which function is used to concatenate two strings?", options: ["strcat()", "strjoin()", "concat()", "strmerge()"], correct: 0},
    {question: "Which data type is used for single character?", options: ["int", "char", "string", "text"], correct: 1},
    {question: "What is the index of the first element in an array?", options: ["1", "0", "-1", "Depends"], correct: 1},
    {question: "Which function reads a string from input?", options: ["scanf()", "gets()", "input()", "fread()"], correct: 1},
    {question: "Which operator is used to get address of variable?", options: ["*", "&", "%", "@"], correct: 1},
    {question: "Which keyword is used to define constants?", options: ["const", "constant", "#define", "both const and #define"], correct: 3},
    {question: "Which type of function cannot return a value?", options: ["int", "char", "void", "float"], correct: 2},
    {question: "What is the size of float in C?", options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"], correct: 1},
    {question: "Which statement transfers control to another case in switch?", options: ["goto", "break", "continue", "return"], correct: 0},
    {question: "Which file extension is used for C source files?", options: [".cpp", ".java", ".c", ".py"], correct: 2},
    {question: "What is the result of 2 % 5 in C?", options: ["0", "2", "5", "Error"], correct: 1},
    {question: "Which keyword is used to include external files?", options: ["#import", "#use", "#include", "#add"], correct: 2},
    {question: "Which of the following is not a valid identifier?", options: ["_value", "2ndValue", "value2", "Value_2"], correct: 1},
    {question: "Which function converts string to integer?", options: ["atoi()", "itoa()", "strint()", "toint()"], correct: 0},
    {question: "Which keyword is used to create a union?", options: ["struct", "union", "class", "record"], correct: 1},
    {question: "Which statement skips the current iteration?", options: ["skip", "break", "continue", "exit"], correct: 2},
    {question: "Which header is used for mathematical functions?", options: ["math.h", "stdlib.h", "stdio.h", "calc.h"], correct: 0},
    {question: "Which symbol is used for single-line comments in C?", options: ["//", "/*", "##", "--"], correct: 0},
    {question: "Which is the correct way to declare an array?", options: ["int arr[];", "arr int[];", "array arr[10];", "int arr[10];"], correct: 3},
    {question: "Which keyword defines a function that can be called before declaration?", options: ["extern", "forward", "inline", "prototype"], correct: 0},
    {question: "What is the maximum value of unsigned int (32-bit)?", options: ["65535", "4294967295", "2147483647", "9223372036854775807"], correct: 1},
    {question: "Which operator is used for bitwise AND?", options: ["&&", "&", "|", "&&&"], correct: 1},
    {question: "Which function is used to write formatted output?", options: ["printf()", "scanf()", "fprintf()", "output()"], correct: 0},
    {question: "Which of the following is a conditional operator?", options: ["?:", "if-else", "switch", "case"], correct: 0},
    {question: "Which keyword is used to declare an enumeration?", options: ["enum", "enumeration", "set", "list"], correct: 0},
    {question: "Which storage class places variable in CPU registers?", options: ["auto", "register", "static", "extern"], correct: 1},
    {question: "Which function copies one string into another?", options: ["strcopy()", "strcpy()", "copy()", "string_copy()"], correct: 1},
    {question: "Which function terminates a C program immediately?", options: ["stop()", "exit()", "terminate()", "end()"], correct: 1},
    {question: "Which operator increases value by 1?", options: ["++", "+=", "+1", "--"], correct: 0},
    {question: "Which function opens a file in C?", options: ["fopen()", "fileopen()", "open()", "file()"], correct: 0},
    {question: "Which operator is used for logical OR?", options: ["||", "|", "or", "&&"], correct: 0},
    {question: "Which keyword makes a variable value unchangeable?", options: ["final", "const", "static", "immutable"], correct: 1},
    {question: "Which header is required for string functions?", options: ["stdio.h", "string.h", "stdlib.h", "strings.h"], correct: 1},
    {question: "What is the size of double in C (typical)?", options: ["4 bytes", "8 bytes", "16 bytes", "Depends"], correct: 1},
    {question: "Which operator returns remainder?", options: ["%", "/", "*", "//"], correct: 0},
    {question: "Which of the following is not a keyword?", options: ["break", "case", "integer", "default"], correct: 2}
  ],

    cpp: [ {question: "Who developed C++?", options: ["Dennis Ritchie", "Ken Thompson", "Bjarne Stroustrup", "James Gosling"], correct: 2},
     {question: "Which of the following supports function overloading?", options: ["C", "C++", "Both", "None"], correct: 2},
      {question: "Which is not a C++ access specifier?", options: ["public", "private", "protected", "package"], correct: 3}, {question: "What does STL stand for?", options: ["Standard Type Library", "System Template Library", "Standard Template Library", "Source Template Library"], correct: 2},
       {question: "Operator to allocate memory?", options: ["malloc", "new", "alloc", "create"], correct: 1}, 
       {question: "Which keyword prevents inheritance?", options: ["final (C++11)", "static", "virtual", "override"], correct: 0},
        {question: "Pure virtual function syntax?", options: ["virtual void f()=0;", "void virtual f()=0;", "virtual=0 void f();", "pure virtual void f();"], correct: 0}, 
        {question: "Which is RAII primarily about?", options: ["Garbage collection", "Ownership & lifetime", "Macros", "Templates"], correct: 1}, 
        {question: "What does 'explicit' prevent?", options: ["Copying", "Implicit conversions", "Inheritance", "Virtual dispatch"], correct: 1},
         {question: "Which cast is safest for downcasting?", options: ["static_cast", "reinterpret_cast", "dynamic_cast", "C-style cast"], correct: 2},
         ],

  python: [
    {question: "Which keyword is used to define a function in Python?", options: ["func", "def", "function", "lambda"], correct: 1},
    {question: "Which of the following is immutable?", options: ["List", "Set", "Dictionary", "Tuple"], correct: 3},
    {question: "Which symbol is used for comments in Python?", options: ["//", "#", "/* */", "--"], correct: 1},
    {question: "Which function returns the length of a list?", options: ["count()", "length()", "len()", "size()"], correct: 2},
    {question: "Which module is used for regular expressions?", options: ["regex", "re", "pyregex", "match"], correct: 1},
    {question: "What is the output of 3 * 'Hi'?", options: ["HiHiHi", "Error", "3Hi", "Hi3"], correct: 0},
    {question: "Which data type is returned by input()?", options: ["int", "string", "float", "depends"], correct: 1},
    {question: "Which keyword is used for exception handling?", options: ["error", "catch", "except", "throw"], correct: 2},
    {question: "Which collection has unique elements?", options: ["List", "Tuple", "Set", "Dictionary"], correct: 2},
    {question: "Which library is used for data analysis in Python?", options: ["NumPy", "TensorFlow", "Pandas", "Matplotlib"], correct: 2}
  ],

  java: [
    {question: "Which company originally developed Java?", options: ["Microsoft", "Sun Microsystems", "Oracle", "IBM"], correct: 1},
    {question: "Which method is the entry point in Java?", options: ["start()", "main()", "init()", "run()"], correct: 1},
    {question: "Which keyword is used for inheritance?", options: ["extends", "implements", "inherits", "super"], correct: 0},
    {question: "Which package is imported by default in Java?", options: ["java.util", "java.io", "java.lang", "java.sql"], correct: 2},
    {question: "Which operator is used for object creation?", options: ["new", "create", "make", "alloc"], correct: 0},
    {question: "Which keyword prevents inheritance?", options: ["stop", "final", "abstract", "static"], correct: 1},
    {question: "Which collection does not allow duplicate elements?", options: ["List", "Set", "Map", "Queue"], correct: 1},
    {question: "Which method is used to compare strings?", options: ["compare()", "equals()", "==", "check()"], correct: 1},
    {question: "What is JVM in Java?", options: ["Java Virtual Machine", "Java Variable Method", "Just Virtual Memory", "Java Verified Mode"], correct: 0},
    {question: "Which keyword is used to define an interface?", options: ["class", "interface", "implements", "abstract"], correct: 1}
  ],

  web: [
    {question: "Which language runs in a web browser?", options: ["Java", "C", "Python", "JavaScript"], correct: 3},
    {question: "What does CSS stand for?", options: ["Central Style Sheets", "Cascading Style Sheets", "Creative Style System", "Computer Style Syntax"], correct: 1},
    {question: "Which HTML tag is used to link CSS?", options: ["<style>", "<css>", "<link>", "<script>"], correct: 2},
    {question: "Which symbol is used for IDs in CSS?", options: [".", "#", "@", "&"], correct: 1},
    {question: "Which HTML element is used for the largest heading?", options: ["<h1>", "<heading>", "<head>", "<h6>"], correct: 0},
    {question: "Which tag is used to create a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], correct: 1},
    {question: "Which property is used for background color in CSS?", options: ["color", "background-color", "bgcolor", "style"], correct: 1},
    {question: "Which event is fired when a button is clicked in JavaScript?", options: ["onpress", "onclick", "onhover", "onchange"], correct: 1},
    {question: "Which tag is used for a line break in HTML?", options: ["<break>", "<br>", "<lb>", "<newline>"], correct: 1},
    {question: "Which symbol is used for comments in JavaScript?", options: ["<!-- -->", "//", "/* */", "#"], correct: 1}
  ],

  dataAnalysis: [
    {question: "Which library is most used for data analysis in Python?", options: ["NumPy", "Pandas", "Matplotlib", "Seaborn"], correct: 1},
    {question: "Which file format is most common for raw datasets?", options: ["CSV", "DOCX", "MP3", "PNG"], correct: 0},
    {question: "Which Python library is core for data frames?", options: ["NumPy", "Pandas", "Matplotlib", "SciPy"], correct: 1},
    {question: "Which chart best shows distribution?", options: ["Line", "Histogram", "Bar", "Pie"], correct: 1},
    {question: "What does 'NA' typically mean?", options: ["Not Applicable", "Not Available/Missing", "Not Accurate", "Negative Answer"], correct: 1},
    {question: "Which measure is robust to outliers?", options: ["Mean", "Median", "Variance", "Range"], correct: 1},
    {question: "Correlation range is:", options: ["-1 to 1", "0 to 1", "-∞ to ∞", "-10 to 10"], correct: 0},
    {question: "Box plot shows:", options: ["Mean only", "Quartiles & outliers", "Variance only", "Mode only"], correct: 1},
    {question: "Standardization typically sets:", options: ["Mean=1, SD=0", "Mean=0, SD=1", "Mean=0, SD=0", "Mean=1, SD=1"], correct: 1},
    {question: "Pandas read CSV function:", options: ["pd.read()", "pd.read_csv()", "pd.csv()", "pd.load_csv()"], correct: 1}
  ],

  dataScience: [
    {question: "Which step comes first in data science workflow?", options: ["Modeling", "Data Collection", "Deployment", "Visualization"], correct: 1},
    {question: "Which ML algorithm is supervised?", options: ["K-Means", "Decision Tree", "DBSCAN", "Apriori"], correct: 1},
    {question: "Supervised learning requires:", options: ["Unlabeled data", "Labeled data", "No data", "Rewards only"], correct: 1},
    {question: "Regularization helps:", options: ["Underfitting", "Overfitting", "Data leakage", "Scaling"], correct: 1},
    {question: "Which is not a tree-based model?", options: ["Random Forest", "XGBoost", "SVM", "Decision Tree"], correct: 2},
    {question: "Train/validation/test split helps with:", options: ["Data collection", "Model selection & evaluation", "Feature engineering", "Deployment"], correct: 1},
    {question: "F1-score is the harmonic mean of:", options: ["Precision & Recall", "Accuracy & Recall", "TP & TN", "ROC & AUC"], correct: 0},
    {question: "One-hot encoding is used for:", options: ["Text only", "Categorical variables", "Images", "Time series"], correct: 1},
    {question: "Gradient descent updates parameters by:", options: ["Adding gradient", "Subtracting gradient", "Random guessing", "Averaging"], correct: 1},
    {question: "Cross-validation primarily reduces:", options: ["Model size", "Variance of estimates", "Dataset size", "Bias only"], correct: 1}
  ],

  aws: [
    {question: "What does EC2 stand for?", options: ["Elastic Cloud Compute", "Elastic Compute Cloud", "Enterprise Cloud Compute", "Easy Cloud Computing"], correct: 1},
    {question: "Which AWS service is for object storage?", options: ["EC2", "S3", "RDS", "Lambda"], correct: 1},
    {question: "S3 is primarily for:", options: ["Relational DB", "Object storage", "Queue service", "Serverless compute"], correct: 1},
    {question: "RDS provides:", options: ["NoSQL only", "Managed relational databases", "On-prem DB", "File system mount"], correct: 1},
    {question: "Lambda pricing is based on:", options: ["vCPU hours", "Requests & compute time", "Fixed monthly fee", "EC2 instance type"], correct: 1},
    {question: "IAM is used for:", options: ["Monitoring", "Networking", "Identity & access management", "Deployment"], correct: 2},
    {question: "VPC stands for:", options: ["Virtual Private Cloud", "Virtual Public Cloud", "Vendor Private Cloud", "Virtual Protected Cluster"], correct: 0},
    {question: "CloudWatch is for:", options: ["Authentication", "Cost optimization", "Monitoring & logs", "CI/CD"], correct: 2},
    {question: "Which service is serverless DB?", options: ["EC2", "EBS", "DynamoDB", "ECS"], correct: 2},
    {question: "Which service for message queuing?", options: ["SNS only", "SQS", "SES", "Kinesis Data Firehose"], correct: 1}
  ]
};

// DOM elements (cached)
const subjectSelection = document.getElementById("subject-selection");
const quizArea = document.getElementById("quiz-area");
const answerEls = () => Array.from(document.querySelectorAll(".answer")); // function so it always reads current inputs
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const progressEl = document.getElementById("progress");
const timerEl = document.getElementById("timer");

let currentQuiz = 0;
let score = 0;
let currentQuestions = [];
let timer = null;
let timeLeft = 60;

// Start quiz for a language
function startQuiz(language) {
  if (!questions[language] || !Array.isArray(questions[language]) || questions[language].length === 0) {
    alert("No questions available for this subject yet.");
    return;
  }
  currentQuestions = questions[language];
  currentQuiz = 0;
  score = 0;
  subjectSelection.style.display = "none";
  quizArea.style.display = "block";
  submitBtn.style.display = "block";
  loadQuiz();
  resetTimer();
}

// Load current question into UI
function loadQuiz() {
  deselectAnswers();
  const q = currentQuestions[currentQuiz];
  questionEl.innerText = q.question;
  a_text.innerText = q.options[0] ?? "";
  b_text.innerText = q.options[1] ?? "";
  c_text.innerText = q.options[2] ?? "";
  d_text.innerText = q.options[3] ?? "";
  progressEl.innerText = `Question ${currentQuiz + 1} of ${currentQuestions.length}`;
}

// Clear radio selection
function deselectAnswers() {
  answerEls().forEach(el => el.checked = false);
}

// Return selected index (0..3) or null if none
function getSelected() {
  const checked = document.querySelector('input[name="answer"]:checked');
  if (!checked) return null;
  const map = { a: 0, b: 1, c: 2, d: 3 };
  return map[checked.id];
}

// Submit logic: accepts 0 as a valid answer (important!)
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer === null) {
    // If you want to enforce answering, show message — or auto-skip. Here we alert.
    alert("Please select an answer (or wait for the timer to auto-advance).");
    return;
  }

  if (answer === currentQuestions[currentQuiz].correct) score++;
  currentQuiz++;
  if (currentQuiz < currentQuestions.length) {
    loadQuiz();
    resetTimer();
  } else {
    endQuiz();
  }
});

// Timer functions
function startTimer() {
  clearInterval(timer);
  timeLeft = 60;
  timerEl.textContent = `${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `${timeLeft}s`;
    if (timeLeft < 0) {
      clearInterval(timer);
      // auto-advance (no score awarded)
      currentQuiz++;
      if (currentQuiz < currentQuestions.length) {
        loadQuiz();
        resetTimer();
      } else {
        endQuiz();
      }
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  startTimer();
}

// End quiz and show score
function endQuiz() {
  clearInterval(timer);
  quizArea.innerHTML = `
    <h2 class="text-center">🎉 You answered ${score}/${currentQuestions.length} correctly</h2>
    <div class="d-grid gap-2 mt-3">
      <button class="btn btn-success" onclick="location.reload()">Restart</button>
      <button class="btn btn-outline-secondary" onclick="backToSubjects()">Back to Subjects</button>
    </div>
  `;
}

// Back to subject selection
function backToSubjects() {
  clearInterval(timer);
  // reload page or show selection
  location.reload();
}
