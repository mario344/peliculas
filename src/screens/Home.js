import React,{useState,useEffect} from 'react'
import {StyleSheet, Text, View,ScrollView } from 'react-native'
import {Title} from 'react-native-paper';
import  CarouselVertical from '../components/CarouselVertical'
import {getNewsMoviesApi} from '../api/movies';

export default function Home() {

    //aqui gardamos todas las peliculas que encontramos

    const [newMovies, setnewMovies] = useState(null);

    


    useEffect(() => {
       
      getNewsMoviesApi().then((res)=>{
        setnewMovies(res.results)
      })

   
    }, [])

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            {newMovies && (
                <View style={styles.news}>
                    <Title style={styles.newsTitle}>Nuevas Peliculas</Title>
                    <CarouselVertical
                        data={newMovies}
                    />
                </View>
                    
            )}
        </ScrollView>
    )
}


//marginv para que nmo se junte con la cabezera
const styles = StyleSheet.create({
    news:{
        marginVertical:10,

    },
    newsTitle:{
        marginBottom:15,
        marginHorizontal:20,
        fontWeight:"bold",
        fontSize:22
    }
})
