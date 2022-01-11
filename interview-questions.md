# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: Props in React is short for "properties". It is display information which is passed from parent components to children components. Basically, it is like an image of the current state which allows components to display newly updated data.

  Researched answer: In addition to the answer above, the information which is passed from parent to child component, via props, is done so by calling on the child component, in the return of the parent component; in the component call, a programmer can assign data to a variable, and then access that variable, in the child component, with props. In addition to data, props can also pass methods down to child components. By passing methods to child components, they have access to perform logic, as well as display data.



2. What is a DOM event?

  Your answer: The DOM is the actual display of a webpage; it is what the user sees when they are on the website itself. So a DOM event happens after a user interacts with a component on a webpage- this causes the "virtual DOM" to refresh and render a specific change to the DOM. The change rendered from the virtual DOM, to the DOM, is the DOM event.

  Researched answer: In addition to the answer above, a DOM event can occur either with or without user interaction. An example of a DOM event without user interaction, is when a webpage finishes downloading. An example with user interaction, is when a user clicks on a button. A DOM event usually triggers a javascript method to run, which performs logic on the component and changes the display.



3. What is object-oriented programming? How is it different than functional programming?

  Your answer: OOP is a way of programming, which involves the storing and manipulation of data through objects. In functional programing, data is manipulated through the logic of functions, that exist independent of objects.

  Researched answer: The idea of OOP is to create classes, which have specific attributes, but have dynamic values. An object is a specific instance of that class, which has the methods and data attributes of that class, with its own unique values. OOP is usually used when many instances of a "thing" need to perform a small amount operations.

  The idea of functional programing is to have a sequence of functions evaluate to create a program. The functions take input values and perform logic. The functions themselves are not mutated by the state of the program. Functional programming is usually used when many operations need to be performed on a small amount of items.



4. What is the difference between a Float and an Integer in Ruby?

  Your answer: The difference between a float and an integer in Ruby, is that they each belong to a different class. Specifically,
  an integer is a whole number, and a float is a number with a decimal point.

  Researched answer: In addition to the answer above, I found that integers can be either positive or negative whole numbers. Also, integer values can be written with underscores(_) to make large numbers more readable; the program will know to skip over the underscores and print the integer without them. Adding any float to an integer will produce a float.



5. Ruby has an implicit return. What does that mean?

  Your answer: Implicit return essentially  means that you don't need to actually write the word "return" to have a value returned.

  Researched answer: Implicit return will return the value that comes after the last instruction that is evaluated in the method. So if you want the method to return the same thing every time, you can simply write the thing you want returned, in the body of the method. If you are using a conditional, you can write what you want returned in the line below the conditional statement, without the word "return". This means that once an expression evaluates to true, the next piece of data is what is returned by the method.



## Looking Ahead: Terms for Next Week

1. Instance Variable: They are variables that have a local scope, meaning they belong to the specific class they are assigned to. You begin the definition of an instance variable with an @ sign.

2. PostgreSQL: It is an open-source database system that supports relational and non-relational querying.

3. Ruby on Rails: This is a back-end framework built on the Ruby language, with "programmer happiness" being a main principle of its construction.

4. ORM: ORM uses object oriented programing to convert data between systems.

5. Active Record: This is a type of ORM, used by Rails, which lets you interact with data stored in a database.
