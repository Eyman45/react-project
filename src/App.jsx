import {Route, Routes} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Empolye from "./pages/Empolye"
import Student from "./pages/student"

function App(){
    return <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/empolye" element={<Empolye />} />
        <Route path="/student" element={<Student />} />
    </Routes>
}

export default App