import {
  Card,
  CardBody,
  CardContent,
  TextBox,
  Row,
  Col,
  Container,
  Checkbox,
} from "@sberdevices/plasma-ui";
import { IconTrash } from "@sberdevices/plasma-icons";
import styled from "styled-components";
import { formatCurrency } from "@sberdevices/plasma-ui/utils";

const HabitBoxRow = styled(Row)`
  margin: 2rem 0;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const IconTrashContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const HabitCardContainer = styled(CardContent)`
  position: relative;
`;

const DateTextBox = styled(TextBox)`
  margin-bottom: 1rem;
  text-align: center;
`;
const HabitCard = styled(Card)`
  margin: 1.5rem 2rem 0;
  :last-of-type {
    margin-bottom: 10rem;
  }
`;

const HabitBox = ({
  habitId,
  habitName,
  progressValue,
  maxValue,
  deleteHabit,
  habitProgress,
  updateActivity,
}) => {
  const subTitle = `${progressValue}/${maxValue}`;

  let now = new Date();

  const weekDay = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

  let days = [];

  const dateParse = (date) => `0${date}`.slice(-2);

  for (let i = 0; i < 5; ++i) {
    let day = dateParse(now.getDate());
    let month = dateParse(now.getMonth() + 1);
    let year = now.getFullYear();

    let date = year + "-" + month + "-" + day + "T19:47:00.571Z";

    days.push([i, date, weekDay[now.getDay()]]);
    now = new Date(now.getTime() - 1000 * 60 * 60 * 24);
  }
  days = days.reverse();

  return (
    <HabitCard>
      <CardBody>
        <HabitCardContainer>
          <Container>
            <HabitBoxRow>
              <Col type="calc" size={6}>
                <TextBox size="l" subTitle={subTitle} title={habitName} />
              </Col>

              {days.map((m) => (
                <Col type="calc" size={1} key={m[0]}>
                  <DateTextBox
                    size="m"
                    title={m[1].slice(5, 10)}
                    subTitle={m[2]}
                  />
                  <CheckboxContainer>
                    <Checkbox
                      checked={habitProgress!=undefined ? habitProgress[m[0]] : 1}
                      onChange={(target) =>
                        updateActivity(habitId, m[1], target.target.checked)
                      }
                    />
                  </CheckboxContainer>
                </Col>
              ))}
            </HabitBoxRow>
          </Container>
          <IconTrashContainer
            onClick={() => {
              deleteHabit(habitId);
            }}
          >
            <IconTrash />
          </IconTrashContainer>
        </HabitCardContainer>
      </CardBody>
    </HabitCard>
  );
};

export default HabitBox;
