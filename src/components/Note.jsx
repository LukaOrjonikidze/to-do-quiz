import EditIcon from "../components/Icons/EditIcon";
import DeleteIcon from "../components/Icons/DeleteIcon";

function Note() {

  return (
    <div className="note">
        <div className="flex-gap-1">
          <input className="checkbox" type="checkbox"/>
          <strong>NOTE #1</strong>
        </div>
        <div className="flex-gap-1">
          <EditIcon />
          <DeleteIcon />
        </div>
    </div>
  )
}

export default Note
