Roman Numerals
About this Kata
I wasn’t there, but I believe this Kata was performed at XP2001 by Kent Beck. Here is [a video of Karl Scotland doing this Kata in Excel at agile 2008] Here is [a video of JonJagger doing this Kata in Ruby using CyberDojo]

Difficulty - Easy.

Problem Description
The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis [1]. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.

The Romans wrote numbers using letters : I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets)

Part I
The Kata says you should write a function to convert from normal numbers to Roman Numerals: eg

     1 --> I
     10 --> X
     7 --> VII

etc.

For a full description of how it works, take a look at [this useful reference website] : which includes an implementation of the Kata in javascript.

There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn’t tend to go any higher)

Part II
Write a function to convert in the other direction, ie numeral to digit

Getting Started with Roman Numerals Kata:
first clone the repository with the link, https://github.com/mousumi-ish/RomanNumeralsKata.TDD.git.

command is ,git clone https://github.com/mousumi-ish/RomanNumeralsKata.TDD.git

Prerequisites for running the tests is:
node current version

Installing dependencies: npm install

Running The Program: node intToRoman.js

Running Tests: npm test
