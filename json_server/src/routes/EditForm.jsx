import { useParams } from "react-router-dom"


export default function EditForm(){
    const { id } = useParams()
    return(
        <div>
            <p>Se liga nessa parada { id } </p>
        </div>
    )
}