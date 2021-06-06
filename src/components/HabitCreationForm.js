import {
  Card,
  CardBody,
  TextField,
  TextBox,
  CardContent,
  Button,
  Stepper,
  
} from "@sberdevices/plasma-ui";
import styled from "styled-components";
import {
  background, // Цвет подложки
  gradient, // Градиент
} from "@sberdevices/plasma-tokens";

const CreationFormField = styled(TextField)`
  flex-grow: 1;
  margin-right: 1rem;
  
  @media only screen and (max-width: 600px) {
    margin-right: 0;
  
  }
`;

const StepperWrapper = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-left: 1rem;
  }
`

const HabitCard = styled(Card)`

  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  background-color: ${background};
  background-image: ${gradient};
  @media only screen and (max-width: 900px) {
    width: 90%;
  }

`;
const HabitCreationFormWrapper = styled.div`
  display: flex;
  margin: 2.5rem 0;
  @media only screen and (max-width: 600px) {
    margin: 2rem 0;
    flex-direction: column;
  }
`;

const StepperLabel = styled(TextBox)`
  margin-bottom: 0.5rem;
  @media only screen and (max-width: 900px) {
    margin-right: 1rem
  }
`;

const HabitCreationForm = ({
  setPopupActive,
  createHabitCountState,
  createHabitNameState,
  setCreateHabitNameState,
  setCreateHabitCountState,
  createHabitName,
  createHabbitAction,
}) => {
  return (
    <HabitCard>
      <CardBody>
        <CardContent>
          <TextBox size="l" title="Создание привычки" />
          <HabitCreationFormWrapper>
            <CreationFormField
              label="Название привычки"
              value={createHabitNameState}
              onChange={(text) => {
                setCreateHabitNameState(text.target.value);
              }}
            />
            <StepperWrapper>
              <StepperLabel size="m" subTitle="Время выработки" />
              <Stepper
                step={1}
                value={createHabitCountState}
                onChange={(count) => {
                  setCreateHabitCountState(count);
                }}
              />
            </StepperWrapper>
          </HabitCreationFormWrapper>
          <Button
            text="Создать"
            view="primary"
            onClick={() => {
              if (createHabitNameState) {
                setPopupActive(false);
                createHabbitAction();
              }
            }}
          />
        </CardContent>
      </CardBody>
    </HabitCard>
  );
};

export default HabitCreationForm;
