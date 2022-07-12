import axios from "axios";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Button, Card, CarouselItem, Container, Dropdown, Tab, Tabs, Toast } from "react-bootstrap";
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { getPost } from "../lib/getData";
import { addToCart } from "../store/actions";
import { DataContext } from "../store/globalState";

const TabsMenu = ({ widgets }) => {
  const { state, dispatch } = useContext(DataContext)
  const { cart } = state
  const menu = widgets?.find(item => item.widgetType == 5)
  const data = JSON.parse(menu?.data) || {}
  const [tabs, setTabs] = useState(data.Menus[0].Name)
  const [styles, setStyles] = useState(1)

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get(`https://jsonplaceholder.typicode.com/${tabs}?_limit=10`)
  //     setItems(res.data)
  //   }
  //   getData()
  // }, [tabs])


  const handleMuaButton = (item) => {
    // alert('Thêm vào giỏ hàng thành công!!!')
    dispatch(addToCart(item, cart))
  }
  const dataList = data.Menus.find(item => item.Name == tabs)?.Items
  return (
    <div className="container rounded p-2 d-flex bg-white justify-content-between" style={{ gap: 10 }}>
      <div className="leftColumn align-center justify-content-center" style={{ minWidth: 250, borderRight: '1px solid #ccc' }}>
        <ul className="d-flex flex-column justify-content-center bg-white rounded" style={{ listStyle: 'none', padding: 0 }}>
          {
            data.Menus.map((item, index) =>
              <li key={index} onClick={e => setTabs(item.Name)} style={tabs == item.Name ? { backgroundColor: '#f0f0f0' } : {}} className="p-3 text-center">{item.Name}</li>
            )
          }
        </ul>
      </div>

      <div className="rightColumn" style={{ flex: 1 }}>
        <div className="columnHead d-flex flex-row justify-content-between mb-3" style={{ borderBottom: '1px solid #ccc', padding: 10 }}>
          <h4>{tabs}</h4>

          <Dropdown className=''>
            <Dropdown.Toggle variant='light' id="dropdown-basic">
              <BsFillGrid1X2Fill />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={e => setStyles(1)}>1</Dropdown.Item>
              <Dropdown.Item onClick={e => setStyles(2)}>2</Dropdown.Item>
              <Dropdown.Item onClick={e => setStyles(3)}>3</Dropdown.Item>
              <Dropdown.Item onClick={e => setStyles(4)}>4</Dropdown.Item>
              <Dropdown.Item onClick={e => setStyles(5)}>5</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-flex position-relative">
          <div className="w-100" style={{ display: 'grid', gridTemplateColumns: `repeat(${styles},1fr)`, gap: '5px' }}>
            {
              dataList?.map((item, index) =>
                <div className="item" key={index} style={styles == '1' ? { display: ' flex', flexDirection: ' row', padding: 5, border: '1px solid #ccc', gap: 10 } : { display: 'flex', flexDirection: 'column' }}>
                  <div style={styles == 1 ? { width: '80px', height: '100%', borderRadius: 10 } : { width: '100%', height: '100%', borderRadius: 10 }}>
                    <img src={item.Image} alt='' style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', borderRadius: 10 }} />
                  </div>
                  <div className="text">
                    <h6 style={{ marginBottom: 0 }}>{item.Name}</h6>
                    <p className="text-bg-secondary" style={{ marginBottom: 0 }}>{item.Description}</p>
                    <p className="text-secondary" style={{ marginBottom: 0 }}>{item.Price}đ</p>
                    <Button onClick={() => handleMuaButton(item)}>Mua</Button>

                  </div>
                </div>
              )
            }

          </div>
        </div>
      </div>

    </div>);

};

export default TabsMenu;
