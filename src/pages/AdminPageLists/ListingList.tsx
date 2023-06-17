import { ArrayField, ChipField, Datagrid, List, ReferenceField, SingleFieldList, TextField } from 'react-admin';

export const ListingList = () => {
  return (
    <List>
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='title' />
        <TextField source='ended' />
        <TextField source='expirationDate' />
        <TextField source='creationDate' />
        <TextField source='description' />
        <TextField source='photos' />
        <ArrayField source='bids'>
          <SingleFieldList>
            <ChipField source='id' />
          </SingleFieldList>
        </ArrayField>
        <TextField source='advertiserId' />
        <TextField
          source='winnerId'
          reference='users'
        />
      </Datagrid>
    </List>
  );
};
