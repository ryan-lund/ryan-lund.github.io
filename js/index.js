var introSkipped=false;

window.onload = function() {
    if(window.location.hash === "") {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 1); //reset window to top on load and on reload, since scroll lock will be on
        firstIntro();
    } else {
        referIntro();
    }
};

window.onscroll = function() {
    replaceHash();
};

replaceHash = function() {
    if (0 > document.getElementById("skills").getBoundingClientRect().top) {
        if (document.title !== "Ryan Lund | Skills") {
            document.title = "Ryan Lund | Skills";
            if (history.replaceState) {
                history.replaceState(null, null, '#skills');
            }
            else {
                window.location.hash = '#skills';
            }
        }
    } else if (0 > document.getElementById("volunteering").getBoundingClientRect().top) {
        if (document.title !== "Ryan Lund | Volunteering") {
            document.title = "Ryan Lund | Volunteering";
            if (history.replaceState) {
                history.replaceState(null, null, '#volunteering');
            }
            else {
                window.location.hash = '#volunteering';
            }
        }
    } else if (0 > document.getElementById("education").getBoundingClientRect().top) {
        if (document.title !== "Ryan Lund | Education") {
            document.title = "Ryan Lund | Education";
            if (history.replaceState) {
                history.replaceState(null, null, '#education');
            }
            else {
                window.location.hash = '#education';
            }
        }
    } else if (0 > document.getElementById("resume").getBoundingClientRect().top) {
        if (document.title !== "Ryan Lund | Resume") {
            document.title = "Ryan Lund | Resume";
            if (history.replaceState) {
                history.replaceState(null, null, '#resume');
            }
            else {
                window.location.hash = '#resume';
            }
        }
    } else {
        if (document.title !== "Ryan Lund") {
            document.title = "Ryan Lund";
            if (history.replaceState) {
                history.replaceState(null, null, '#');
            }
            else {
                window.location.hash = '#';
            }
        }
    }
};

scrollLock = function(){
    document.body.style.overflowY = "hidden";
};

scrollUnlock = function(){
    document.body.style.overflowY = "scroll";
};

firstIntro = function(){
    scrollLock();
    var typed = new Typed("#loading-text",
        {
            strings: ["Hi, I'm Ryan, a third year EECS student at UC Berkeley.", "Here's a little more about me!"],
            typeSpeed: 50,
            backSpeed: 50,
            startDelay: 1500,
            backDelay: 1000,
            smartBackspace: false,
            onComplete: function(){setTimeout(postIntro, 1000)}
        });
    typed.start();
};

referIntro = function(){
    var typed = new Typed("#loading-text",
        {
            strings: ["Hi, I'm Ryan, a third year EECS student at UC Berkeley.", "Here's a little more about me!"],
            typeSpeed: 50,
            backSpeed: 50,
            startDelay: 1500,
            backDelay: 1000,
            smartBackspace: false,
        });
    typed.start();
};

postIntro = function () {
    if (!introSkipped) {
        introSkipped = true;
        scrollUnlock();
        scrollToResume();
    }
};

scrollToResume = function () {
    window.scrollTo({
        top: document.getElementById("resume").getBoundingClientRect().top,
        behavior: "smooth"
    });
};

/* ANGULAR COMPONENTS */
var index = angular.module('index', []);

index.controller('indexController', function ($scope){
    $scope.resumeItems = [
        {
            title: 'SDE Intern',
            company: 'Amazon.com',
            startDate: 'May 2018',
            endDate: 'Present',
            actions: [
                "Worked on the pricing team for Amazon Flex",
                "Developed tool for delivery station operators used across Amazon shipping operations"
            ]

        }, {
            title: 'SDE Intern',
            company: 'Centrify Corporation',
            startDate: 'May 2017',
            endDate: 'August 2017',
            actions: [
                "1",
                "2"
            ]
        }
    ]
});