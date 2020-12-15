import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTodos } from '../../../hooks/services/useTodos';

import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { Pagination } from '../../../components/Pagination/Pagination';

import { getUrl } from '../../../util/browser/BrowserProvider';
import { ValueState } from '@ui5/webcomponents-react';

const TodoListPaginatedItems: React.FC = () => {
  const history = useHistory();
  const [page, setPage] = useState(0);
  const { resolvedData, isLoading } = useTodos(page);

  const redirectToEditPage = (e: any) => {
    history.push(getUrl('TODO_EDIT', [{ value: e.detail.item.dataset.id }]));
  };

  return (
    <div>
      {isLoading ? (
        <BusyIndicator active />
      ) : (
        <>
          <Title level={TitleLevel.H5}>{`Records (${resolvedData.numberOfElements} / ${resolvedData.totalElements})`}</Title>
          <br />
          <List onItemClick={(e) => redirectToEditPage(e)}>
            {resolvedData.content.map((todo: any, index: number) => (
              <StandardListItem data-id={todo.id} key={index} iconEnd={false} info={todo.description} infoState={ValueState.None} selected={false}>
                {todo.name}
              </StandardListItem>
            ))}
          </List>
          <Pagination
            shouldDisableAll={false}
            numberOfElements={resolvedData.numberOfElements}
            totalPages={resolvedData.totalPages}
            selectedPage={resolvedData.number}
            setPage={(params) => setPage(params)}
          />
        </>
      )}
    </div>
  );
};

export default TodoListPaginatedItems;
