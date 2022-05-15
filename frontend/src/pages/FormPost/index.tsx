import FormMovie from "components/FormMovie"
import { useParams } from "react-router-dom"

function FormPost(){
  const params = useParams();
    return(
      <FormMovie title={`${params.title}`} image={`${params.image}`}/>
    ) 
}

export default FormPost