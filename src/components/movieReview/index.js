import React from "react";
import { Header, Image, Table } from 'semantic-ui-react'

export default ({ review }) => {
  return (
    <>
      <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Review by</Table.HeaderCell>
        <Table.HeaderCell>Review</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header>
              
            <Header.Content>
            {review.author}
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{review.content}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
    </>
  );
};