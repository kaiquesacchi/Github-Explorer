import React, { useState } from 'react'
import * as SC from './styles'

import { FiChevronDown, FiChevronUp, FiMinus } from 'react-icons/fi'

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
  const [isOpen, setIsOpen] = useState(false)
  return (
    <SC.CollapsibleListItem>
      <SC.CollapsibleTitleArea
        onClick={() => {
          if (data.length > 0) setIsOpen(!isOpen)
        }}
      >
        {data.length === 0 ? (
          <FiMinus />
        ) : isOpen ? (
          <FiChevronUp />
        ) : (
          <FiChevronDown />
        )}
        <h2>{title}</h2>
      </SC.CollapsibleTitleArea>
      {isOpen && (
        <SC.CollapsibleContentArea>
          <SC.BlackBar />
          <div>
            {data.map((item, index) => (
              <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
            ))}
          </div>
        </SC.CollapsibleContentArea>
      )}
    </SC.CollapsibleListItem>
  )
}
