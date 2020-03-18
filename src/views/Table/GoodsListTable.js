import React, { useState } from 'react'
import { Table, Avatar } from 'table'

const columns = [
  {
    title: "商品名称",
    key: "name",
    dataIndex: "name",
    render: (name, row) => (
      <React.Fragment>
        <Avatar src={row.img} />
        &nbsp;&nbsp;
        {name}
      </React.Fragment>
    )
  },
  {
    title: "商品价格",
    key: "price",
    dataIndex: "price",
    render: price => `¥ ${parseFloat(price).toFixed(2)}`
  },
  {
    title: "商品库存",
    key: "stock",
    dataIndex: "stock"
  },
  {
    title: "创建时间",
    key: "createTime",
    dataIndex: "createTime"
  },
  {
    title: "更新时间",
    key: "updateTime",
    dataIndex: "updateTime"
  }
];

export default function GoodsListTable () {
  return (
    <div>
      table
    </div>
  )
}
