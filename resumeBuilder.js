// The code in this file is used to build my resume

// The following code defines a variable (bio) that contains my biographical information
var bio = {
  "name": "Michael Sanderson",
  "role": "Strata Administrator",
  "contacts": {
    "mobile": "832-350-2309",
    "email": "m_sanderson96@sbcglobal.net",
    "github": "@ms3151",
    "location": "The Woodlands, TX"
  },
  "welcomeMessage": "Skilled professional in front end web development",
  "skills": ["Strata", "MS Office", "HTML", "CSS", "Python", "JavaScript"],
  "bioPic": "images/profile.jpg"

}

// The following code is a function that contains code that will define variables and append my biographical data to the resume
bio.display = function() {
  $("#header").prepend(HTMLbioPic.replace('%data%', bio.bioPic));
  $("#header").prepend(HTMLheaderRole.replace('%data%', bio.role));
  $("#header").prepend(HTMLheaderName.replace('%data%', bio.name));

  $("#header").append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
  $("#header").append(HTMLskillsStart.replace('%data%', bio.skillstart));

  for (var i = 0; i < bio.skills.length; i++) {
      $('#skills').prepend(HTMLskills.replace('%data%', bio.skills[i]));

  }

  var email = HTMLemail.replace('%data%', bio.contacts.email);
  var mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var github = HTMLgithub.replace('%data%', bio.contacts.github);
  var location_home = HTMLlocation.replace('%data%', bio.contacts.location);

  var contactsArray = [email, mobile, github, location_home];

  for (var i = 0; i < contactsArray.length; i++) {
      $("#topContacts").append(contactsArray[i]);
      $("#footerContacts").append(contactsArray[i]);
  }

};
bio.display();

// The following code defines a variable (work) that contains my work experience
var work = {
  "jobs": [
    {
      "employer": "AT&T",
      "title": "Lead Financial Systems Analyst",
      "location": "Houston, TX",
      "dates": "January 2010 - Current",
      "description": "Responsible for the support of the Strata application that is part of the AT&T collections system. This support also includes project and trial implementations."
    },

    {
      "employer": "AT&T",
      "title": "Senior Programmer",
      "location": "Dallas, TX",
      "dates": "January 2002 - December 2009",
      "description": "Responsible for the support of the Collections Data Warehouse. This support included the generation of canned business intelligence reports as well as various ad-hoc queries."
    },

    {
      "employer": "AT&T",
      "title": "Coach Leader",
      "location": "Houston, TX",
      "dates": "December 1998 - December 2001",
      "description": "Responsible for the management and development of a team of collections representatives."
    }
  ]
}

// The following code is a function that contains code that will define variables and append my job experience to the resume
work.display = function() {

    for (var i = 0; i < work.jobs.length; i++) {

    $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

      $(".work-entry:last").append(formattedEmployer, formattedTitle, formattedLocation, formattedDates, formattedDescription);

    }

};
work.display();

// The following code defines a variable (projects) that contains key projects i've worked on
var projects = {
  "projects": [
    {
      "title": "One Collect",
      "dates": "2017",
      "description": "This project leverages new versions of the software in place now, and allows collections on all portfolios of customer accounts at AT&T."
    },

    {
      "title": "Enterprise Telecommunications Risk Assessment Collections System (eTRACS)",
      "dates": "2005",
      "description": "This project created from the ground up a new software based risk assessment engine and collector workflow system."
    }
  ]
}

// The following code is a function that contains code that will define variables and append my key projects to the resume
projects.display = function() {

    for (var i = 0; i < projects.projects.length; i++) {

    $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

    }

};
projects.display();

// The following code defines a variable (education) that contains my earned college degree and current online course
var education = {
  "schools": [
    {
      "name": "Texas A&M University",
      "location": "College Station, TX, US",
      "degree": "BBA",
      "major": ["Management"],
      "dates": "1997"
    }
  ],
  "onlineCourses": [
    {
      "title": "Intro to Programming",
      "school": "Udacity",
      "dates": "2017",
      "url": "http://www.udacity.com"
    }
  ]
}

// The following code is a function that contains code that will define variables and append my college degree and online course to the resume
education.display = function() {

    for (var i = 0; i < education.schools.length; i++) {

    $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);

      $(".education-entry:last").append(formattedName, formattedLocation, formattedDates, formattedDegree, formattedMajor);

    };

    for (var i = 0; i < education.onlineCourses.length; i++) {

      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

      $(".education-entry:last").append(HTMLonlineClasses);
      $(".education-entry:last").append(formattedTitle, formattedSchool, formattedDates, formattedURL);

    }

};
education.display();

// The following code adds a Google map of the locations in which I've lived and worked to my resume
$("#mapDiv").append(googleMap);
