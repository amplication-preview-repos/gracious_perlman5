import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const VideoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Thumbnail" source="thumbnail" />
        <TextInput label="Title" source="title" />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Create>
  );
};
