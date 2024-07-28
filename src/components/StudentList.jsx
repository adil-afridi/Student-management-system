import StudentTable from "./StudentTable";

function StudentList({students,setStudents}) {
 
  return (
    <>
      <h1>Students List</h1>
      <StudentTable students={students} setStudents={setStudents}/>
    </>
  );
}

export default StudentList;
