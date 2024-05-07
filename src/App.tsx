import { Button } from "keep-react";
import "@mantine/core/styles.css";
import "./App.css";
import { Divider, Grid, Space, Title } from "@mantine/core";
// import { questions } from "./question";
import { useState } from "react";

function App() {
  const BUTTON_TEXT = {
    ACCEPT: "Aceptar",
    NEXT: "Siguiente",
  };
  const [buttonColor, setButtonColor] = useState("primary");
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(
    null
  );
  const answers = ["tacos", "pizza", "tortas", "Pita"];
  const selectAnswer = (index: number | null) => {
    setSelectedButtonIndex(index);

    setTimeout(() => {
      const color = selectedButtonIndex === 0 ? "error" : "success";
      setButtonColor(color);
    }, 4000);
  };

  return (
    <>
      <Grid>
        <Grid.Col span={12}>
          <Title order={2}>Ciencias naturales</Title>
          <Divider color="cyan" size={10} />
        </Grid.Col>
        <Grid.Col>
          <Title order={3}>¿Cuánto es 2 + 2?</Title>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col display={"flex"}>
          {answers.map((answer, index) => (
            <>
              <Button
                color={selectedButtonIndex === 0 ? "error" : "success"}
                onClick={() => selectAnswer(index)}
                className={
                  selectedButtonIndex === index ? "buttonSelected" : ""
                }
              >
                {answer}
              </Button>
              <Space w={"xl"} />
            </>
          ))}
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col offset={4} span={4}>
          <Space h={"xl"} />
          <Button>{BUTTON_TEXT.ACCEPT}</Button>
        </Grid.Col>
      </Grid>
    </>
  );
}
export default App;
