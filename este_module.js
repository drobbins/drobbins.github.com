myPatients = Patients.find().fetch();
numPatients = myPatients.length;
console.log("Hello from a module in Este. There are", numPatients, "patients available.");
