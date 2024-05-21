import {ActionIcon, Button, Group, Textarea} from "@mantine/core";
import ProtectedComponent from "./ProtectedComponent.jsx";
import {IconPencil} from "@tabler/icons-react";
import {useDisclosure} from "@mantine/hooks";

function EditableText({text, setText, onSave, ...others}){
    const [editing, {toggle}] = useDisclosure();

    const TextComp = () => (
           <>{text}</>
    )

    const EditableComp = () => (
        <Textarea
            value={text}
            onChange={(event) => setText(event.currentTarget.value)}
            {...others}/>
    )

    return (
      <>
          <ProtectedComponent>
              <ActionIcon onClick={toggle}>
                  <IconPencil/>
              </ActionIcon>
          </ProtectedComponent>

          {editing ? EditableComp() : TextComp()}

          {
              editing &&
              <ProtectedComponent>
                  <Group>
                      <Button onClick={() => {onSave(); toggle();}}>Salvar</Button>
                      <Button onClick={toggle}>Cancelar</Button>
                  </Group>
              </ProtectedComponent>
          }
      </>
    );
}

export default EditableText;