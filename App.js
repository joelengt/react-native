import React, { Component } from 'react';
import { Alert, Modal, Button, StyleSheet, Text, View, FlatList, Image, TouchableHighlight } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import Stack from 'react-router-native-stack';

const data = [
  {id: 1, key: 'Lucy', img: 'https://img00.deviantart.net/aeda/i/2017/201/0/5/lucy___fairy_tail_ch_544_by_michysen-dbh31v0.png'},
  {id: 2, key: 'Jackson', img: 'http://images6.fanpop.com/image/photos/33200000/All-that-I-have-of-Lucy-fairy-tail-lucy-heartfilia-33259814-245-240.gif'},
  {id: 3, key: 'James', img: 'https://pbs.twimg.com/profile_images/548336701471748096/wsCLYgf3.jpeg'},
  {id: 4, key: 'Joel', img: 'https://vignette.wikia.nocookie.net/onepiece/images/b/bb/Nami_mirage_tempo.png/revision/latest?cb=20120822094627&path-prefix=es'},
  {id: 5, key: 'John', img: 'http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/aoba-suzukaze-new-game-3.71.jpg'},
  {id: 6, key: 'Jillian', img: 'https://www.nautiljon.com/images/perso/00/49/hoshikawa_mafuyu_15894.jpg?1512140123'},
  {id: 7, key: 'Jimmy', img: 'https://pbs.twimg.com/profile_images/548336701471748096/wsCLYgf3.jpeg'},
  {id: 8, key: 'Julie', img: 'https://vignette.wikia.nocookie.net/onepiece/images/b/bb/Nami_mirage_tempo.png/revision/latest?cb=20120822094627&path-prefix=es'},
]

function Home({ history }) {
  return (
    <View>
      <View style={{ alignSelf: 'center', flex: 1 }}>
        <Text style={{ color: 'black' }}>Home Page</Text>
      </View>
      <View>
        <FlatList
           data={data}
           renderItem={({item}) => (
             <TouchableHighlight onPress={ () => history.push('/detail/' + item.id) }>
               <View style={styles.item}>
                  <View style={{flex: 1}}>
                    <Image source={{uri: item.img}} style={{width: 40, height: 40}} />
                  </View>
                  <View style={{flex: 1}}>
                    <Text>{item.key}</Text>
                  </View>
               </View>
             </TouchableHighlight>
            )
           }
         />
      </View>
      <MenuBar history={history}/>
    </View>
  );
}

function MenuBar({ history }) {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <Button title="A" onPress={() => history.push('/')} />
        <Text style={{ color: 'black', fontSize: 8, alignSelf: 'center' }}>Home</Text>
      </View>
      <View style={{flex: 1}}>
        <Button title="B" onPress={() => history.push('/page/taco')} />
        <Text style={{ color: 'black', fontSize: 9, alignSelf: 'center' }}>List</Text>
      </View>
      <View style={{flex: 1}}>
        <Button title="C" onPress={() => history.push('/page/hamburger')} />
        <Text style={{ color: 'black', fontSize: 8, alignSelf: 'center' }}>Others</Text>
      </View>
    </View>
  )
}

// function Detail({ history, match }) {
//   /* Get current Element data */
//   let elementPicked = data.find((el) => el.id === Number(match.params.id))

//   return (
//     <View style={styles.screen}>
//       <Text>Element Detail  {match.params.id} !</Text>
//       <Text>{ elementPicked.key }</Text>
//       <Image source={{uri: elementPicked.img}} style={{width: 193, height: 110}}/>
//       <Button title="Show message" color="blue" onPress={() => setUpAlert()} />
//       <ModalExample />
//       <Button title="Go Back" color="red" onPress={() => history.goBack()} />
//       <MenuBar history={history} />
//     </View>
//   );
// }

class Detail extends Component {
  state = {
    counter: 0
  }

  setUpAlert() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  render() {
    const { history, match } = this.props

    /* Get current Element data */
    let elementPicked = data.find((el) => el.id === Number(match.params.id))
    return(
      <View style={styles.screen}>
        <Text>{ elementPicked.key } - {match.params.id} ! | {this.state.counter}</Text>
        <Image source={{uri: elementPicked.img}} style={{width: 193, height: 110}}/>
        <Button title="Show message" color="blue" onPress={() => this.setUpAlert()} />
        <Button title="Click!" color="blue" onPress={() => this.setState(({ counter }) => ({ counter: counter + 1 }))} />
        <ModalExample />
        <Button title="Go Back" color="red" onPress={() => history.goBack()} />
        <MenuBar history={history} />
      </View>
    )
  }
}

function Page({ history, match }) {
  return (
    <View style={styles.screen}>
      <Text>You are on a {match.params.name} Page!</Text>
      <Button title="Go Back" color="red" onPress={() => history.goBack()} />
      <Button title="Pizza Page" onPress={() => history.push('/page/pizza')} />
      <Button title="Taco Page" onPress={() => history.push('/page/taco')} />
      <Button title="Hamburger Page" onPress={() => history.push('/page/hamburger')} />
      <MenuBar history={history}/>
    </View>
  );
}

class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{ color: 'red' }}>Hide Modal (x)</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Stack>
          <Route exact path="/" component={Home} />
          <Route path="/page/:name" component={Page} />
          <Route path="/detail/:id" component={Detail} />
        </Stack>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  item: {
    padding: 20,
    height: 80,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});