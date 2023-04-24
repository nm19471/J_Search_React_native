import React from 'react'
import { View, Text ,TouchableOpacity ,FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const TabButton =({name,activeTab,onhandleSearchType})=>{
  return(
  <TouchableOpacity
    style={styles.btn(name,activeTab)}
    onPress={onhandleSearchType}
  >
    <Text style={styles.btnText(name,activeTab)}>{name}</Text>
  </TouchableOpacity>
  )
}
const Tabs = ({tabs,activeTab,setActiveTab}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
          <TabButton
            name={item}
            activeTab={activeTab}
            onhandleSearchType={()=>setActiveTab(item)}

          />
        )}
       
        keyExtractor={(item)=>item}
        contentContainerStyle={{columnGap: SIZES.small /2 }}
      />
    </View>
  )
}

export default Tabs