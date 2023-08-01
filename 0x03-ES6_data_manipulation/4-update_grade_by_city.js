/**
 * Updates the grades of a list of students in a given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {String} city - The city of students.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - The new grades to be given to a student.
 * @returns {{id: Number, firstName: String, location: String, grade: Number | String}[]}
 */

function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const defaultGrade = 'N/A';
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id)?.grade || defaultGrade;
      
      return {
        ...student,
        grade: studentGrade,
      };
    });
}
module.exports = updateStudentGradeByCity;
