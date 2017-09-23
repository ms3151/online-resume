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

var work = {
  "jobs": [
    {
      "employer": "AT&T",
      "title": "Lead Financial Systems Analyst",
      "location": "Houston, TX",
      "dates": "January 2010 - Current",
      "description": "Responsible for the support of the Strata application that is part of the AT&T collections system. This support also includes project and trial implementations."
    }
  ]
}

work.display = function() {
    $("#workExperience").append(HTMLworkStart.replace('%data%', work.workstart));

    for (var i = 0; i < work.jobs.length; i++) {
        $('#workExperience').append(HTMLworkEmployer.replace('%data%', work.jobs.employer));
        $('#workExperience').append(HTMLworkTitle.replace('%data%', work.jobs.title));
        $('#workExperience').append(HTMLworkDates.replace('%data%', work.jobs.dates));
        $('#workExperience').append(HTMLworkLocation.replace('%data%', work.jobs.location));
        $('#workExperience').append(HTMLworkDescription.replace('%data%', work.jobs.description));
    }

};
work.display();

var projects = {
  "projects": [
    {
      "title": "One Collect",
      "dates": "2017",
      "description": "This project leverages new versions of the software in place now, and allows collections on all portfolios of customer accounts at AT&T."
    }
  ]
}

projects.display = function() {
    $("#projects").append(HTMLprojectStart.replace('%data%', projects.projectstart));

    for (var i = 0; i < projects.projects.length; i++) {
        $('#projects').append(HTMLprojectTitle.replace('%data%', projects.projects.title));
        $('#projects').append(HTMLprojectDates.replace('%data%', projects.projects.dates));
        $('#projects').append(HTMLprojectDescription.replace('%data%', projects.projects.description));
    }

};
projects.display();

var education = {
  "schools": [
    {
      "name": "Texas A&M University",
      "city": "College Station, TX, US",
      "dates": "1997",
      "degree": "BBA",
      "major": ["Management"]
    }
  ],
  "onlineCourses": [
    {
      "title": "Intro to Programming",
      "school": "Udacity",
      "dates": "2017",
      "url": "Insert URL Here !"
    }
  ]
}

education.display = function() {
  $("#education").append(HTMLschoolStart.replace('%data%', education.schoolStart));

  var name = HTMLschoolName.replace('%data%', education.schools.name);
  var degree = HTMLschoolDegree.replace('%data%', education.schools.degree);
  var dates = HTMLschoolDates.replace('%data%', education.schools.dates);
  var location = HTMLschoolLocation.replace('%data%', education.schools.city);
  var major = HTMLschoolMajor.replace('%data%', education.schools.major);

  var schoolsArray = [name, degree, dates, location, major];

  for (var i = 0; i < schoolsArray.length; i++) {
      $("#education").append(schoolsArray[i]);
  }

  $("#education").append(HTMLonlineClasses.replace('%data%', education.onlineClasses));

  var title = HTMLonlineTitle.replace('%data%', education.onlineCourses.title);
  var school = HTMLonlineSchool.replace('%data%', education.onlineCourses.school);
  var daes_online = HTMLonlineDates.replace('%data%', education.onlineCourses.dates);
  var url = HTMLonlineURL.replace('%data%', education.onlineCourses.url);

  var onlineArray = [title, school, dates_online, url];

  for (var i = 0; i < onlineArray.length; i++) {
      $("#education").append(onlineArray[i]);
  }

};
education.display();

var map;

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

map = new google.maps.Map(document.querySelector('#mapDiv'), mapOptions);

function locationFinder() {
  var locations = [];

  locations.push(bio.contacts.location);

  education.schools.forEach(function(school){
    locations.push(school.location);
  });

  work.jobs.forEach(function(job){
    locations.push(job.location);
  });

  return locations;
}

function createMapMarker(placeData) {

  var lat = placeData.geometry.location.lat();
  var lon = placeData.geometry.location.lng();
  var name = placeData.formatted_address;
  var bounds = window.mapBounds;

  var marker = new google.maps.Marker({
    map: map,
    position: placeData.geometry.location,
    title: name
  });

  var infoWindow = new google.maps.InfoWindow({
    content: name
  });

  bounds.extend(new google.maps.LatLng(lat, lon));
  map.fitBounds(bounds);
  map.setCenter(bounds.getCenter());
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    createMapMarker(results[0]);
  }
}

function pinPoster(locations) {

  var service = new google.maps.places.PlacesService(map);

    locations.forEach(function(place){

    var request = {
      query: place
    };

    service.textSearch(request, callback);
  });
}

window.mapBounds = new google.maps.LatLngBounds();

locations = locationFinder();

pinPoster(locations);

}
