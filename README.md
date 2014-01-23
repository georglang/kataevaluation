KATA Evaluation
==============

Introduction
--------------
I would like to pick up the topic Transformation Priority Premise which was defined by Uncle Bob Martin http://blog.8thlight.com/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html 
to figure out if its possible to define Code Quality depending on this approach.

My idee is to choose about 5-10 different Coding Dojo KATAs and for each KATA
do multiple Sessions of developing the Production Code by TDD.

After the development process I will evaluate the different KATAs and Sessions depending on the Transformation Priority Premise.


**To get as many different versions and get a lot of results to evaluate I need Your help, please participate to this project and check in your solutions of the different KATA´s**

Thanks a lot.


Getting started
----------------
----------------
1. Choose the KATA that you like
2. Branch from master and name it like the KATA and a Session number e.g. fizzBuzzS4
3. Setting up your prefferd testing environment (in the browser or with Web Storm) instructions are below

4. Define your Tests in test/test-spec.js
5. Define your Production Code in test/test.js as well


The Rules are simple
---------------------
---------------------
1. Implement Production Code only if a test fails
2. Write tests first and do Baby Steps
3. Commit after every change of the test code
  - for test changing commits name your commit message: 'test'
4. Commit after each change of the Production Code
  - for Production Code changing commits name your commit message: 'imp'
5. For refactoring a test name your commit message 'ref test'


For an example how to commit look at the branch romanNumeralsS2:
https://github.com/georglang/kataevaluation/tree/romanNumeralsS2


Setting up your test environment
---------------------------------
There are two different ways to use Jasmine as test environment.

  - Open the jasmineRunner.html in your Browser
  - Or install jasmine-node for Webstorm


Install jasmine-node for Web Storm
----------------------------------
Open WebStorm and go to Run -> Edit Configurations -> click the + Button and add NodeJs -> click Configuration Tab on the right side and insert the following to the texfields:

- Working directory: Path to this directory
- JavaScript file: node_modules\jasmine-node\bin\jasmine-node
- Application parameters: test

Execute the tests:
Go to Run -> Run ...