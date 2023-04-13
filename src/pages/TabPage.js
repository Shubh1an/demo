import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import TabPane from '../components/Tabs/tab-pane'
import Tabs from '../components/Tabs/Tabs'
import '../components/Tabs/tabs.css'
import { Roles } from '../utils/RolesEnum'
const TabPage = () => {
  const [auth,setAuth]= useState(false)
  useEffect(()=>{
    
   let user= localStorage.getItem("credentials")
  
   
     setAuth(JSON.parse(user))
    
   },[])
  return (
    <div>
      <Header auth={auth}/>
        <Tabs>
          {auth?.role===Roles?.Admin&&<TabPane name="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>}
          <TabPane name="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane name="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane name="Tab 4" key="4">
            Content of Tab Pane 4
          </TabPane>
        </Tabs>
    </div>
  )
}

export default TabPage