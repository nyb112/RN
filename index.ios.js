/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
var Dimensions = require('Dimensions');
//导入json数据
var Datas = require('./Datas.json');
var {width} = Dimensions.get('window');


var cols = 3;  //列
var herowidth = 100;  //每个item的宽
var  vmargin = (width-cols*herowidth)/(cols + 1);  //左右间距
var  hmargin = 20;  //上下间距



export default class RN3 extends Component {
  render() {
    return (
      <View style={styles.container}>
          {/*返回6个视图*/}
          {this.renderAllHero()}
      </View>
    );
  }
  //返回所有的英雄
    renderAllHero(){
        //定义数组装所有的子组件
        var allhero = [];
        //遍历json数据
        for (var i = 0;i<Datas.data.length;i ++){
            //取出单独的数据对象
            var hero = Datas.data[i];
            //直接装入数组
            allhero.push(
              <View key={i} style={styles.outViewStyle}>
                  <Image source={{uri: hero.icon}} style={styles.ImageStyle}/>
                  <Text style={styles.nameStyle}>
                      {hero.name}
                  </Text>
              </View>

            );

        }
        //返回数组
        return allhero;
    }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //主轴方向居中
      flexDirection:'row',
      flexWrap:'wrap',


  },
    outViewStyle:{
      backgroundColor:'red',
        //设置侧轴对齐方式
        alignItems:'center',
        width:herowidth,
        height:herowidth,
        marginLeft:vmargin,
        marginTop:hmargin

    },
    ImageStyle:{
        width:80,
        height:80,
        backgroundColor:'red'

    },
    nameStyle:{


    }
});

AppRegistry.registerComponent('RN3', () => RN3);
