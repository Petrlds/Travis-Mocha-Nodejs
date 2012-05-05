Travis-Mocha-Nodejs
===================

To test Travis-CI, Mocha and NodeJS all together

You can see the result <a href="http://travis-ci.org/#!/Petrlds/Travis-Mocha-Nodejs/builds/1252061">here</a>

Every PUSH to Github causes project-build.

Another interesting thing on Travis is 
<a href="http://about.travis-ci.org/docs/user/gui-and-headless-browsers/">GUI & Headless browser testing on travis-ci.org</a>

Of course, the best way is to test everything in one place, so I'm gonna work on it a little more.

What style of tests to use?
===================
Mocha provides several styles: TDD (with suite, test and so on), BDD (with describe, it and others), QUnit...

In Makefile and in test folder you can see that we can use all styles together with no pain. 
Here you can read about
<a href="http://java.dzone.com/articles/tdd-vs-bdd-or-why-can%E2%80%99t-we-all">TDD vs BDD</a>. 

Front-end testing
===================
No good thoughts about it yet. Browserling is not free and seems not to be well automatise. But it is good for 
cross-browser testing (take a look at this free tool from Adobe - <a href="https://browserlab.adobe.com/en-us/index.html">BrowserLab</a>).