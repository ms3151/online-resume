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
  "bioPic": "Insert Pic Here !"

}

var formattedName = HTMLheaderName.replace(
  "%data%", bio.name);

var formattedRole = HTMLheaderRole.replace(
  "%data%", bio.role);

var formattedMobile = HTMLmobile.replace(
  "%data%",bio.contacts.mobile);

var formattedEmail = HTMLemail.replace(
  "%data%",bio.contacts.email);

var formattedGithub = HTMLgithub.replace(
  "%data%",bio.contacts.github);

var formattedLocation = HTMLlocation.replace(
  "%data%",bio.contacts.location);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace(
  "%data%",bio.welcomeMessage);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {

  $("header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace(
    "%data%",bio.skills[0]);
  $("skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace(
    "%data%",bio.skills[1]);
  $("skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace(
    "%data%",bio.skills[2]);
  $("skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace(
    "%data%",bio.skills[3]);
  $("skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace(
    "%data%",bio.skills[4]);
  $("skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace(
    "%data%",bio.skills[5]);
}

var education = {
  "schools": [
    {
      "name": "Texas A&M University",
      "city": "College Station, TX, US",
      "dates": "1997",
      "degree": "BBA",
      "major": ["Management"]
    }
    //{
      //"name": "University of Phoenix",
      //"city": "Online",
      //"dates": "2015",
      //"degree": "MBA",
      //"major": ["Business Administration"]
    //},
  ],
  "onlineCourses": [
    {
      "title": "Intro to Programming",
      "school": "Udacity",
      "dates": "2017",
      "url": "Insert URL Here !"
    }
  ]
};

var HTMLschoolStart = '<div class="education-entry"></div>';
$("#education").append(HTMLschoolStart);

var formattedschoolName = HTMLschoolName.replace(
  "%data%",education.schools.name);
$("#education").append(formattedschoolName);


)
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
};

var projects = {
  "projects": [
    {
      "title": "Enterprise Telecommunications Risk Assessment Collections System (eTRACS)",
      "dates": "2005",
      "description": "This project created from the ground up a new software based risk assessment engine and collector workflow system."
    },
    {
      "title": "One Collect",
      "dates": "2017",
      "description": "This project leverages new versions of the software in place now, and allows collections on all portfolios of customer accounts at AT&T."
    }
  ]
};

// var formattedName = HTMLheaderName.replace(
//  "%data%", bio.name);

//$("#header").append(formattedName);
