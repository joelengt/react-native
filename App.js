import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, FlatList, Image, TouchableHighlight } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import Stack from 'react-router-native-stack';

function Home({ history }) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={{ color: 'black' }}>Home Page</Text>
      </View>
      <View style={{flex: 4, backgroundColor: 'white', borderBottomWidth: 1, borderColor: 'lightgray'}}>
        <FlatList
           data={[
             {id: 1, key: 'Devin', img: 'https://img00.deviantart.net/aeda/i/2017/201/0/5/lucy___fairy_tail_ch_544_by_michysen-dbh31v0.png'},
             {id: 2, key: 'Jackson', img: 'http://images6.fanpop.com/image/photos/33200000/All-that-I-have-of-Lucy-fairy-tail-lucy-heartfilia-33259814-245-240.gif'},
             {id: 3, key: 'James', img: 'https://pbs.twimg.com/profile_images/548336701471748096/wsCLYgf3.jpeg'},
             {id: 4, key: 'Joel', img: 'https://vignette.wikia.nocookie.net/onepiece/images/b/bb/Nami_mirage_tempo.png/revision/latest?cb=20120822094627&path-prefix=es'},
             {id: 5, key: 'John', img: 'http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/aoba-suzukaze-new-game-3.71.jpg'},
             {id: 6, key: 'Jillian', img: 'https://www.nautiljon.com/images/perso/00/49/hoshikawa_mafuyu_15894.jpg?1512140123'},
             {id: 7, key: 'Jimmy', img: 'https://pbs.twimg.com/profile_images/548336701471748096/wsCLYgf3.jpeg'},
             {id: 8, key: 'Julie', img: 'https://vignette.wikia.nocookie.net/onepiece/images/b/bb/Nami_mirage_tempo.png/revision/latest?cb=20120822094627&path-prefix=es'},
           ]}
           renderItem={({item}) => (
             <TouchableHighlight onPress={ () => history.push('/detail/' + item.id) }>
               <View style={styles.item}>
                 <Image source={{uri: item.img}} style={{width: 40, height: 40}}/>
                 <Text>{item.key}</Text>
               </View>
             </TouchableHighlight>
            )
           }
         />
      </View>
      <View style={{flex: 1, backgroundColor: 'white', height: 20}}>
        <Button title="Pizza Page" onPress={() => history.push('/page/pizza')} />
        <Button title="Taco Page" onPress={() => history.push('/page/taco')} />
        <Button title="Hamburger Page" onPress={() => history.push('/page/hamburger')} />
      </View>
    </View>
  );
}

function Page({ history, match }) {
  return (
    <View style={styles.screen}>
      <Text>You are on a {match.params.name} Page!</Text>
      <Button title="Go Back" color="red" onPress={() => history.goBack()} />
      <Button title="Pizza Page" onPress={() => history.push('/page/pizza')} />
      <Button title="Taco Page" onPress={() => history.push('/page/taco')} />
      <Button title="Hamburger Page" onPress={() => history.push('/page/hamburger')} />
    </View>
  );
}

function Detail({ history, match }) {
  let data = [
    {id: 1, key: 'Devin', img: 'https://img00.deviantart.net/aeda/i/2017/201/0/5/lucy___fairy_tail_ch_544_by_michysen-dbh31v0.png'},
    {id: 2, key: 'Jackson', img: 'http://images6.fanpop.com/image/photos/33200000/All-that-I-have-of-Lucy-fairy-tail-lucy-heartfilia-33259814-245-240.gif'},
    {id: 3, key: 'James', img: 'https://pbs.twimg.com/profile_images/548336701471748096/wsCLYgf3.jpeg'},
    {id: 4, key: 'Joel', img: 'https://vignette.wikia.nocookie.net/onepiece/images/b/bb/Nami_mirage_tempo.png/revision/latest?cb=20120822094627&path-prefix=es'},
    {id: 5, key: 'John', img: 'http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/aoba-suzukaze-new-game-3.71.jpg'},
    {id: 6, key: 'Jillian', img: 'https://www.nautiljon.com/images/perso/00/49/hoshikawa_mafuyu_15894.jpg?1512140123'},
    {id: 7, key: 'Jimmy', img: 'https://pbs.twimg.com/profile_images/548336701471748096/wsCLYgf3.jpeg'},
    {id: 8, key: 'Julie', img: 'https://vignette.wikia.nocookie.net/onepiece/images/b/bb/Nami_mirage_tempo.png/revision/latest?cb=20120822094627&path-prefix=es'},
  ]

  /* Get current Element data */
  let elementPicked = data.filter((el) => {
    return el.id === Number(match.params.id)
  })

  elementPicked = elementPicked[0]

  return (
    <View style={styles.screen}>
      <Text>Element Detail  {match.params.id} !</Text>
      <Text>{ elementPicked.key }</Text>
      <Image source={{uri: elementPicked.img}} style={{width: 193, height: 110}}/>
      <Button title="Go Back" color="red" onPress={() => history.goBack()} />
    </View>
  );
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
    alignItems: 'center',
    padding: 20,
    height: 80,
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
});