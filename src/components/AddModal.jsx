import { useCallback } from "react";

// eslint-disable-next-line react/prop-types
const AddModal = ({ setShowModal, setTasks }) => {
    const addTask = useCallback(() => {
        let newTask = document.querySelector(".form__input").value;
        if (newTask.length > 0) {
            setTasks((tasks) => [
                { title: newTask, done: false, id: crypto.randomUUID() },
                ...tasks,
            ]);
            setShowModal(false);
        }
    }, [setTasks, setShowModal]);

    return (
        <div
            className="Modal"
            onClick={(e) => e.currentTarget == e.target && setShowModal(false)}>
            <div className="form">
                <input
                    type="text"
                    className="form__input"
                    placeholder="Type anything..."
                    autoFocus
                />
                <span
                    className="icon"
                    onClick={addTask}>
                    <div className="icon__settings">
                        <ion-icon name="add" />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default AddModal;
