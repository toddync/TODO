import { useMemo } from "react";

const Task = ({ task, flip, dell }) => {
    return useMemo(
        () => (
            <div className="chip">
                <div
                    className="switch"
                    onClick={() => flip(task.id)}>
                    <div className="switch_ done">
                        <input
                            className="inp"
                            id={task.id}
                            type="checkbox"
                            checked={task.done}
                            onChange={() => {}}
                        />
                        <label htmlFor={task.id} />
                    </div>
                </div>
                <p>{task.title}</p>
                <div
                    className="chip__close"
                    onClick={() => dell(task.id)}>
                    <ion-icon name="close" />
                </div>
            </div>
        ),
        [task, flip, dell]
    );
};

export default Task;
