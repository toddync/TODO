import "./App.css";
import { useState, useEffect } from "react";
import Clock from "./components/Clock";
import Tasks from "./components/Tasks";
import AddModal from "./components/AddModal";

function App() {
    const [showModal, setShowModal] = useState(false);

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        tasks.length > 0 &&
            localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.getItem("tasks") &&
            setTasks(JSON.parse(localStorage.getItem("tasks")));
    }, []);

    return (
        <>
            <Clock setShowModal={setShowModal} />
            <Tasks
                tasks={tasks}
                setTasks={setTasks}
            />
            {showModal && (
                <AddModal
                    setShowModal={setShowModal}
                    setTasks={setTasks}
                />
            )}
        </>
    );
}

export default App;
