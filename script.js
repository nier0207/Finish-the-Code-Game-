// ==================== JAVA CHALLENGES ====================
const javaChallenges = {
    easy: [
        {
            code: `public class Main {
    public static void main(String[] args) {
        ____ age = 25;
        System.out.println("Age: " + age);
    }
}`,
            answer: "int",
            hints: [
                "💡 Hint 1: Data type for whole numbers like 1, 2, 3...",
                "💡 Hint 2: Starts with 'i', 3 letters",
                "💡 Hint 3: Short for 'integer'"
            ],
            explanation: "✅ Correct! 'int' is for integers in Java."
        },
        {
            code: `public class Main {
    public static void main(String[] args) {
        ____ name = "Juan";
        System.out.println("Name: " + name);
    }
}`,
            answer: "String",
            hints: [
                "💡 Hint 1: Data type for text, starts with capital letter",
                "💡 Hint 2: Non-primitive data type",
                "💡 Hint 3: Used for names, sentences"
            ],
            explanation: "✅ Correct! 'String' is for text in Java."
        },
        {
            code: `public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = 3;
        int sum = a ____ b;
        System.out.println(sum);
    }
}`,
            answer: "+",
            hints: [
                "💡 Hint 1: Addition operator",
                "💡 Hint 2: Same symbol used in math",
                "💡 Hint 3: Press Shift + ="
            ],
            explanation: "✅ Correct! '+' is the addition operator."
        },
        {
            code: `public class Main {
    public static void main(String[] args) {
        double pi = 3.1416;
        System.out.println("Pi is: " ____ pi);
    }
}`,
            answer: "+",
            hints: [
                "💡 Hint 1: Concatenates strings with variables",
                "💡 Hint 2: Same as addition symbol",
                "💡 Hint 3: Joins text and numbers"
            ],
            explanation: "✅ Correct! '+' is for string concatenation."
        },
        {
            code: `public class Main {
    public static void main(String[] args) {
        boolean isJavaFun = true;
        if (isJavaFun ____ true) {
            System.out.println("Java is fun!");
        }
    }
}`,
            answer: "==",
            hints: [
                "💡 Hint 1: Compares if two values are equal",
                "💡 Hint 2: Two equal signs",
                "💡 Hint 3: Not single '=' which is assignment"
            ],
            explanation: "✅ Correct! '==' is equality operator."
        }
    ],
    medium: [
        {
            code: `public class Main {
    public static void main(String[] args) {
        int number = 10;
        if (number ____ 0) {
            System.out.println("Positive");
        } else {
            System.out.println("Negative");
        }
    }
}`,
            answer: ">",
            hints: [
                "💡 Hint 1: Means 'greater than'",
                "💡 Hint 2: Arrow pointing right",
                "💡 Hint 3: Checks if left is larger"
            ],
            explanation: "✅ Correct! '>' checks if greater."
        },
        {
            code: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i ____ 5; i++) {
            System.out.println(i);
        }
    }
}`,
            answer: "<=",
            hints: [
                "💡 Hint 1: Includes 5 in loop",
                "💡 Hint 2: Less than and equal",
                "💡 Hint 3: Two symbols: < and ="
            ],
            explanation: "✅ Correct! '<=' loops up to 5."
        },
        {
            code: `public class Main {
    public static void main(String[] args) {
        int count = 1;
        ____ (count <= 3) {
            System.out.println(count);
            count++;
        }
    }
}`,
            answer: "while",
            hints: [
                "💡 Hint 1: Runs while condition is true",
                "💡 Hint 2: 5 letters, starts with 'w'",
                "💡 Hint 3: Opposite of do-while"
            ],
            explanation: "✅ Correct! 'while' is loop keyword."
        },
        {
            code: `public class Main {
    ____ int add(int a, int b) {
        return a + b;
    }
    public static void main(String[] args) {
        Main obj = new Main();
        System.out.println(obj.add(5, 3));
    }
}`,
            answer: "public",
            hints: [
                "💡 Hint 1: Access modifier for anywhere",
                "💡 Hint 2: 6 letters, starts with 'p'",
                "💡 Hint 3: Other: private, protected"
            ],
            explanation: "✅ Correct! 'public' makes method accessible."
        },
        {
            code: `public class Main {
    public static void main(String[] args) {
        int[] numbers = ____ int[5];
        numbers[0] = 10;
        System.out.println(numbers[0]);
    }
}`,
            answer: "new",
            hints: [
                "💡 Hint 1: Creates new object",
                "💡 Hint 2: 3 letters, starts with 'n'",
                "💡 Hint 3: Allocates memory"
            ],
            explanation: "✅ Correct! 'new' creates array."
        }
    ],
    hard: [
        {
            code: `class Car {
    String brand;
    Car(String brand) {
        ____.brand = brand;
    }
}
public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota");
        System.out.println(myCar.brand);
    }
}`,
            answer: "this",
            hints: [
                "💡 Hint 1: Refers to current object",
                "💡 Hint 2: 4 letters, starts with 't'",
                "💡 Hint 3: Differentiates instance from parameter"
            ],
            explanation: "✅ Correct! 'this' refers to current object."
        },
        {
            code: `public class Main {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5};
        for (int num ____ nums) {
            System.out.println(num);
        }
    }
}`,
            answer: ":",
            hints: [
                "💡 Hint 1: Used in enhanced for loop",
                "💡 Hint 2: Colon symbol",
                "💡 Hint 3: Read as 'for each'"
            ],
            explanation: "✅ Correct! ':' is for enhanced for loop."
        },
        {
            code: `public class Main {
    public static void ____ main(String[] args) {
        System.out.println("Hello");
    }
}`,
            answer: "void",
            hints: [
                "💡 Hint 1: Method returns nothing",
                "💡 Hint 2: 4 letters, means 'empty'",
                "💡 Hint 3: No return value"
            ],
            explanation: "✅ Correct! 'void' returns nothing."
        },
        {
            code: `public class Main {
    public static void main(String[] args) {
        int x = 5;
        int y = 10;
        int max = (x ____ y) ? x : y;
        System.out.println(max);
    }
}`,
            answer: ">",
            hints: [
                "💡 Hint 1: Ternary operator condition",
                "💡 Hint 2: Checks which is greater",
                "💡 Hint 3: If true, first; if false, second"
            ],
            explanation: "✅ Correct! '>' in ternary checks greater."
        },
        {
            code: `public class Main {
    public static void main(String[] args) {
        String str = "Hello";
        int len = str.____();
        System.out.println(len);
    }
}`,
            answer: "length",
            hints: [
                "💡 Hint 1: Returns number of characters",
                "💡 Hint 2: 6 letters, starts with 'l'",
                "💡 Hint 3: For Strings it's a method"
            ],
            explanation: "✅ Correct! 'length()' returns string length."
        }
    ]
};

// ==================== C# CHALLENGES ====================
const csharpChallenges = {
    easy: [
        {
            code: `using System;

class Program {
    static void Main() {
        ____ age = 25;
        Console.WriteLine("Age: " + age);
    }
}`,
            answer: "int",
            hints: [
                "💡 Hint 1: Data type for whole numbers",
                "💡 Hint 2: Same as Java, 3 letters",
                "💡 Hint 3: Short for integer"
            ],
            explanation: "✅ Correct! 'int' is for integers in C#."
        },
        {
            code: `using System;

class Program {
    static void Main() {
        ____ name = "Juan";
        Console.WriteLine("Name: " + name);
    }
}`,
            answer: "string",
            hints: [
                "💡 Hint 1: Data type for text",
                "💡 Hint 2: Lowercase in C#",
                "💡 Hint 3: Alias for System.String"
            ],
            explanation: "✅ Correct! 'string' is for text in C#."
        },
        {
            code: `using System;

class Program {
    static void Main() {
        int a = 5;
        int b = 3;
        int sum = a ____ b;
        Console.WriteLine(sum);
    }
}`,
            answer: "+",
            hints: [
                "💡 Hint 1: Addition operator",
                "💡 Hint 2: Same as math",
                "💡 Hint 3: Used for numbers"
            ],
            explanation: "✅ Correct! '+' is the addition operator."
        },
        {
            code: `using System;

class Program {
    static void Main() {
        double pi = 3.1416;
        Console.WriteLine("Pi is: " ____ pi);
    }
}`,
            answer: "+",
            hints: [
                "💡 Hint 1: String concatenation",
                "💡 Hint 2: Joins text and variables",
                "💡 Hint 3: Same as addition symbol"
            ],
            explanation: "✅ Correct! '+' is for concatenation."
        },
        {
            code: `using System;

class Program {
    static void Main() {
        bool isCSharpFun = true;
        if (isCSharpFun ____ true) {
            Console.WriteLine("C# is fun!");
        }
    }
}`,
            answer: "==",
            hints: [
                "💡 Hint 1: Equality comparison",
                "💡 Hint 2: Two equal signs",
                "💡 Hint 3: Not single '='"
            ],
            explanation: "✅ Correct! '==' is equality operator."
        }
    ],
    medium: [
        {
            code: `using System;

class Program {
    static void Main() {
        int number = 10;
        if (number ____ 0) {
            Console.WriteLine("Positive");
        } else {
            Console.WriteLine("Negative");
        }
    }
}`,
            answer: ">",
            hints: [
                "💡 Hint 1: Greater than operator",
                "💡 Hint 2: Arrow pointing right",
                "💡 Hint 3: Checks if larger"
            ],
            explanation: "✅ Correct! '>' checks greater than."
        },
        {
            code: `using System;

class Program {
    static void Main() {
        for (int i = 1; i ____ 5; i++) {
            Console.WriteLine(i);
        }
    }
}`,
            answer: "<=",
            hints: [
                "💡 Hint 1: Less than or equal",
                "💡 Hint 2: Includes 5",
                "💡 Hint 3: Two symbols"
            ],
            explanation: "✅ Correct! '<=' loops to 5."
        },
        {
            code: `using System;

class Program {
    static void Main() {
        int count = 1;
        ____ (count <= 3) {
            Console.WriteLine(count);
            count++;
        }
    }
}`,
            answer: "while",
            hints: [
                "💡 Hint 1: Loop while true",
                "💡 Hint 2: 5 letters, starts 'w'",
                "💡 Hint 3: Checks condition first"
            ],
            explanation: "✅ Correct! 'while' is loop keyword."
        },
        {
            code: `using System;

class Program {
    ____ int Add(int a, int b) {
        return a + b;
    }
    static void Main() {
        Program obj = new Program();
        Console.WriteLine(obj.Add(5, 3));
    }
}`,
            answer: "public",
            hints: [
                "💡 Hint 1: Access modifier",
                "💡 Hint 2: 6 letters, starts 'p'",
                "💡 Hint 3: Accessible anywhere"
            ],
            explanation: "✅ Correct! 'public' makes method accessible."
        },
        {
            code: `using System;

class Program {
    static void Main() {
        int[] numbers = ____ int[5];
        numbers[0] = 10;
        Console.WriteLine(numbers[0]);
    }
}`,
            answer: "new",
            hints: [
                "💡 Hint 1: Creates array",
                "💡 Hint 2: 3 letters, starts 'n'",
                "💡 Hint 3: Allocates memory"
            ],
            explanation: "✅ Correct! 'new' creates array."
        }
    ],
    hard: [
        {
            code: `class Car {
    public string Brand;
    public Car(string brand) {
        ____.Brand = brand;
    }
}

class Program {
    static void Main() {
        Car myCar = new Car("Toyota");
        Console.WriteLine(myCar.Brand);
    }
}`,
            answer: "this",
            hints: [
                "💡 Hint 1: Refers to current instance",
                "💡 Hint 2: 4 letters, starts 't'",
                "💡 Hint 3: Differentiates field from parameter"
            ],
            explanation: "✅ Correct! 'this' refers to current object."
        },
        {
            code: `using System;

class Program {
    static void Main() {
        int[] nums = {1, 2, 3, 4, 5};
        foreach (int num ____ nums) {
            Console.WriteLine(num);
        }
    }
}`,
            answer: "in",
            hints: [
                "💡 Hint 1: Used in foreach loop",
                "💡 Hint 2: 2 letters",
                "💡 Hint 3: Means 'for each num in nums'"
            ],
            explanation: "✅ Correct! 'in' is used in foreach loop."
        },
        {
            code: `using System;

class Program {
    static ____ Main() {
        Console.WriteLine("Hello");
    }
}`,
            answer: "void",
            hints: [
                "💡 Hint 1: Returns nothing",
                "💡 Hint 2: 4 letters",
                "💡 Hint 3: No return value"
            ],
            explanation: "✅ Correct! 'void' returns nothing."
        },
        {
            code: `using System;

class Program {
    static void Main() {
        int x = 5;
        int y = 10;
        int max = (x ____ y) ? x : y;
        Console.WriteLine(max);
    }
}`,
            answer: ">",
            hints: [
                "💡 Hint 1: Ternary condition",
                "💡 Hint 2: Checks greater",
                "💡 Hint 3: If true, x; else y"
            ],
            explanation: "✅ Correct! '>' in ternary."
        },
        {
            code: `using System;

class Program {
    static void Main() {
        string str = "Hello";
        int len = str.____;
        Console.WriteLine(len);
    }
}`,
            answer: "Length",
            hints: [
                "💡 Hint 1: Property for string length",
                "💡 Hint 2: Capital L, 6 letters",
                "💡 Hint 3: No parentheses"
            ],
            explanation: "✅ Correct! 'Length' is property in C#."
        }
    ]
};

// ==================== WEB DEVELOPMENT CHALLENGES ====================
const webChallenges = {
    easy: [
        {
            code: `<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>____ to My Website</h1>
</body>
</html>`,
            answer: "Welcome",
            hints: [
                "💡 Hint 1: Greeting word",
                "💡 Hint 2: Starts with 'W', 7 letters",
                "💡 Hint 3: Opposite of goodbye"
            ],
            explanation: "✅ Correct! 'Welcome' is a common greeting."
        },
        {
            code: `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            background-color: ____;
        }
    </style>
</head>
<body>
    <h1>Hello</h1>
</body>
</html>`,
            answer: "blue",
            hints: [
                "💡 Hint 1: A color name",
                "💡 Hint 2: Color of the sky",
                "💡 Hint 3: RGB(0,0,255)"
            ],
            explanation: "✅ Correct! 'blue' is a color value."
        },
        {
            code: `<script>
    let message = "Hello";
    console.____(message);
</script>`,
            answer: "log",
            hints: [
                "💡 Hint 1: Prints to console",
                "💡 Hint 2: 3 letters",
                "💡 Hint 3: Short for logarithm"
            ],
            explanation: "✅ Correct! 'log' prints to console."
        },
        {
            code: `<button onclick="alert('Clicked!')">Click ____</button>`,
            answer: "Me",
            hints: [
                "💡 Hint 1: Button text",
                "💡 Hint 2: 2 letters",
                "💡 Hint 3: Refers to yourself"
            ],
            explanation: "✅ Correct! 'Me' is common button text."
        },
        {
            code: `<style>
    p {
        color: red;
        font-____: bold;
    }
</style>`,
            answer: "weight",
            hints: [
                "💡 Hint 1: Controls text thickness",
                "💡 Hint 2: 6 letters",
                "💡 Hint 3: CSS property for bold"
            ],
            explanation: "✅ Correct! 'font-weight' makes text bold."
        }
    ],
    medium: [
        {
            code: `<div id="myDiv">Hello</div>
<script>
    document.____("myDiv").innerHTML = "World";
</script>`,
            answer: "getElementById",
            hints: [
                "💡 Hint 1: Gets element by ID",
                "💡 Hint 2: Starts with 'get'",
                "💡 Hint 3: camelCase, 15 letters"
            ],
            explanation: "✅ Correct! 'getElementById' selects element by ID."
        },
        {
            code: `<style>
    .container {
        display: ____;
        justify-content: center;
    }
</style>`,
            answer: "flex",
            hints: [
                "💡 Hint 1: CSS layout model",
                "💡 Hint 2: 4 letters",
                "💡 Hint 3: Modern layout system"
            ],
            explanation: "✅ Correct! 'flex' is Flexbox display."
        },
        {
            code: `<script>
    let numbers = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbers.____; i++) {
        console.log(numbers[i]);
    }
</script>`,
            answer: "length",
            hints: [
                "💡 Hint 1: Array property",
                "💡 Hint 2: 6 letters",
                "💡 Hint 3: Number of elements"
            ],
            explanation: "✅ Correct! 'length' gets array size."
        },
        {
            code: `<script>
    function greet(name) {
        return "Hello, " + ____;
    }
    console.log(greet("John"));
</script>`,
            answer: "name",
            hints: [
                "💡 Hint 1: Parameter variable",
                "💡 Hint 2: 4 letters",
                "💡 Hint 3: What you call someone"
            ],
            explanation: "✅ Correct! 'name' is the parameter."
        },
        {
            code: `<div class="box"></div>
<style>
    .box {
        width: 100px;
        height: 100px;
        background-color: red;
        margin: 20px ____;
    }
</style>`,
            answer: "auto",
            hints: [
                "💡 Hint 1: Centers horizontally",
                "💡 Hint 2: 4 letters",
                "💡 Hint 3: Automatic margin"
            ],
            explanation: "✅ Correct! 'auto' centers block elements."
        }
    ],
    hard: [
        {
            code: `<script>
    const person = {
        name: "John",
        age: 30,
        greet: function() {
            console.log("Hello, I'm " + ____.name);
        }
    };
    person.greet();
</script>`,
            answer: "this",
            hints: [
                "💡 Hint 1: Refers to current object",
                "💡 Hint 2: 4 letters",
                "💡 Hint 3: Inside method"
            ],
            explanation: "✅ Correct! 'this' refers to person object."
        },
        {
            code: `<script>
    let promise = new Promise((resolve, reject) => {
        resolve("Success!");
    });
    promise.____(result => console.log(result));
</script>`,
            answer: "then",
            hints: [
                "💡 Hint 1: Promise method",
                "💡 Hint 2: 4 letters",
                "💡 Hint 3: Handles resolved value"
            ],
            explanation: "✅ Correct! 'then' handles promise resolution."
        },
        {
            code: `<style>
    @media (max-width: 768px) {
        body {
            background-color: lightblue;
        }
    }
</style>`,
            answer: "768px",
            hints: [
                "💡 Hint 1: Common tablet breakpoint",
                "💡 Hint 2: 4 digits with px",
                "💡 Hint 3: iPad portrait width"
            ],
            explanation: "✅ Correct! '768px' is common mobile breakpoint."
        },
        {
            code: `<script>
    class Animal {
        constructor(name) {
            this.name = name;
        }
        speak() {
            console.log(this.name + " makes a sound");
        }
    }
    class Dog ____ Animal {
        speak() {
            console.log(this.name + " barks");
        }
    }
    let dog = new Dog("Rex");
    dog.speak();
</script>`,
            answer: "extends",
            hints: [
                "💡 Hint 1: Inheritance keyword",
                "💡 Hint 2: 7 letters",
                "💡 Hint 3: Child class inherits from parent"
            ],
            explanation: "✅ Correct! 'extends' is for inheritance."
        },
        {
            code: `<div id="app"></div>
<script>
    const data = { message: "Hello Vue!" };
    new Vue({
        el: "#app",
        data: data,
        ____: function() {
            console.log(this.message);
        }
    });
</script>`,
            answer: "mounted",
            hints: [
                "💡 Hint 1: Vue lifecycle hook",
                "💡 Hint 2: 7 letters",
                "💡 Hint 3: Runs after component mounts"
            ],
            explanation: "✅ Correct! 'mounted' is Vue lifecycle hook."
        }
    ]
};

// ==================== MAIN GAME LOGIC ====================
let currentLanguage = 'java';
let currentLevel = 'easy';
let currentQuestionIndex = 0;
let totalScore = 0;
let answered = false;
let currentQuestions = [];
let autoNextTimer = null;

// GLOBAL HINTS SYSTEM
let globalHintsRemaining = 3;
const TOTAL_HINTS = 3;

// Points per difficulty
const POINTS_MAP = {
    easy: 2,
    medium: 3,
    hard: 5
};

// Language info
const languageInfo = {
    java: { name: 'Java', icon: '☕', color: 'java' },
    csharp: { name: 'C#', icon: '🔷', color: 'csharp' },
    web: { name: 'Web Dev', icon: '🌐', color: 'web' }
};

// Storage keys
const HINTS_STORAGE_KEY = 'finish_code_global_hints';
const PROGRESS_STORAGE_KEY = 'finish_code_progress_all';

function getChallenges() {
    switch(currentLanguage) {
        case 'java': return javaChallenges;
        case 'csharp': return csharpChallenges;
        case 'web': return webChallenges;
        default: return javaChallenges;
    }
}

function loadGlobalHints() {
    const saved = localStorage.getItem(HINTS_STORAGE_KEY);
    if (saved !== null) {
        globalHintsRemaining = parseInt(saved);
    } else {
        globalHintsRemaining = TOTAL_HINTS;
    }
}

function saveGlobalHints() {
    localStorage.setItem(HINTS_STORAGE_KEY, globalHintsRemaining);
}

function loadProgress() {
    const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (saved) {
        const progress = JSON.parse(saved);
        return progress[currentLanguage]?.[currentLevel] || 0;
    }
    return 0;
}

function saveProgress() {
    const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
    let progress = saved ? JSON.parse(saved) : {};
    if (!progress[currentLanguage]) progress[currentLanguage] = {};
    progress[currentLanguage][currentLevel] = currentQuestionIndex;
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
}

function resetAllProgress() {
    localStorage.removeItem(PROGRESS_STORAGE_KEY);
}

function updateHintDisplay() {
    hintCount.textContent = globalHintsRemaining;
    hintBtn.disabled = (globalHintsRemaining <= 0);
    
    if (globalHintsRemaining === 0) {
        hintBtn.style.opacity = '0.5';
        hintBtn.style.cursor = 'not-allowed';
    } else {
        hintBtn.style.opacity = '1';
        hintBtn.style.cursor = 'pointer';
    }
}

function getCurrentPoints() {
    return POINTS_MAP[currentLevel];
}

function updateLanguageBadge() {
    const info = languageInfo[currentLanguage];
    languageBadge.textContent = `${info.icon} ${info.name}`;
    languageBadge.className = `language-badge ${info.color}`;
}

// DOM Elements
const landingPage = document.getElementById('landingPage');
const gamePage = document.getElementById('gamePage');
const javaBtn = document.getElementById('java');
const csharpBtn = document.getElementById('csharp');
const webBtn = document.getElementById('web');
const backMenu = document.getElementById('backMenu');
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
const codeInput = document.getElementById('codeInput');
const codeDisplay = document.getElementById('codeDisplay');
const questionDisplay = document.getElementById('questionDisplay');
const scoreDisplay = document.getElementById('scoreDisplay');
const messageArea = document.getElementById('messageArea');
const hintArea = document.getElementById('hintArea');
const hintBtn = document.getElementById('hintBtn');
const hintCount = document.getElementById('hintCount');
const levelSelector = document.getElementById('levelSelector');
const languageBadge = document.getElementById('languageBadge');

// Event Listeners
javaBtn.addEventListener('click', () => selectLanguage('java'));
csharpBtn.addEventListener('click', () => selectLanguage('csharp'));
webBtn.addEventListener('click', () => selectLanguage('web'));
backMenu.addEventListener('click', backToMenu);
submitBtn.addEventListener('click', checkAnswer);
resetBtn.addEventListener('click', resetGame);
codeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !answered) {
        checkAnswer();
    }
});
hintBtn.addEventListener('click', showHint);
levelSelector.addEventListener('change', changeLevel);

loadGlobalHints();

function selectLanguage(language) {
    currentLanguage = language;
    currentLevel = 'easy';
    levelSelector.value = 'easy';
    currentQuestionIndex = loadProgress();
    totalScore = 0;
    answered = false;
    
    loadQuestions();
    updateLanguageBadge();
    loadChallenge();
    showGamePage();
    updateScoreDisplay();
    updateHintDisplay();
    
    const totalQuestions = currentQuestions.length;
    const questionNum = currentQuestionIndex + 1;
    
    if (currentQuestionIndex >= totalQuestions) {
        showMessage(`📚 ${languageInfo[language].name} is completed! Click Reset Game to play again.`, 'success');
    } else {
        showMessage(`🎮 Welcome to ${languageInfo[language].name}! Starting from Question ${questionNum}/${totalQuestions}`, 'success');
    }
}

function changeLevel() {
    saveProgress();
    
    const newLevel = levelSelector.value;
    currentLevel = newLevel;
    currentQuestionIndex = loadProgress();
    loadQuestions();
    answered = false;
    loadChallenge();
    
    const levelText = levelSelector.options[levelSelector.selectedIndex].text;
    const questionNum = currentQuestionIndex + 1;
    const totalQuestions = currentQuestions.length;
    
    if (currentQuestionIndex >= totalQuestions) {
        showMessage(`📚 ${levelText} is completed! Try another level or click Reset Game.`, 'success');
    } else {
        showMessage(`🔄 Switched to ${levelText}! Continuing from Question ${questionNum}/${totalQuestions} | ${getCurrentPoints()} pts per question`, 'success');
    }
}

function loadQuestions() {
    const challenges = getChallenges();
    currentQuestions = [...challenges[currentLevel]];
}

function showGamePage() {
    landingPage.style.display = 'none';
    gamePage.style.display = 'flex';
}

function backToMenu() {
    if (autoNextTimer) {
        clearTimeout(autoNextTimer);
        autoNextTimer = null;
    }
    saveProgress();
    landingPage.style.display = 'flex';
    gamePage.style.display = 'none';
    currentLanguage = 'java';
    currentLevel = 'easy';
    currentQuestionIndex = 0;
    totalScore = 0;
    answered = false;
}

function loadChallenge() {
    if (currentQuestions.length === 0) return;
    
    if (autoNextTimer) {
        clearTimeout(autoNextTimer);
        autoNextTimer = null;
    }
    
    const totalQuestions = currentQuestions.length;
    
    if (currentQuestionIndex >= totalQuestions) {
        const info = languageInfo[currentLanguage];
        codeDisplay.textContent = `🎉 CONGRATULATIONS! 🎉\n\n✨ YOU'VE PASSED THE ${info.name.toUpperCase()} ${levelSelector.options[levelSelector.selectedIndex].text.toUpperCase()} LEVEL! ✨\n\n🌟 Score: ${totalScore} points\n💡 Hints left: ${globalHintsRemaining}\n\n📚 Try another difficulty level or another language!`;
        questionDisplay.textContent = `Completed! 🏆`;
        codeInput.disabled = true;
        submitBtn.disabled = true;
        hintBtn.disabled = true;
        return;
    }
    
    const question = currentQuestions[currentQuestionIndex];
    codeDisplay.textContent = question.code;
    questionDisplay.textContent = `Question ${currentQuestionIndex + 1}/${totalQuestions}`;
    updateScoreDisplay();
    codeInput.value = '';
    messageArea.innerHTML = '';
    hintArea.innerHTML = '';
    
    answered = false;
    updateHintDisplay();
    codeInput.disabled = false;
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    
    codeInput.focus();
}

function updateScoreDisplay() {
    scoreDisplay.textContent = `⭐ Score: ${totalScore}`;
}

function showHint() {
    if (answered) {
        showMessage('❌ You already answered this question!', 'error');
        return;
    }
    
    if (globalHintsRemaining <= 0) {
        showMessage('⚠️ You have used all 3 hints! No more hints available.', 'error');
        return;
    }
    
    const question = currentQuestions[currentQuestionIndex];
    const hintsUsedTotal = TOTAL_HINTS - globalHintsRemaining;
    const hintIndex = hintsUsedTotal % 3;
    const hintMessage = question.hints[hintIndex];
    
    hintArea.innerHTML = `<div class="hint-message">${hintMessage}</div>`;
    
    globalHintsRemaining--;
    saveGlobalHints();
    updateHintDisplay();
    
    showMessage(`💡 Hint used! ${globalHintsRemaining} hint(s) remaining.`, 'success');
    
    hintArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    setTimeout(() => {
        if (messageArea.innerHTML.includes('Hint used')) {
            messageArea.innerHTML = '';
        }
    }, 3000);
}

function checkAnswer() {
    if (answered) {
        showMessage('✅ You already answered this!', 'success');
        return;
    }
    
    const totalQuestions = currentQuestions.length;
    
    if (currentQuestionIndex >= totalQuestions) {
        showMessage('🎉 You already completed this level!', 'success');
        return;
    }
    
    let userAnswer = codeInput.value.trim();
    let correctAnswer = currentQuestions[currentQuestionIndex].answer;
    let pointsEarned = getCurrentPoints();
    
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        totalScore += pointsEarned;
        updateScoreDisplay();
        showMessage(`${currentQuestions[currentQuestionIndex].explanation} +${pointsEarned} points! 🎉`, 'success');
        answered = true;
        codeInput.disabled = true;
        hintBtn.disabled = true;
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';
        
        autoNextTimer = setTimeout(() => {
            currentQuestionIndex++;
            saveProgress();
            
            if (currentQuestionIndex < totalQuestions) {
                loadChallenge();
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            } else {
                let maxScore = totalQuestions * pointsEarned;
                let percentage = (totalScore / maxScore) * 100;
                const levelText = levelSelector.options[levelSelector.selectedIndex].text;
                const info = languageInfo[currentLanguage];
                
                codeDisplay.textContent = `🎉 CONGRATULATIONS! 🎉\n\n✨ YOU'VE PASSED THE ${info.name.toUpperCase()} ${levelText.toUpperCase()} LEVEL! ✨\n\n🌟 Score: ${totalScore}/${maxScore} points (${percentage}%)\n💡 Hints left: ${globalHintsRemaining}\n\n📚 Try another difficulty level or another language!`;
                questionDisplay.textContent = `Completed! 🏆`;
                
                if (totalScore === maxScore) {
                    showMessage(`🏆 PERFECT SCORE! 🏆 ${totalScore}/${maxScore} points in ${levelText}!`, 'success');
                } else {
                    showMessage(`🎯 ${levelText} COMPLETED! Score: ${totalScore}/${maxScore} points (${percentage}%)`, 'success');
                }
                submitBtn.disabled = true;
                codeInput.disabled = true;
                hintBtn.disabled = true;
            }
            autoNextTimer = null;
        }, 3000);
    } else {
        showMessage(`❌ Wrong! "${userAnswer}" is not correct. Try again.`, 'error');
        codeInput.focus();
    }
}

function showMessage(message, type) {
    messageArea.innerHTML = `<div class="message ${type}">${message}</div>`;
    setTimeout(() => {
        if (messageArea.innerHTML === `<div class="message ${type}">${message}</div>`) {
            if (type !== 'success') {
                messageArea.innerHTML = '';
            }
        }
    }, 5000);
}

function resetGame() {
    if (autoNextTimer) {
        clearTimeout(autoNextTimer);
        autoNextTimer = null;
    }
    
    totalScore = 0;
    currentLevel = 'easy';
    currentQuestionIndex = 0;
    answered = false;
    levelSelector.value = 'easy';
    globalHintsRemaining = TOTAL_HINTS;
    saveGlobalHints();
    resetAllProgress();
    loadQuestions();
    loadChallenge();
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    updateScoreDisplay();
    updateHintDisplay();
    showMessage('🔄 Game reset! All progress cleared. Score reset to 0. Hints reset to 3!', 'success');
}

// Debug functions
function viewProgress() {
    const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
    const progress = saved ? JSON.parse(saved) : {};
    console.table(progress);
    return progress;
}

function viewHints() {
    console.log(`Global hints remaining: ${globalHintsRemaining}`);
    return globalHintsRemaining;
}

window.viewProgress = viewProgress;
window.viewHints = viewHints;   
