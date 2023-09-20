function doPost(e) {
    var doc = DocumentApp.openById('https://docs.google.com/spreadsheets/d/1VvFyJFgnLwjVTA_YKoPmH8ckSjNi3Bsrf_OclEiJ6C4/edit?usp=sharing'); // Replace with your Google Doc ID
    var body = doc.getBody();
    
    var name = e.parameter.name;
    var email = e.parameter.email;
    var phone = e.parameter.phone;
    var interestedIn = e.parameter.interestedIn;
    
    var timestamp = new Date();
    
    body.appendParagraph('Name: ' + name);
    body.appendParagraph('Email: ' + email);
    body.appendParagraph('Phone: ' + phone);
    body.appendParagraph('Interested In: ' + interestedIn);
    body.appendParagraph('Timestamp: ' + timestamp);
    
    return ContentService.createTextOutput("Form submitted successfully.");
  }
  