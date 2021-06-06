import { Button } from "@sberdevices/plasma-ui";
import styled from 'styled-components'



const HabitCreationButton = ({onClick}) => {
  return (

        <Button text="Добавить" 
        onClick={onClick} view="clear" />
      
  )
}

export default HabitCreationButton;
