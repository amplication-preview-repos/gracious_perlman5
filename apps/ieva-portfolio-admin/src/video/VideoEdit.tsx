import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const VideoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Thumbnail" source="thumbnail" />
        <TextInput label="Title" source="title" />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Edit>
  );
};
