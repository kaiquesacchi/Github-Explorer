import React, { useState } from 'react'
import * as SC from './styles'

import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface iProps<T> {
  data: {
    [key: string]: T[]
  }
  renderItem: (item: T) => React.ReactNode
}

export default function List<T>({ data, renderItem }: iProps<T>) {
  return (
    <SC.ListBody>
      {Object.keys(data).map(key => (
        <CollapsibleListItem<T>
          key={key}
          title={key}
          data={data[key]}
          renderItem={renderItem}
        ></CollapsibleListItem>
      ))}
    </SC.ListBody>
  )
}

interface iCollapsibleListItemProps<T> {
  title: string
  data: T[]
  renderItem: (item: T) => React.ReactNode
}

function CollapsibleListItem<T>({
  title,
  data,
  renderItem,
}: iCollapsibleListItemProps<T>) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <SC.CollapsibleListItem>
      <SC.CollapsibleTitleArea onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        <h2>{title}</h2>
      </SC.CollapsibleTitleArea>
      {isOpen && (
        <SC.CollapsibleContentArea>
          {data.map((item, index) => (
            <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
          ))}
        </SC.CollapsibleContentArea>
      )}
    </SC.CollapsibleListItem>
  )
}
