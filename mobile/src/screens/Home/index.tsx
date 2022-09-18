import { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';

import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

import { GAMES } from '../../utils/games';

interface Game {
  id: string;
  tittle: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }

}

export function Home() {

  // const[games, setGames] = useState<Game[]>([])

  // useEffect( () => {
  //   fetch("http://:3333/games")
  //     .then( response => response.json() )
  //     .then( data => { 
  //       setGames(data)
  //     })
  // },[])

  return (
    <View style={styles.container}>
        <Image 
            source={logoImg}
            style={styles.logo}
        />

        <Heading 
            title="Encontre seu duo!" 
            subtitle="Selecione o game que deseja jogar..." 
        />

        <FlatList 
          data={GAMES}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <GameCard 
              data={item}  
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        >
          
        </FlatList>

        
    </View>
  );
}