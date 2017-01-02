module.exports.model = function (objectTemplate, uses)
{
    var Doctor = uses("model.js", "Doctor");
    var Patient = uses("model.js", "Patient");
    var Appointment = uses("model.js", "Appointment");

    objectTemplate.create("Doctor", {
        name:           {type: String},
        appointments:   {type: Array, of: Appointment, value: []},
        init: function (name) {this.name = name}
    });

    objectTemplate.create("Patient", {
        name:           {type: String},
        appointments:   {type: Array, of: Appointment, value: []},
        init: function (name) {this.name = name}
    });

    objectTemplate.create("Appointment", {
        doctor:         {type: Doctor},
        patient:        {type: Patient},
        when:           {type: Date},
        init: function(when, doctor, patient) {
            this.when = when;
            this.doctor = doctor;
            this.patient = patient;
            doctor.appointments.push(this)
            patient.appointments.push(this);
        }
    });
}

