function createAttendanceTracker() {
    let attendedClasses = 0;  // private variable, hidden inside closure

    return {
        markAttendance: function () {
            attendedClasses++;
            console.log("Attendance marked. Total attended:", attendedClasses);
        },
        getTotalAttendance: function () {
            console.log("Total attended classes:", attendedClasses);
            return attendedClasses;
        }
    };
}

// Usage
let tracker = createAttendanceTracker();

tracker.markAttendance();   // Attendance marked. Total attended: 1
tracker.markAttendance();   // Attendance marked. Total attended: 2
tracker.getTotalAttendance(); // Total attended classes: 2