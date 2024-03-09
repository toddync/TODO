import { useCallback, useMemo } from "react";
import Task from "./Task";

/* eslint-disable react/prop-types */
const Tasks = ({ tasks, setTasks }) => {
    const flip = useCallback(
        (id) => {
            console.log("d");
            setTasks((tasks) =>
                tasks.map((task) =>
                    task.id == id ? { ...task, done: !task.done } : task
                )
            );
        },
        [setTasks]
    );

    const dell = useCallback(
        (id) => {
            setTasks((tasks) => tasks.filter((task) => task.id != id));
        },
        [setTasks]
    );

    return useMemo(
        () => (
            <div className="tasks">
                {tasks.map(
                    (task) =>
                        task.id && (
                            <Task
                                task={task}
                                key={crypto.randomUUID()}
                                flip={flip}
                                dell={dell}
                            />
                        )
                )}
            </div>
        ),
        [tasks, flip, dell]
    );
};

export default Tasks;
