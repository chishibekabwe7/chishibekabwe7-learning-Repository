export const Task = (props) => {
    <div className="task" key={props.id}>
            <h2>{props.taskName}</h2>

            {/* Deleting a list item */}
            <button onClick={() => deleteTask(props.id)}>x</button>
          </div>
}