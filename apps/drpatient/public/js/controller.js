module.exports.controller = function (objectTemplate, uses)
{
    var BaseController = uses('./baseController.js', "BaseController");
    var Doctor = uses("model.js", "Doctor");
    var Patient = uses("model.js", "Patient");
    var Appointment = uses("model.js", "Appointment");

    Controller = BaseController.extend("Controller", {

        // Main object references
        doctors:        {type: Array, of: Doctor, value: [], autoFetch: true},
        doctorsFetch:   {on: "server", body: function () {
            return Doctor.fetchByQuery({}).then(function (doctors) {
                this.doctors = doctors;
                this.doctorsPersistor={isFetched: true, isFetching: false};
                return doctors;
            }.bind(this));
        }},

        patients:       {type: Array, of: Patient, value: [], autoFetch: true},
        patientsFetch:   {on: "server", body: function () {
            return Patient.fetchByQuery().then(function (patients) {
                this.patients = patients;
                this.patientsPeristor={isFetched: true, isFetching: false};
                return patients;
            }.bind(this));
        }},

        // New doctors and patient properties
        doctorName:     {type: String},
        patientName:    {type: String},

        // New appointment properties
        appDoctor:      {type: Doctor},
        appPatient:     {type: Patient},
        appTime:        {type: Date},

        addPatient: {on: "server", body: function () {
            var patient = new Patient(this.patientName);
            this.patients.push(patient);
            this.patientName = "";
            patient.persist({});
        }},

        addDoctor:  {on: "server", body: function () {
            var doctor = new Doctor(this.doctorName)
            this.doctors.push(doctor)
            this.doctorName = "";
            doctor.persist({});
        }},

        addAppointment:  {on: "server", body: function () {
            var appointment = (new Appointment(this.appTime, this.appDoctor, this.appPatient));
            this.appTime = null;
            appointment.persist({});
        }},

        sync: {on: "server", body: function () {
            return objectTemplate.synchronizeKnexTableFromTemplate(Doctor)
                .then(function () {return objectTemplate.synchronizeKnexTableFromTemplate(Patient)})
                .then(function () {return objectTemplate.synchronizeKnexTableFromTemplate(Appointment)});
        }}
    });
}

