import { ArrayField, BooleanField, ChipField, Datagrid, EmailField, List, SingleFieldList, TextField } from 'react-admin';

export const UserList = () => {
  return (
    <List>
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='displayName' />
        <TextField source='password' />
        <EmailField source='email' />
        <BooleanField source='enabled' />
        <ArrayField source='authorities'>
          <SingleFieldList>
            <ChipField source='authority' />
          </SingleFieldList>
        </ArrayField>
        <TextField source='username' />
        <BooleanField source='accountNonLocked' />
        <BooleanField source='credentialsNonExpired' />
        <BooleanField source='accountNonExpired' />
      </Datagrid>
    </List>
  );
};
