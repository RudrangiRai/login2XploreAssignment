// Log message indicating the script is running
console.log("This is my Login2Xplore assignment");

// Base URL and API endpoints for JsonPowerDB
const jpdbBaseURL = "http://api.login2explore.com:5577";
const jpdbIRL = "/api/irl"; // Index Retrieval Language (for fetching data)
const jpdbIML = "/api/iml"; // Index Manipulation Language (for inserting/updating data)

// Database and relation names
const empDBName = "SCHOOL-DB";
const empRelationName = "STUDENT-TABLE";

// Connection token for authentication
const connToken = "90931744|-31949307231931541|90963389";

// Function to save record number to Local Storage
const saveRecNo2LS = (jsonObj) => {
  const lvData = JSON.parse(jsonObj.data);
  localStorage.setItem("recno", lvData.rec_no);
};

// Function to get Roll No as JSON object
const getRollNoAsJsonObj = () => {
  const rollno = $("#rollno").val();
  return JSON.stringify({ id: rollno });
};

// Function to fill the form with retrieved student data
const fillData = (jsonObj) => {
  saveRecNo2LS(jsonObj); // Save record number to Local Storage
  const record = JSON.parse(jsonObj.data).record;
  $("#studentName").val(record.name);
  $("#studentClass").val(record.class);
  $("#birthDate").val(record.birthDate);
  $("#address").val(record.address);
  $("#enrollmentDate").val(record.enrollmentDate);
};

// Function to reset the form
const resetForm = () => {
  $(
    "#rollno, #studentName, #studentClass, #birthDate, #address, #enrollmentDate"
  ).val(""); // Clear input fields
  $("#rollno").prop("disabled", false);
  $("#save, #change, #reset").prop("disabled", true);
  $("#rollno").focus(); // Move cursor to Roll No field
};

// Function to validate form data before saving or updating
const validateData = () => {
  const rollno = $("#rollno").val();
  const studentName = $("#studentName").val();
  const studentClass = $("#studentClass").val();
  const birthDate = $("#birthDate").val();
  const address = $("#address").val();
  const enrollmentDate = $("#enrollmentDate").val();

  if (!rollno) {
    alert("Roll No. is missing");
    $("#rollno").focus();
    return "";
  }
  if (!studentName) {
    alert("Student name is missing");
    $("#studentName").focus();
    return "";
  }
  if (!studentClass) {
    alert("Student class is missing");
    $("#studentClass").focus();
    return "";
  }
  if (!birthDate) {
    alert("Date of birth is missing");
    $("#birthDate").focus();
    return "";
  }
  if (!address) {
    alert("Address is missing");
    $("#address").focus();
    return "";
  }
  if (!enrollmentDate) {
    alert("Date of enrollment is missing");
    $("#enrollmentDate").focus();
    return "";
  }

  // Create a JSON object with validated data
  return JSON.stringify({
    id: rollno,
    name: studentName,
    class: studentClass,
    birthDate,
    address,
    enrollmentDate,
  });
};

// Function to retrieve student data from the database
const getStudent = () => {
  const rollJsonObj = getRollNoAsJsonObj();
  const getRequest = createGET_BY_KEYRequest(
    connToken,
    empDBName,
    empRelationName,
    rollJsonObj
  );
  
  jQuery.ajaxSetup({ async: false });
  const resJsonObj = executeCommandAtGivenBaseUrl(
    getRequest,
    jpdbBaseURL,
    jpdbIRL
  );
  console.log(resJsonObj);
  jQuery.ajaxSetup({ async: true });

  if (resJsonObj.status === 400) {
    // If student not found, enable Save and Reset buttons
    $("#save, #reset").prop("disabled", false);
    $("#studentName").focus();
  } else if (resJsonObj.status === 200) {
    // If student found, populate form fields and enable Change and Reset buttons
    $("#rollno").prop("disabled", true);
    fillData(resJsonObj);
    $("#change, #reset").prop("disabled", false);
    $("#studentName").focus();
  }
};

// Function to save new student data to the database
const saveData = () => {
  const jsonStrObj = validateData();
  if (!jsonStrObj) return "";

  const putRequest = createPUTRequest(
    connToken,
    jsonStrObj,
    empDBName,
    empRelationName
  );
  
  jQuery.ajaxSetup({ async: false });
  const resJsonObj = executeCommandAtGivenBaseUrl(
    putRequest,
    jpdbBaseURL,
    jpdbIML
  );
  jQuery.ajaxSetup({ async: true });

  console.log(resJsonObj);
  resetForm();
  $("#rollno").focus();
};

// Function to update student data in the database
const changeData = () => {
  $("#change").prop("disabled", true);
  const jsonChg = validateData();

  const updateRequest = createUPDATERecordRequest(
    connToken,
    jsonChg,
    empDBName,
    empRelationName,
    localStorage.getItem("recno") // Retrieve record number from local storage
  );
  
  jQuery.ajaxSetup({ async: false });
  const resJsonObj = executeCommandAtGivenBaseUrl(
    updateRequest,
    jpdbBaseURL,
    jpdbIML
  );
  jQuery.ajaxSetup({ async: true });

  console.log(resJsonObj);
  resetForm();
  $("#rollno").focus();
};
