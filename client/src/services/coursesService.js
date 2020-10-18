const { useFirestore } = require("reactfire");


class CoursesServices {
    coursesRef = useFirestore().collection("courses")

    getAllCourses = () => {
        return this.coursesRef.get().then((test) => console.log(test));
    }


}